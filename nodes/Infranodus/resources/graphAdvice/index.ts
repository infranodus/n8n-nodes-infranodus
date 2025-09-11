import type { INodeProperties } from 'n8n-workflow';
import { getGraphAdviceDefaultsDescription } from './defaults';
import { graphNameDescription } from './name';
import { generateQuestionDescription } from './question';
import { getGraphResponseDescription } from './response';

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
				action: 'Get an AI advice from a gGraph RAG knowledge base',
				description:
					'Get an AI advice from an existing Graph RAG knowledge base or reasoning ontology',
				routing: {
					request: {
						method: 'POST',
						url: '/graphAndAdvice',
					},
				},
			},
			{
				name: 'Generate research questions',
				value: 'questionGraph',
				action: 'Generate research questions & prompts',
				description:
					'Generate research questions and prompts generated based on the content gaps in a graph',
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
	...getGraphAdviceDefaultsDescription,
];
