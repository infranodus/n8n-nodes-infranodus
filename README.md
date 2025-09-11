# n8n-nodes-infranodus

This is an n8n community node. It lets you use InfraNodus GraphRAG API in your n8n workflows.

You can create and use knowledge graphs as experts in your LLM workflows (no OpenAI keys required). You can also use the knowledge graphs to augment and improve your RAG flows with graph-based AI advice about the structure of the knowledge and better quality retrieval without the need to set up complex vector store infrastructures.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The node supports the following operations:

- Create a knowledge graph
- Get a knowledge graph
- Generate a question based on the content gaps in a knowledge graph
- Prompt a knowledge graph expert

## Credentials

The node requires an API token from InfraNodus. You can get it from [your InfraNodus account](https://infranodus.com/api-access).

We use Bearer authentication in case you want to build your own node using InfraNodus.

## Compatibility

The node is compatible with n8n v0.225.0 and above.

## Usage

To learn more about using InfraNodus with n8n, see our tutorials and videos on the Nodus Labs support portal: [https://support.noduslabs.com/hc/en-us/search?utf8=%E2%9C%93&query=n8n](https://support.noduslabs.com/hc/en-us/search?utf8=%E2%9C%93&query=n8n)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Nodus Labs support portal](https://support.noduslabs.com/hc/en-us/search?utf8=%E2%9C%93&query=n8n)
- [InfraNodus API endpoints](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points)

## Version history

v 0.1.0 (2025-09-11)

- Initial release
