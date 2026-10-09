'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  value: {
    code?: string;
    language?: string;
    filename?: string;
  };
}

export default function CodeBlock({ value }: CodeBlockProps) {
  if (!value || !value.code) return null;

  return (
    <div className="my-6">
      {value.filename && (
        <div className="rounded-t-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
          {value.filename}
        </div>
      )}
      <SyntaxHighlighter
        language={value.language || 'javascript'}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: value.filename ? '0 0 0.5rem 0.5rem' : '0.5rem',
          fontSize: '0.9rem',
        }}
        showLineNumbers
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}
