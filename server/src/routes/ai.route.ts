import express from "express";
import askAicontroller from "../controller/ai.controller.ts";

const AIRouter = express.Router();

AIRouter.post("/ask", askAicontroller);

export default AIRouter;
