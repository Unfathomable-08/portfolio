"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <div className="markdown-content text-[var(--tertiary)] leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4! tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-8! mb-3! text-[var(--secondary)]!">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg sm:text-xl font-semibold text-white mt-6! mb-2!">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base sm:text-lg font-semibold text-white mt-4! mb-2!">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-sm sm:text-base text-[var(--tertiary)] my-4! leading-relaxed font-normal">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary)]! underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--secondary)] pl-4! py-2! my-4! italic text-gray-300 bg-[var(--secondary)]/5 rounded-r">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6! my-4! space-y-1.5! text-sm sm:text-base text-[var(--tertiary)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6! my-4! space-y-1.5! text-sm sm:text-base text-[var(--tertiary)]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="my-1.5! leading-relaxed">
              {children}
            </li>
          ),
          hr: () => (
            <hr className="my-8! border-t border-white/10" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-white">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-200">
              {children}
            </em>
          ),
          del: ({ children }) => (
            <del className="line-through text-gray-500">
              {children}
            </del>
          ),
          table: ({ children }) => (
            <div className="my-6! overflow-x-auto rounded-xl border border-white/15 shadow-xl">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#181818] border-b border-white/15 text-white">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-white/10 bg-[#121212]/80 text-gray-300">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-white/5 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4! py-3! font-bold text-[var(--secondary)]! text-xs uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4! py-3! text-[var(--tertiary)] leading-relaxed">
              {children}
            </td>
          ),
          code: ({ inline, className, children, ...props }) => {
            if (inline || !className) {
              return (
                <code
                  className="bg-black/60 text-[var(--secondary)]! text-xs px-1.5! py-0.5! rounded font-mono border border-white/10"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{children}</CodeBlock>;
          },
          pre: ({ children }) => <>{children}</>,
          img: ({ src, alt }) => (
            <span className="block my-6! rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt || "Blog image"}
                className="w-full h-auto object-cover"
              />
            </span>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export { MarkdownRenderer as Renderer };
