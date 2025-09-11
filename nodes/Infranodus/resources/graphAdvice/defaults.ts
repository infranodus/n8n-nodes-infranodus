import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphAdvice = {
	operation: ['questionGraph', 'promptGraph'],
	resource: ['aiAdvice'],
};

const showOnlyForQuestion = {
	operation: ['questionGraph'],
	resource: ['aiAdvice'],
};

export const getGraphAdviceDefaultsDescription: INodeProperties[] = [
	{
		displayName: 'AI Topics',
		name: 'aiTopics',
		type: 'hidden',
		default: 'true',
		displayOptions: { show: showOnlyForGraphAdvice },
		description: 'Should generate AI topic names for graph clusters',
		routing: {
			send: {
				type: 'body',
				property: 'aiTopics',
			},
		},
	},
	{
		displayName: 'Discourse optimization',
		name: 'optimize',
		type: 'hidden',
		default: 'develop',
		displayOptions: { show: showOnlyForGraphAdvice },
		description: 'Use the parts of the graph that optimize the discourse',
		routing: {
			send: {
				type: 'query',
				property: 'optimize',
			},
		},
	},
	{
		displayName: 'Do not save graph',
		name: 'doNotSave',
		type: 'hidden',
		default: 'true',
		displayOptions: { show: showOnlyForGraphAdvice },
		description: 'Do not save a new graph',
		routing: {
			send: {
				type: 'query',
				property: 'doNotSave',
			},
		},
	},
	{
		displayName: 'Add graph stats',
		name: 'addStats',
		type: 'hidden',
		default: 'true',
		description: 'Add graph stats to the response',
		displayOptions: { show: showOnlyForGraphAdvice },
		routing: {
			send: {
				type: 'query',
				property: 'addStats',
			},
		},
	},
	{
		displayName: 'Include graph',
		name: 'includeGraph',
		type: 'hidden',
		default: 'false',
		description: 'Include the graph in the response',
		displayOptions: { show: showOnlyForGraphAdvice },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
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
		default: 'false',
		required: false,
		description: 'Include the graph summary in the response',
		displayOptions: { show: showOnlyForQuestion },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraphSummary',
			},
		},
	},
	{
		displayName: 'Include extended graph summary',
		name: 'extendedGraphSummary',
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
		default: 'false',
		required: false,
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForQuestion },
		routing: {
			send: {
				type: 'query',
				property: 'extendedGraphSummary',
			},
		},
	},
];
