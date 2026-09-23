"use client";

import { useState } from "react";

export default function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "";
  const codeString = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6! rounded-xl overflow-hidden border border-white/15 bg-[#0e0e0e] shadow-2xl">
      <div className="bg-[#181818] px-4! py-2.5! border-b border-white/10 text-xs font-mono flex justify-between items-center select-none">
        <span className="text-[var(--secondary)]! font-semibold uppercase tracking-wider text-[11px]">
          {lang || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[var(--secondary)]! transition-colors cursor-pointer px-2! py-1! rounded bg-white/5 hover:bg-white/10"
          title="Copy code"
        >
          <i className={`fas ${copied ? "fa-check text-green-400" : "fa-copy"} text-[11px]`} />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <pre className="p-4! sm:p-5! text-xs sm:text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}
