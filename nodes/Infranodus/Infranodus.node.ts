import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { knowledgeGraphs } from './resources/graphs';
import { aiAdviceForGraph } from './resources/graphAdvice';

export class Infranodus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'InfraNodus Graph RAG',
		name: 'infranodus',
		icon: 'file:infranodus.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'Build knowledge graphs, get AI advice, and extract content gaps with the InfraNodus API',
		defaults: {
			name: 'InfraNodus Graph RAG',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'infranodusApi', required: true }],
		requestDefaults: {
			baseURL: 'https://infranodus.com/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'AI Advice from Graph',
						value: 'aiAdviceForGraph',
					},
					{
						name: 'Knowledge Graphs',
						value: 'knowledgeGraphs',
					},
				],
				default: 'aiAdviceForGraph',
			},
			...knowledgeGraphs,
			...aiAdviceForGraph,
		],
	};
}
