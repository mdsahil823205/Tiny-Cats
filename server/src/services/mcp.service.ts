import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

let clients: Client | null = null;

export const getMcpClient = async () => {
  const transport = new StdioClientTransport({
    command: "npx",
    args: ["tsx", "../Mcp_Server/src/index.ts"],
  });
  clients = new Client({
    name: "tiny_cats_client",
    version: "1.0.0",
  });

  await clients.connect(transport);
  return clients;
};
