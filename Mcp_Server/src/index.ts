import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { aiRecoomendTools } from "./tools/aiRecommend.tool.ts";
import { aiSearchToolAllCats } from "./tools/AiSerach.tool.ts";

/**
 * 1. MCP Server Instance Initialization
 * Server ka naam aur version define karta hai taaki client ise identify kar sake.
 */
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

/**
 * 2. MCP Tool Registration
 * registerTool() function 3 important parameters leta hai:
 *   - Parameter 1: Name (Unique identifier for the tool)
 *   - Parameter 2: Config (Title, description, aur validation schema)
 *   - Parameter 3: Callback (Actual function jo execute hoti hai)
 */
server.registerTool(
  "ai_recommend_cat", // Tool name (LLM compatibility ke liye lowercase best hai)
  {
    title: "AI Cat Recommender",
    description:
      "Recommends a cat breed based on user lifestyle preferences like kids and apartment status.",
    // Validation schema structure: incoming inputs ko validate karne ke liye
    inputSchema: {
      kidsFriendly: z.boolean(),
      appartmentFriendly: z.boolean(),
    },
  },
  // Handler (Callback) function execution
  async ({ kidsFriendly, appartmentFriendly }) => {
    // Core logic call karke data fetch karna
    const result = await aiRecoomendTools(kidsFriendly, appartmentFriendly);

    // Context format return karna jo MCP protocol standard ko support kare
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);
// hum multiples tools bana skte hai 
server.registerTool(
  "searchCats",
  {
    title: "Search Cats",
    description: "Search cats",
  },
  async () => {
    const catData = await aiSearchToolAllCats();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(catData),
        },
      ],
    };
  },
);
/**
 * 3. Server Transport Lifecycle
 * Standard Input/Output (Stdio) stream setup karke server ko active karna.
 */
const transport = new StdioServerTransport();
server.connect(transport);

console.error("mcp server is running......");

// yeh sab ho jaane ke baad hum ek new terminal main inspecter command dhaalenge jo ke mcp ka documentation main milega ==> "npx @modelcontextprotocol/inspector" yeh hai command jaise yeh command likhenge humko ek url main bhej dega jo ke mcp ka GUI hai wahi se operate karenge
