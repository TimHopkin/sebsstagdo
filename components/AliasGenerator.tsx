
import React, { useState } from 'react';
import { generateAlias } from '../services/geminiService';
import { AliasResult } from '../types';

const AliasGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [alias, setAlias] = useState<AliasResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      const result = await generateAlias(name);
      setAlias(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-amber-900/30 p-8 rounded-lg shadow-2xl">
      <h3 className="text-2xl mb-4 text-amber-500 text-center">Secure Your Cover Identity</h3>
      <p className="text-slate-400 mb-6 text-sm text-center italic">Every operative needs a legend. Generate your 'Night Manager' alias below.</p>
      
      {!alias ? (
        <form onSubmit={handleGenerate} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your real name..."
            className="w-full bg-slate-800 border border-slate-700 p-3 rounded text-white focus:outline-none focus:border-amber-500 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded transition-all disabled:opacity-50"
          >
            {loading ? "Establishing Link..." : "Retrieve Briefing"}
          </button>
        </form>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="text-xs uppercase text-amber-500/70 tracking-widest font-bold">Code Name</div>
            <div className="text-xl font-bold uppercase tracking-widest">{alias.codeName}</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase text-slate-500 tracking-widest">Cover Story</div>
              <p className="text-slate-300 italic">"{alias.coverStory}"</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs uppercase text-slate-500 tracking-widest">Assigned Role</div>
                <div className="text-amber-200">{alias.assignedRole}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-slate-500 tracking-widest">Accessory</div>
                <div className="text-amber-200">{alias.luxuryAccessory}</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setAlias(null)}
            className="text-xs text-amber-500/50 hover:text-amber-500 transition-colors uppercase tracking-widest block mx-auto pt-4"
          >
            Reset Identity
          </button>
        </div>
      )}
    </div>
  );
};

export default AliasGenerator;
