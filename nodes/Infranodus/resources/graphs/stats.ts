import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphStatsGenerate = {
	operation: ['generateGraphStats'],
	resource: ['knowledgeGraphs'],
};

export const graphStatsGenerateDescription: INodeProperties[] = [
	{
		displayName: 'Graph name',
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
		required: true,
		displayOptions: {
			show: showOnlyForGraphStatsGenerate,
		},
		typeOptions: {
			rows: 8,
		},
		description: 'The text to create a graph from',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Save / update the graph in InfraNodus',
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
		displayName: 'Include content gaps and topics information',
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
];
