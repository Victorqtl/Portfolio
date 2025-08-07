'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeBlockProps = {
	language: string;
	highlightLines?: number[];
} & (
	| {
			code: string;
			tabs?: never;
	  }
	| {
			code?: never;
			tabs: Array<{
				name: string;
				code: string;
				language?: string;
				highlightLines?: number[];
			}>;
	  }
);

export const CodeBlock = ({ language, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
	const [activeTab, setActiveTab] = React.useState(0);

	const customStyle = {
		...atomDark,
		'code[class*="language-"]': {
			...atomDark['code[class*="language-"]'],
			color: '#ffffff',
		},
		'pre[class*="language-"]': {
			...atomDark['pre[class*="language-"]'],
			color: '#ffffff',
		},
		token: {
			color: '#ffffff',
		},
		comment: {
			color: '#ffffff',
		},
		prolog: {
			color: '#ffffff',
		},
		doctype: {
			color: '#ffffff',
		},
		cdata: {
			color: '#ffffff',
		},
		punctuation: {
			color: '#ffffff',
		},
		property: {
			color: '#ffffff',
		},
		tag: {
			color: '#ffffff',
		},
		constant: {
			color: '#ffffff',
		},
		symbol: {
			color: '#ffffff',
		},
		deleted: {
			color: '#ffffff',
		},
		boolean: {
			color: '#ffffff',
		},
		number: {
			color: '#ffffff',
		},
		selector: {
			color: '#ffffff',
		},
		'attr-name': {
			color: '#ffffff',
		},
		string: {
			color: '#ffffff',
		},
		char: {
			color: '#ffffff',
		},
		builtin: {
			color: '#ffffff',
		},
		inserted: {
			color: '#ffffff',
		},
		variable: {
			color: '#ffffff',
		},
		operator: {
			color: '#ffffff',
		},
		entity: {
			color: '#ffffff',
		},
		url: {
			color: '#ffffff',
		},
		'at-rule': {
			color: '#ffffff',
		},
		'attr-value': {
			color: '#ffffff',
		},
		keyword: {
			color: '#7E7E7E',
		},
		function: {
			color: '#ffffff',
		},
		'class-name': {
			color: '#ffffff',
		},
		regex: {
			color: '#ffffff',
		},
		important: {
			color: '#ffffff',
		},
	};

	const tabsExist = tabs.length > 0;

	const activeCode = tabsExist ? tabs[activeTab].code : code;
	const activeLanguage = tabsExist ? tabs[activeTab].language || language : language;
	const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

	return (
		<div
			className='relative w-full rounded-md bg-[#232323] p-4 font-mono text-sm'
			style={{
				scrollbarWidth: 'thin',
				scrollbarColor: '#7e7e7e #232323',
			}}>
			<div className='flex flex-col gap-2'>
				{tabsExist && (
					<div className='flex  overflow-x-auto'>
						{tabs.map((tab, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`px-3 !py-2 text-xs transition-colors font-sans ${
									activeTab === index ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
								}`}>
								{tab.name}
							</button>
						))}
					</div>
				)}
			</div>
			<SyntaxHighlighter
				language={activeLanguage}
				style={customStyle}
				customStyle={{
					margin: 0,
					padding: 0,
					background: '#232323',
					fontSize: '0.875rem',
				}}
				wrapLines={true}
				showLineNumbers={true}
				lineProps={lineNumber => ({
					style: {
						backgroundColor: activeHighlightLines.includes(lineNumber)
							? 'rgba(255,255,255,0.1)'
							: 'transparent',
						display: 'block',
						width: '100%',
					},
				})}
				PreTag='div'>
				{String(activeCode)}
			</SyntaxHighlighter>
		</div>
	);
};
