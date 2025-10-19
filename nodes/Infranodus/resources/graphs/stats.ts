import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphStatsGenerate = {
	operation: ['generateGraphStats'],
	resource: ['knowledgeGraphs'],
};

const showOnlyForGraphSummaryGenerate = {
	operation: ['generateGraphSummary'],
	resource: ['knowledgeGraphs'],
};

export const graphStatsGenerateDescription: INodeProperties[] = [
	{
		displayName: 'Graph Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGraphStatsGenerate,
		},
		description: 'The name of the graph (use any if you are not saving the graph to InfraNodus)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForGraphStatsGenerate,
		},
		typeOptions: {
			rows: 8,
		},
		description: 'The text to create a graph from (leave empty if using an existing graph)',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Save / Update the Graph in InfraNodus',
		name: 'doNotSave',
		type: 'options',
		options: [
			{
				name: 'No',
				value: 'true',
			},
			{
				name: 'Yes',
				value: 'false',
			},
		],
		default: 'true',
		displayOptions: { show: showOnlyForGraphStatsGenerate },
		description: 'Save or update the graph with this name in InfraNodus',
		routing: {
			send: {
				type: 'query',
				property: 'doNotSave',
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
		default: 'true',
		displayOptions: { show: showOnlyForGraphStatsGenerate },
		description: 'Should generate AI topic names for graph clusters (slower)',
		routing: {
			send: {
				type: 'body',
				property: 'aiTopics',
			},
		},
	},
	{
		displayName: 'Include Content Gaps and Topics Information',
		name: 'extendedGraphSummary',
		type: 'hidden',
		default: 'true',
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForGraphStatsGenerate },
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
		default: 'false',
		description: 'Include the full JSON graph in response',
		displayOptions: { show: showOnlyForGraphStatsGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
			},
		},
	},
	{
		displayName: 'Include All the Statements',
		name: 'includeStatements',
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
		default: 'false',
		description: 'Include all the statements in return object',
		displayOptions: { show: showOnlyForGraphStatsGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'includeStatements',
			},
		},
	},
];

export const generateGraphSummaryDescription: INodeProperties[] = [
	{
		displayName: 'Graph Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGraphSummaryGenerate,
		},
		description: 'The name of the graph (use any if you are not saving the graph to InfraNodus)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForGraphSummaryGenerate,
		},
		typeOptions: {
			rows: 8,
		},
		description: 'The text to create a graph from (leave empty if using an existing graph)',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Save / Update the Graph in InfraNodus',
		name: 'doNotSave',
		type: 'options',
		options: [
			{
				name: 'No',
				value: 'true',
			},
			{
				name: 'Yes',
				value: 'false',
			},
		],
		default: 'true',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		description: 'Save or update the graph with this name in InfraNodus',
		routing: {
			send: {
				type: 'query',
				property: 'doNotSave',
			},
		},
	},
	{
		displayName: 'Include Graph Summary for RAG Augmentation in Response',
		name: 'includeGraphSummary',
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
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraphSummary',
			},
		},
	},
	{
		displayName: 'Include Content Gaps and Topics Information',
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
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'extendedGraphSummary',
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
		default: 'true',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		description: 'Should generate AI topic names for graph clusters (slower)',
		routing: {
			send: {
				type: 'body',
				property: 'aiTopics',
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
		default: 'false',
		description: 'Include the full JSON graph in response',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraph',
			},
		},
	},
	{
		displayName: 'Include Statements in Response',
		name: 'includeStatements',
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
		description: 'Include statements from the graph in response',
		displayOptions: { show: showOnlyForGraphSummaryGenerate },
		routing: {
			send: {
				type: 'query',
				property: 'includeStatements',
			},
		},
	},
];
