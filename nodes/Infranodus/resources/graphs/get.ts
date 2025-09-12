import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphGet = {
	operation: ['getGraph'],
	resource: ['knowledgeGraphs'],
};

export const graphGetDescription: INodeProperties[] = [
	{
		displayName: 'Graph Name',
		name: 'name',
		type: 'string',
		displayOptions: { show: showOnlyForGraphGet },
		default: '',
		description: 'The name of the graph to retrieve from InfraNodus',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Include AI-Generated Topics',
		name: 'aiTopics',
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
		displayOptions: { show: showOnlyForGraphGet },
		description: 'Should generate AI topic names for graph clusters',
		routing: {
			send: {
				type: 'body',
				property: 'aiTopics',
			},
		},
	},
	{
		displayName: 'Add Graph Stats',
		name: 'addStats',
		type: 'hidden',
		default: 'true',
		description: 'Add graph stats to the response',
		displayOptions: { show: showOnlyForGraphGet },
		routing: {
			send: {
				type: 'query',
				property: 'addStats',
			},
		},
	},

	{
		displayName: 'Include Graph Summary',
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
		displayOptions: { show: showOnlyForGraphGet },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraphSummary',
			},
		},
	},
	{
		displayName: 'Include Topics and Gaps Information',
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
		displayOptions: { show: showOnlyForGraphGet },
		routing: {
			send: {
				type: 'query',
				property: 'extendedGraphSummary',
			},
		},
	},
	{
		displayName: 'Include Full JSON Graph',
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
		displayOptions: { show: showOnlyForGraphGet },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
			},
		},
	},
];
