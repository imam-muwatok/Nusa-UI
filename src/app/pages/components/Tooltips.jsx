import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Tooltip from "../../components/ui/Tooltip";
import Button from "../../components/ui/Button";

export default function TooltipsPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Tooltips</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Informasi singkat yang muncul saat elemen di-hover.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}>
            <div className="flex justify-center py-8">
              <Tooltip content="This is a tooltip">
                <Button>Hover me</Button>
              </Tooltip>
            </div>
          </CodeBlock>
        </section>

        {/* Positions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Positions</h2>
          <CodeBlock code={`<Tooltip position="top" content="Top Tooltip">
  <Button>Top</Button>
</Tooltip>
<Tooltip position="right" content="Right Tooltip">
  <Button>Right</Button>
</Tooltip>
<Tooltip position="bottom" content="Bottom Tooltip">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip position="left" content="Left Tooltip">
  <Button>Left</Button>
</Tooltip>`}>
            <div className="flex flex-wrap justify-center gap-8 py-8">
              <Tooltip position="top" content="Top Tooltip">
                <Button variant="secondary">Top</Button>
              </Tooltip>
              <Tooltip position="right" content="Right Tooltip">
                <Button variant="secondary">Right</Button>
              </Tooltip>
              <Tooltip position="bottom" content="Bottom Tooltip">
                <Button variant="secondary">Bottom</Button>
              </Tooltip>
              <Tooltip position="left" content="Left Tooltip">
                <Button variant="secondary">Left</Button>
              </Tooltip>
            </div>
          </CodeBlock>
        </section>

        {/* Delay */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Delay</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>delay</code> (dalam ms) untuk menunda kemunculan tooltip.
          </p>
          <CodeBlock code={`<Tooltip delay={500} content="I appeared after 500ms">
  <Button>Hover (Delay 500ms)</Button>
</Tooltip>`}>
            <div className="flex justify-center py-8">
              <Tooltip delay={500} content="I appeared after 500ms">
                <Button>Hover (Delay 500ms)</Button>
              </Tooltip>
            </div>
          </CodeBlock>
        </section>

        {/* Interactive */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interactive</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>interactive</code> agar tooltip tidak menutup saat kursor diarahkan ke kontennya.
          </p>
          <CodeBlock code={`<Tooltip interactive content={
  <div className="flex flex-col gap-1">
    <span className="font-bold">Interactive</span>
    <a href="#" className="text-cyan-400 hover:underline">Click me</a>
  </div>
}>
  <Button>Hover Me</Button>
</Tooltip>`}>
            <div className="flex justify-center py-8">
              <Tooltip interactive content={
                <div className="flex flex-col gap-1 p-1">
                  <span className="font-bold">Interactive</span>
                  <a href="#" className="text-cyan-400 hover:underline" onClick={(e) => e.preventDefault()}>Click me</a>
                </div>
              }>
                <Button>Hover Me</Button>
              </Tooltip>
            </div>
          </CodeBlock>
        </section>

        {/* Arrow Customization */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Arrow Customization</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>showArrow</code> untuk menyembunyikan panah, atau <code>arrowClassName</code> untuk mengubah tampilannya.
          </p>
          <CodeBlock code={`<Tooltip showArrow={false} content="No arrow here">
  <Button>No Arrow</Button>
</Tooltip>

<Tooltip arrowClassName="border-[8px]" content="Larger arrow">
  <Button>Large Arrow</Button>
</Tooltip>`}>
            <div className="flex justify-center gap-8 py-8">
              <Tooltip showArrow={false} content="No arrow here">
                <Button>No Arrow</Button>
              </Tooltip>
              <Tooltip arrowClassName="border-[8px]" content="Larger arrow">
                <Button>Large Arrow</Button>
              </Tooltip>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}