import type { INodeProperties } from 'n8n-workflow';
import { graphSaveDescription } from './create';
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
			{
				name: 'Create a graph',
				value: 'saveGraph',
				action: 'Create a new graph',
				description: 'Create a new graph from text or statements',
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
	...graphSaveDescription,
	...graphGetDescription,
];
