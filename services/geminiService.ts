
import { GoogleGenAI, Type } from "@google/genai";
import { AliasResult } from "../types";

export const generateAlias = async (name: string): Promise<AliasResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const prompt = `Generate a 'Night Manager' style espionage cover identity for a guest named "${name}" attending a stag do in London. 
  The tone should be sophisticated, luxurious, and slightly mysterious, mirroring the BBC series. 
  Provide a code name, a brief cover story (their "day job" in high-stakes international business or arms dealing), 
  an assigned role for the night, and a specific luxury accessory they should carry.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          codeName: { type: Type.STRING },
          coverStory: { type: Type.STRING },
          assignedRole: { type: Type.STRING },
          luxuryAccessory: { type: Type.STRING }
        },
        required: ["codeName", "coverStory", "assignedRole", "luxuryAccessory"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return {
      codeName: "The Ghost",
      coverStory: "International logistics specialist with ties to the Balearics.",
      assignedRole: "Intelligence Liaison",
      luxuryAccessory: "Silver cigarette case"
    };
  }
};
