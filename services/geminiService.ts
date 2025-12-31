
import { GoogleGenAI, Type } from "@google/genai";
import { FALLBACK_QUESTIONS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyQuestion = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate one playful, romantic, or thought-provoking 'getting to know you' question for a long-distance couple who have been dating for just one week. Keep it short, sweet, and intimate. Avoid clichés.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING }
          },
          required: ["question"]
        }
      }
    });

    const data = JSON.parse(response.text || "{}");
    return data.question || FALLBACK_QUESTIONS[Math.floor(Math.random() * FALLBACK_QUESTIONS.length)];
  } catch (error) {
    console.error("Gemini Error:", error);
    return FALLBACK_QUESTIONS[Math.floor(Math.random() * FALLBACK_QUESTIONS.length)];
  }
};
