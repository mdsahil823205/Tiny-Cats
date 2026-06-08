import type { Request, Response } from "express";
import AiRecommendService from "../services/AiRecommend.service.ts";

export const aiRecommendController = async (req: Request, res: Response) => {
  const { kidsFriendly, appartmentFriendly } = req.body;
  const result = await AiRecommendService(kidsFriendly, appartmentFriendly);
  return res.status(201).json({
    message: "AI recommendation response",
    success: true,
    data: result,
  });
};
