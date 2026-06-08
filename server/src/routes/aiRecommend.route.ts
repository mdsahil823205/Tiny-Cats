import express from "express";
import askAicontroller from "../controller/ai.controller.ts";
import { aiRecommendController } from "../controller/aiRecommend.controller.ts";

const AIRouter = express.Router();

AIRouter.post("/aiRecommend",aiRecommendController);

export default AIRouter;
