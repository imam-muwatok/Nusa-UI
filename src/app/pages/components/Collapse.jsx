import React, { useState } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Collapse from "../../components/ui/Collapse";
import Button from "../../components/ui/Button";

export default function CollapsePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Collapse</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk menampilkan dan menyembunyikan konten dengan animasi transisi yang halus.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(!isOpen)}>
  Toggle Collapse
</Button>

<Collapse isOpen={isOpen}>
  <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
    <p className="text-zinc-600 dark:text-zinc-400">
      Ini adalah konten yang disembunyikan. Animasi menggunakan grid-template-rows untuk transisi tinggi yang mulus.
    </p>
  </div>
</Collapse>`}>
            <div className="w-full">
              <Button onClick={() => setIsOpen(!isOpen)} className="mb-4">
                {isOpen ? "Hide Content" : "Show Content"}
              </Button>
              <Collapse isOpen={isOpen}>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Ini adalah konten yang disembunyikan. Animasi menggunakan grid-template-rows untuk transisi tinggi yang mulus tanpa perlu hardcode max-height.
                  </p>
                </div>
              </Collapse>
            </div>
          </CodeBlock>
        </section>

        {/* Inside Card */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Inside Card</h2>
          <CodeBlock code={`<div className="rounded-2xl border border-zinc-200 dark:border-zinc-800">
  <div className="flex items-center justify-between p-4">
    <h3 className="font-bold">Order Details</h3>
    <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-600 font-medium text-sm">
      {isOpen ? "Show Less" : "Show More"}
    </button>
  </div>
  <Collapse isOpen={isOpen}>
    <div className="p-4 pt-0 text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-800">
       {/* Content */}
    </div>
  </Collapse>
</div>`}>
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="flex items-center justify-between p-4">
                  <h3 className="font-bold">Order Details</h3>
                  <button onClick={() => setIsOpen2(!isOpen2)} className="text-cyan-600 font-medium text-sm hover:underline">
                    {isOpen2 ? "Show Less" : "Show More"}
                  </button>
                </div>
                <Collapse isOpen={isOpen2}>
                  <div className="p-4 pt-0 text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
                    <ul className="space-y-2">
                      <li className="flex justify-between"><span>Product A</span> <span>$20.00</span></li>
                      <li className="flex justify-between"><span>Product B</span> <span>$15.00</span></li>
                      <li className="flex justify-between font-bold text-zinc-900 dark:text-white pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-700"><span>Total</span> <span>$35.00</span></li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}