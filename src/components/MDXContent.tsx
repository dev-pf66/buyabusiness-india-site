'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import { ReactNode } from 'react';

// Custom components for MDX rendering
const components = {
  // Headings
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      {children}
    </h3>
  ),
  
  // Paragraphs and text
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-gray-600 leading-relaxed mb-4">
      {children}
    </p>
  ),
  
  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-gray-600">{children}</li>
  ),
  
  // Tables
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr>{children}</tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-3 text-sm text-gray-600">{children}</td>
  ),
  
  // Links
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className="text-emerald-600 hover:text-emerald-700 hover:underline">
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className="text-emerald-600 hover:text-emerald-700 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  
  // Blockquotes (used for key insights)
  blockquote: ({ children }: { children: ReactNode }) => (
    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-6 my-6">
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
        Key Insight
      </p>
      <div className="text-gray-900">{children}</div>
    </div>
  ),
  
  // Code
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  
  // Horizontal rule
  hr: () => <hr className="my-8 border-gray-200" />,
  
  // Strong and emphasis
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
