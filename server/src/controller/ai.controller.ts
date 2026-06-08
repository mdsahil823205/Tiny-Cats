import type { Request, Response } from "express";
import { generateAIResponse } from "../services/Ai.service.ts";

const askAicontroller = async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const result = await generateAIResponse(prompt);
  return res.status(201).json({
    message: "AI response",
    success: true,
    data: result,
  });
};

export default askAicontroller;
