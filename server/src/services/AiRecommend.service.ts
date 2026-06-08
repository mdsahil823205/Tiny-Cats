import { generateAIResponse } from "./Ai.service.ts";
import { recommendService } from "./cat.service.ts";

const AiRecommendService = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
) => {
  const MatchFromDB = await recommendService(kidsFriendly, appartmentFriendly);
  const prompt = `
  You are an expert, professional cat advisor with deep knowledge of all cat breeds, behaviors, and care requirements.
  
  You have access to the following specific metric data for the cat being discussed:
  - Kid Friendly Status: ${kidsFriendly ? "Excellent with children" : "Better for adults-only homes"}
  - Apartment Friendly Status: ${appartmentFriendly ? "Perfect for apartment living" : "Needs a large space or house"}
  
  Your task is to provide a highly tailored, helpful, and empathetic answer to the user's inquiry based on this data. 
  
  Guidelines for your response:
  1. Act as a friendly yet highly knowledgeable feline behaviorist.
  2. Seamlessly blend the provided data (${kidsFriendly} and ${appartmentFriendly} context) into your explanation without sounding robotic.
  3. Give actionable advice or insights that directly address the user's needs.
  4. Keep the tone warm, professional, and authoritative.
`;
  const Airesponse = generateAIResponse(prompt);
  return Airesponse;
};

export default AiRecommendService;
