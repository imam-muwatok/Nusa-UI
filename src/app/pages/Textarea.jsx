import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Textarea from "../components/ui/Textarea";

export default function TextareaPage() {
  const [message, setMessage] = useState("");
  const [bio, setBio] = useState("");

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Textarea</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Input teks multi-baris dengan dukungan label dan penyesuaian ukuran otomatis.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Textarea 
  label="Description" 
  placeholder="Enter a description..." 
  rows={4} 
/>`}>
            <div className="w-full max-w-lg">
              <Textarea 
                label="Description" 
                placeholder="Enter a description..." 
                rows={4} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Auto Resize */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Auto Resize</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>autoResize</code> agar tinggi textarea menyesuaikan konten secara otomatis saat diketik.
          </p>
          <CodeBlock code={`const [value, setValue] = useState("");

<Textarea 
  autoResize 
  label="Message" 
  placeholder="Type something long..." 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={1}
/>`}>
            <div className="w-full max-w-lg">
              <Textarea 
                autoResize 
                label="Message" 
                placeholder="Type something long to see it grow..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
              />
            </div>
          </CodeBlock>
        </section>

        {/* Character Count */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Character Count</h2>
          <CodeBlock code={`const [bio, setBio] = useState("");

<Textarea 
  label="Bio" 
  placeholder="Tell us about yourself (max 100 chars)..." 
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  maxLength={100}
  showCount
/>`}>
            <div className="w-full max-w-lg">
              <Textarea 
                label="Bio" 
                placeholder="Tell us about yourself (max 100 chars)..." 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={100}
                showCount
              />
            </div>
          </CodeBlock>
        </section>

        {/* Validation State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Validation State</h2>
          <CodeBlock code={`<Textarea 
  label="Comment" 
  placeholder="Enter your comment..." 
  error="Comment cannot be empty." 
/>`}>
            <div className="w-full max-w-lg">
              <Textarea 
                label="Comment" 
                placeholder="Enter your comment..." 
                error="Comment cannot be empty." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled State</h2>
          <CodeBlock code={`<Textarea disabled label="Disabled" placeholder="Cannot type here..." />`}>
            <div className="w-full max-w-lg">
              <Textarea disabled label="Disabled" placeholder="Cannot type here..." />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}