import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { knowledgeGraphs } from './resources/graphs';
import { aiAdvice } from './resources/graphAdvice';

export class Infranodus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Infranodus',
		name: 'infranodus',
		icon: { light: 'file:infranodus.svg', dark: 'file:infranodus.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Build knowledge graphs and get AI advice from InfraNodus API',
		defaults: {
			name: 'InfraNodus',
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
						name: 'AI Advice',
						value: 'aiAdvice',
					},
					{
						name: 'Knowledge Graphs',
						value: 'knowledgeGraphs',
					},
				],
				default: 'aiAdvice',
			},
			...knowledgeGraphs,
			...aiAdvice,
		],
	};
}
