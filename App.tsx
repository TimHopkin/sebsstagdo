
import React, { useEffect, useState } from 'react';
import { EVENT_DATE, EVENT_LOCATION, THEME, ITINERARY, DRESS_CODE_TIPS } from './constants';
import AliasGenerator from './components/AliasGenerator';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-amber-900/20' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl tracking-[0.3em] font-bold text-amber-500 uppercase">Classified</div>
          <div className="hidden md:flex space-x-8 text-xs tracking-widest uppercase">
            <a href="#briefing" className="hover:text-amber-500 transition-colors">The Briefing</a>
            <a href="#itinerary" className="hover:text-amber-500 transition-colors">Schedule</a>
            <a href="#dress-code" className="hover:text-amber-500 transition-colors">Attire</a>
            <a href="#rsvp" className="hover:text-amber-500 transition-colors">RSVP</a>
          </div>
          <button
            className="md:hidden text-amber-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-amber-900/20">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 text-xs tracking-widest uppercase">
              <a href="#briefing" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>The Briefing</a>
              <a href="#itinerary" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Schedule</a>
              <a href="#dress-code" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Attire</a>
              <a href="#rsvp" className="hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>RSVP</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/122/1920/1080?grayscale&blur=2" 
            alt="London Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-amber-500 tracking-[0.5em] uppercase text-sm mb-6 animate-pulse">Eyes Only</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-none">
            SEB'S <br/> <span className="text-amber-600">STAG DO</span>
          </h1>
          <div className="serif-text text-xl md:text-2xl italic text-slate-300 max-w-2xl mx-auto mb-12">
            "The world is a very dangerous place, Seb. One must be prepared."
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-sm tracking-[0.2em] uppercase font-bold text-amber-500/80">
            <div>{EVENT_DATE}</div>
            <div className="hidden md:block w-px h-8 bg-amber-900/50"></div>
            <div>{EVENT_LOCATION}</div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Scroll to Declassify</div>
          <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
      </section>

      {/* Mission Briefing Section */}
      <section id="briefing" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center">
              <span className="text-amber-600 mr-4">01.</span> THE BRIEFING
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Ladies and Gentlemen, you are invited to a high-stakes weekend in the heart of London. We are operating under the cover of a celebration, but the objective remains clear: honor the groom-to-be, Seb, with a standard of luxury and sophistication rarely seen outside the Balearic islands.
              </p>
              <p>
                The theme for the operation is <strong className="text-amber-500">"The Night Manager"</strong>. Think Richard Roper’s inner circle—international, dangerous, and impeccably dressed.
              </p>
              <div className="bg-amber-900/10 border-l-4 border-amber-600 p-6 mt-8 italic">
                "We are all looking for something. You’ve found the best party in London."
              </div>
            </div>
          </div>
          <div>
            <AliasGenerator />
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-amber-600 mr-4">02.</span> THE TIMELINE
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {ITINERARY.map((item, idx) => (
              <div key={idx} className="group flex items-center p-6 bg-slate-950 border border-slate-800 hover:border-amber-600 transition-all duration-300 rounded-lg">
                <div className="w-24 font-bold text-amber-500 tracking-widest">{item.time}</div>
                <div className="flex-1">
                  <div className="text-lg font-bold uppercase tracking-wide group-hover:text-amber-500 transition-colors">{item.activity}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-tighter">{item.location}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-xs uppercase tracking-widest">Classified Location</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section id="dress-code" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <a
               href="https://www.theguardian.com/books/2016/feb/20/john-le-carre-the-night-manager-television-adaptation"
               target="_blank"
               rel="noopener noreferrer"
               className="block group"
             >
               <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg shadow-2xl overflow-hidden border-2 border-amber-900/30 hover:border-amber-600 transition-all duration-500 hover:shadow-amber-900/30 hover:scale-[1.02]">
                 {/* Background texture */}
                 <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>

                 <div className="relative p-8">
                   {/* Classification stamp */}
                   <div className="absolute top-4 right-4 rotate-12 opacity-40 group-hover:opacity-70 transition-opacity">
                     <div className="border-4 border-red-600 rounded px-3 py-1">
                       <span className="text-red-600 font-bold text-xs tracking-[0.3em]">CLASSIFIED</span>
                     </div>
                   </div>

                   {/* Content */}
                   <div className="space-y-4">
                     <div className="flex items-center gap-3 mb-6">
                       <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center border border-amber-600/50">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                           <circle cx="12" cy="12" r="10"></circle>
                           <circle cx="12" cy="12" r="6"></circle>
                           <circle cx="12" cy="12" r="2"></circle>
                         </svg>
                       </div>
                       <div>
                         <div className="text-[10px] uppercase tracking-[0.3em] text-amber-500/70 font-bold">Intelligence Brief</div>
                         <div className="text-xs text-slate-500 uppercase tracking-widest">The Guardian</div>
                       </div>
                     </div>

                     <h3 className="text-2xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors leading-tight">
                       John le Carré's<br />The Night Manager
                     </h3>

                     <p className="text-slate-300 text-sm leading-relaxed">
                       The definitive guide to the television adaptation that inspired this operation. Essential reading for all operatives.
                     </p>

                     <div className="pt-4 flex items-center justify-between border-t border-slate-700/50">
                       <div className="text-xs text-slate-500 uppercase tracking-widest">Required Reading</div>
                       <div className="flex items-center gap-2 text-amber-500 group-hover:gap-3 transition-all">
                         <span className="text-xs uppercase tracking-widest font-bold">Access File</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="5" y1="12" x2="19" y2="12"></line>
                           <polyline points="12 5 19 12 12 19"></polyline>
                         </svg>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Hover effect overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-amber-900/0 to-amber-900/0 group-hover:from-amber-900/10 group-hover:to-transparent transition-all duration-500"></div>
               </div>
             </a>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-amber-600 mr-4">03.</span> THE ATTIRE
            </h2>
            <p className="text-slate-400 mb-8 italic">"Style is the only thing they can't take away from you in a Turkish prison."</p>
            <div className="space-y-4">
              <p className="text-slate-300 mb-6">
                Expectation: <strong>Night Manager Elegance</strong>. We're aiming for that effortless, Mediterranean billionaire-on-the-run look. Think high-end textures, linen, and expensive simplicity.
              </p>
              <ul className="space-y-3">
                {DRESS_CODE_TIPS.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-500 mr-3">✦</span>
                    <span className="text-slate-300 text-sm tracking-wide uppercase">{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 bg-slate-900 border border-amber-900/30 rounded">
                <p className="text-xs text-amber-500 uppercase tracking-widest font-bold mb-2">Note for London Weather</p>
                <p className="text-xs text-slate-400 italic">
                  Since it's London in March, feel free to layer with a charcoal overcoat or a structured trench. The core outfit must remain Roper-certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP / Footer Section */}
      <section id="rsvp" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-widest">Confirm Your Deployment</h2>
          <p className="text-slate-400 mb-12">Please provide your attendance status by January 1st, 2026. Non-compliance will result in immediate extraction from the operation.</p>
          
          {!rsvpStatus ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button
                onClick={() => setRsvpStatus('attending')}
                className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-widest transition-all rounded shadow-lg shadow-amber-900/20"
              >
                I'm In
              </button>
              <button
                onClick={() => setRsvpStatus('declined')}
                className="px-10 py-4 border border-slate-700 hover:border-red-900 hover:text-red-500 text-slate-400 font-bold uppercase tracking-widest transition-all rounded"
              >
                I'm Compromised
              </button>
            </div>
          ) : (
            <div className="mb-16 animate-fade-in">
              <div className={`p-6 rounded-lg border ${rsvpStatus === 'attending' ? 'bg-amber-900/20 border-amber-600' : 'bg-red-900/20 border-red-600'}`}>
                <p className="text-center text-lg font-bold uppercase tracking-widest mb-2">
                  {rsvpStatus === 'attending' ? 'Mission Confirmed' : 'Status: Compromised'}
                </p>
                <p className="text-center text-sm text-slate-400 mb-4">
                  {rsvpStatus === 'attending'
                    ? 'Your deployment has been confirmed. Await further instructions.'
                    : 'Your absence has been noted. Extraction protocols initiated.'}
                </p>
                <button
                  onClick={() => setRsvpStatus(null)}
                  className="text-xs text-amber-500/70 hover:text-amber-500 transition-colors uppercase tracking-widest block mx-auto"
                >
                  Revise Status
                </button>
              </div>
            </div>
          )}

          <div className="pt-24 border-t border-slate-800">
            <div className="text-[10px] text-slate-600 uppercase tracking-[0.5em] mb-4">Official Document 2026-STAG-SEB</div>
            <div className="text-amber-900/40 font-bold text-6xl opacity-10 uppercase absolute left-0 right-0 -z-10 select-none">TOP SECRET</div>
            <div className="text-slate-500 text-xs">London | March 21, 2026 | No Records Found</div>
          </div>
        </div>
      </section>

      {/* Floating Action Button for Mobile RSVP */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href="#rsvp" className="bg-amber-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-amber-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
