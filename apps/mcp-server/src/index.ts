import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { makeRequest } from "./helpers.js";

// Create server instance
const server = new McpServer({
  name: "mercado-libre",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Register weather tools
// @ts-ignore - Suppressing deep type instantiation error from MCP SDK
server.tool(
  "get-product-info",
  "Return the information of a product by its id",
  {
    productId: z.string().describe("The product id"),
  },
  async ({ productId }) => {
    const productUrl = `http://localhost:3008/products/${productId}`;
    const productData = await makeRequest<any>(productUrl);

    if (!productData) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to retrieve product data`,
          },
        ],
      };
    }


    return {
      content: [
        {
          type: "text",
          text: `Product Data: ${JSON.stringify(productData)}`
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});