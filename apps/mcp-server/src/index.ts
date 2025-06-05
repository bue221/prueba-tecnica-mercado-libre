import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

const server = new McpServer({
  name: 'mcp-server',
  version: '1.0.0',
});


const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: () => '123',
});

server.connect(transport).then(() => {
  console.log('MCP server running on http://localhost:3002');
}); 