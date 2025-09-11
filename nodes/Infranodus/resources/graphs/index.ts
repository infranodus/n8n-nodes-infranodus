import type { INodeProperties } from 'n8n-workflow';
import { graphCreateDescription } from './create';
import { graphGenerateDescription } from './generate';
import { graphGetDescription } from './get';

const showOnlyForGraphs = {
	resource: ['knowledgeGraphs'],
};

export const knowledgeGraphs: INodeProperties[] = [
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
				name: 'Generate a graph from text',
				value: 'generateGraph',
				action: 'Generate a new graph',
				description: 'Generate a new graph from text without saving it in InfraNodus',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},
			{
				name: 'Create a graph from text',
				value: 'createGraph',
				action: 'Create a new graph',
				description: 'Create, save, and return a new graph from text',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndStatements',
					},
				},
			},

			{
				name: 'Get a graph',
				value: 'getGraph',
				action: 'Get an existing graph',
				description: 'Get an existing graph of a user',
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
	...graphGenerateDescription,
	...graphGetDescription,
];
