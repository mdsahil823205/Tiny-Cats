import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.ts";
import { generateAIResponse } from "../services/Ai.service.ts";

export const mcpController = async (req: Request, res: Response) => {
  try {
    const client = await getMcpClient();
    const listTools = await client.listTools();
    const result = await client.callTool({
      name: "ai_recommend_cat",
      arguments: {
        kidsFriendly: true,
        appartmentFriendly: true,
      },
    });
    // MCP tool data is located directly in the .text property
    const catsData = result?.content?.[0]?.text || null;

    if (!catsData) {
      return res.status(404).json({
        success: false,
        error: "No cat data returned from the tool.",
      });
    }

    let prompt = `
    Available cats:
    ${catsData} 
    
    Please recommend the best cats from this data.`;
    
    let aiResponse = await generateAIResponse(prompt);

    res.status(200).json({
      success: true,
      data: aiResponse,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
