import express from "express";
import { mcpController } from "../controller/mcp.controller.ts";
const Router = express.Router();

Router.get("/test-mcp", mcpController);

export default Router;
