import type { INodeProperties } from 'n8n-workflow';
import { getGraphAdviceDefaultsDescription } from './defaults';
import { graphNameDescription } from './name';
import { generateQuestionDescription } from './question';
import { getGraphResponseDescription } from './response';
import { summarizeGraphDescription } from './summarize';
import { retrieveStatementsFromGraphDescription } from './retrieve';

const showOnlyForAiAdviceForGraph = {
	resource: ['aiAdviceForGraph'],
};

export const aiAdviceForGraph: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAiAdviceForGraph,
		},
		options: [
			{
				name: 'Query an Expert (Existing Graph)',
				value: 'promptGraph',
				action: 'Get a response from knowledge base',
				description: 'Get an AI advice from an existing knowledge base or ontology',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
			{
				name: 'Retrieve Statements with GraphRAG',
				value: 'retrieveStatementsFromGraph',
				action: 'Retrieve statements from a graph',
				description: 'Retrieve relevant statements from an existing graph using GraphRAG',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
			{
				name: 'Generate Research Questions',
				value: 'questionGraph',
				action: 'Generate research questions',
				description: 'Generate research questions based on the content gaps in a graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
			{
				name: 'Generate a Topical Summary',
				value: 'summarizeGraph',
				action: 'Generate topical summary',
				description: 'Generate a topical summary of a knowledge graph',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
		],
		default: 'promptGraph',
	},
	...graphNameDescription,
	...generateQuestionDescription,
	...getGraphResponseDescription,
	...summarizeGraphDescription,
	...retrieveStatementsFromGraphDescription,
	...getGraphAdviceDefaultsDescription,
];
