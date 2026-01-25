import React, { useState } from "react";
import { EyeIcon, CodeBracketIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

const SyntaxHighlighter = ({ code }) => {
  // Memecah kode menjadi bagian-bagian: Komentar, Tag, dan Teks biasa
  const parts = code.split(/({(?:\/\*[\s\S]*?\*\/)})|(<[^>]+>)/g).filter(Boolean);

  return (
    <code className="font-mono text-sm">
      {parts.map((part, i) => {
        // 1. Warna Komentar (Hijau)
        if (part.startsWith('{/*')) {
          return <span key={i} className="text-[#6A9955]">{part}</span>;
        }
        // 2. Warna Tag HTML/JSX
        if (part.startsWith('<')) {
          // Regex untuk memecah isi tag: Nama Tag, Atribut, Sama Dengan, String Value, Penutup Tag
          const tagTokens = part.match(/(<\/?[\w\d-]+)|(\s+[\w-]+)|(=)|("[^"]*")|(\/?>)|(\s+)/g) || [part];
          return (
            <span key={i}>
              {tagTokens.map((token, j) => {
                if (token.match(/^<\/?[\w\d-]+/)) return <span key={j} className="text-[#569CD6]">{token}</span>; // Tag Name (Biru)
                if (token.match(/^\s+[\w-]+/)) return <span key={j} className="text-[#9CDCFE]">{token}</span>; // Attribute (Biru Muda)
                if (token === '=') return <span key={j} className="text-[#D4D4D4]">{token}</span>; // Operator (Abu-abu)
                if (token.startsWith('"')) return <span key={j} className="text-[#CE9178]">{token}</span>; // String (Orange)
                if (token.match(/\/?>/)) return <span key={j} className="text-[#808080]">{token}</span>; // Tag Brackets (Abu-abu Gelap)
                return <span key={j} className="text-[#D4D4D4]">{token}</span>; // Whitespace
              })}
            </span>
          );
        }
        // 3. Teks Biasa (Abu-abu Terang)
        return <span key={i} className="text-[#D4D4D4]">{part}</span>;
      })}
    </code>
  );
};

export default function CodeBlock({ children, code }) {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50/50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900/50 rounded-t-3xl">
        <div className="flex gap-1 bg-zinc-200/50 dark:bg-zinc-800/50 p-1 rounded-lg">
           <button 
             onClick={() => setActiveTab('preview')}
             className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${activeTab === 'preview' ? 'bg-white text-cyan-600 shadow-sm dark:bg-zinc-900 dark:text-cyan-400' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}`}
           >
             <EyeIcon className="h-4 w-4" /> Preview
           </button>
           <button 
             onClick={() => setActiveTab('code')}
             className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${activeTab === 'code' ? 'bg-white text-cyan-600 shadow-sm dark:bg-zinc-900 dark:text-cyan-400' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}`}
           >
             <CodeBracketIcon className="h-4 w-4" /> Code
           </button>
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
        >
          {copied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <ClipboardDocumentIcon className="h-4 w-4" />}
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="relative">
        {activeTab === 'preview' && (
          <div className="p-8 flex flex-wrap gap-4 justify-center bg-zinc-50/50 dark:bg-zinc-900/30 min-h-[160px] items-center rounded-b-3xl">
            {children}
          </div>
        )}
        {activeTab === 'code' && (
          /* View Code Display */
          <div className="bg-[#1E1E1E] p-6 overflow-x-auto min-h-[160px] flex items-center rounded-b-3xl">
            <pre className="w-full whitespace-pre-wrap"><SyntaxHighlighter code={code} /></pre>
          </div>
        )}
      </div>
    </div>
  );
}