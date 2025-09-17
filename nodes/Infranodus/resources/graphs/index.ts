import type { INodeProperties } from 'n8n-workflow';
import { graphCreateDescription } from './create';
import { graphGetDescription } from './get';
import { graphStatsGenerateDescription, generateGraphSummaryDescription } from './stats';
import { getGraphAdviceDefaultsDescription } from './defaults';

const showOnlyForGraphs = {
	resource: ['knowledgeGraphs'],
};

export const knowledgeGraph: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForGraphs,
		},
		options: [
			{
				name: 'Create a Graph From Text',
				value: 'createGraph',
				action: 'Create a new graph from text',
				description: 'Generate a new knowledge graph from text and return it & stats',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},
			{
				name: 'Get an Existing Graph',
				value: 'getGraph',
				action: 'Get an existing infranodus graph',
				description: 'Get an existing graph of a user from InfraNodus',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},
			{
				name: 'Generate Content Gaps and Topics',
				value: 'generateGraphStats',
				action: 'Generate content gaps and topics',
				description: 'Generate content gaps and topics from a text or existing graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},
			{
				name: 'Generate RAG Augmentation Prompt',
				value: 'generateGraphSummary',
				action: 'Generate RAG augmentation prompt',
				description: 'Generate RAG augmentation prompt from a text or existing graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},
		],
		default: 'getGraph',
	},
	...graphCreateDescription,
	...graphGetDescription,
	...graphStatsGenerateDescription,
	...getGraphAdviceDefaultsDescription,
	...generateGraphSummaryDescription,
];
