import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraph = {
	operation: ['createGraph', 'getGraph'],
	resource: ['knowledgeGraphs'],
};

export const getGraphAdviceDefaultsDescription: INodeProperties[] = [
	{
		displayName: 'AI Topics',
		name: 'aiTopics',
		type: 'hidden',
		default: 'true',
		displayOptions: { show: showOnlyForGraph },
		description: 'Should generate AI topic names for graph clusters',
		routing: {
			send: {
				type: 'body',
				property: 'aiTopics',
			},
		},
	},
	{
		displayName: 'Add graph stats',
		name: 'addStats',
		type: 'hidden',
		default: 'true',
		description: 'Add graph stats to the response',
		displayOptions: { show: showOnlyForGraph },
		routing: {
			send: {
				type: 'query',
				property: 'addStats',
			},
		},
	},

	{
		displayName: 'Include graph summary',
		name: 'includeGraphSummary',
		type: 'options',
		options: [
			{
				name: 'No',
				value: 'false',
			},
			{
				name: 'Yes',
				value: 'true',
			},
		],
		default: 'true',
		required: true,
		description: 'Include plain text graph summary for RAG enhancement',
		displayOptions: { show: showOnlyForGraph },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraphSummary',
			},
		},
	},
	{
		displayName: 'Include topics and gaps information',
		name: 'extendedGraphSummary',
		type: 'options',
		options: [
			{
				name: 'Yes',
				value: 'true',
			},
			{
				name: 'No',
				value: 'false',
			},
		],
		default: 'true',
		required: true,
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForGraph },
		routing: {
			send: {
				type: 'query',
				property: 'extendedGraphSummary',
			},
		},
	},
	{
		displayName: 'Include JSON graph',
		name: 'includeGraph',
		type: 'options',
		options: [
			{
				name: 'Yes',
				value: 'true',
			},
			{
				name: 'No',
				value: 'false',
			},
		],
		default: 'true',
		required: true,
		description: 'Include the JSON graph in the response',
		displayOptions: { show: showOnlyForGraph },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
			},
		},
	},
];
