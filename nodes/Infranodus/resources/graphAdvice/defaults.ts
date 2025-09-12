import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGraphAdvice = {
	operation: ['questionGraph', 'promptGraph', 'summarizeGraph'],
	resource: ['aiAdviceForGraph'],
};

const showOnlyForQuestion = {
	operation: ['questionGraph'],
	resource: ['aiAdviceForGraph'],
};

const showOnlyForSummarize = {
	operation: ['summarizeGraph'],
	resource: ['aiAdviceForGraph'],
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
		displayName: 'Discourse Optimization',
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
		displayName: 'Do Not Save Graph',
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
		displayName: 'Add Graph Stats',
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
		displayName: 'Include Graph',
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
		default: 'false',
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
		displayName: 'Include Graph Summary',
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
		required: true,
		description: 'Include the graph summary in the response',
		displayOptions: { show: showOnlyForSummarize },
		routing: {
			send: {
				type: 'query',
				property: 'includeGraphSummary',
			},
		},
	},
	{
		displayName: 'Include Extended Graph Summary',
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
		displayOptions: { show: showOnlyForGraphAdvice },
		routing: {
			send: {
				type: 'query',
				property: 'extendedGraphSummary',
			},
		},
	},
	{
		displayName: 'Model to Use',
		name: 'modelToUse',
		type: 'options',
		options: [
			{
				name: 'GPT-4o (Best)',
				value: 'gpt-4o',
			},
			{
				name: 'GPT-4o-Mini (Fastest)',
				value: 'gpt-4o-mini',
			},
			{
				name: 'GPT-5 (Slowest, Reasoning)',
				value: 'gpt-5',
			},
			{
				name: 'GPT-5-Mini (Faster Reasoning)',
				value: 'gpt-5-mini',
			},
			{
				name: 'Claude Opus 4.1',
				value: 'claude-opus-4.1',
			},
			{
				name: 'Claude Sonnet 4',
				value: 'claude-sonnet-4',
			},
			{
				name: 'Gemini 2.5 Flash',
				value: 'gemini-2.5-flash',
			},
			{
				name: 'Gemini 2.5 Flash Lite',
				value: 'gemini-2.5-flash-lite',
			},
		],
		default: 'gpt-4o',
		description: 'Include information about gaps and keywords',
		displayOptions: { show: showOnlyForGraphAdvice },
		routing: {
			send: {
				type: 'body',
				property: 'modelToUse',
			},
		},
	},
];
