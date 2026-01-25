import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Offcanvas from "../components/ui/Offcanvas";
import Button from "../components/ui/Button";

export default function OffcanvasPage() {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const [isOpenStatic, setIsOpenStatic] = useState(false);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Offcanvas</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Sidebar navigasi atau panel konten yang muncul dari tepi layar.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic (Left) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic (Left)</h2>
          <CodeBlock code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Left Offcanvas</Button>

<Offcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
  <p>Content goes here...</p>
</Offcanvas>`}>
            <div className="w-full">
              <Button onClick={() => setIsOpenLeft(true)}>Open Left Offcanvas</Button>
              <Offcanvas isOpen={isOpenLeft} onClose={() => setIsOpenLeft(false)} title="Menu">
                <div className="space-y-4">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        This is the content of the offcanvas. You can place navigation links, forms, or any other content here.
                    </p>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-cyan-600 hover:underline">Home</a></li>
                        <li><a href="#" className="text-cyan-600 hover:underline">Profile</a></li>
                        <li><a href="#" className="text-cyan-600 hover:underline">Settings</a></li>
                    </ul>
                </div>
              </Offcanvas>
            </div>
          </CodeBlock>
        </section>

        {/* Positions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Positions</h2>
          <CodeBlock code={`<Offcanvas position="right" ... />
<Offcanvas position="top" ... />
<Offcanvas position="bottom" ... />`}>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsOpenRight(true)}>Right</Button>
              <Button onClick={() => setIsOpenTop(true)}>Top</Button>
              <Button onClick={() => setIsOpenBottom(true)}>Bottom</Button>

              <Offcanvas isOpen={isOpenRight} onClose={() => setIsOpenRight(false)} position="right" title="Right Offcanvas">
                 <p className="text-zinc-600 dark:text-zinc-400">Content from the right.</p>
              </Offcanvas>
              <Offcanvas isOpen={isOpenTop} onClose={() => setIsOpenTop(false)} position="top" title="Top Offcanvas">
                 <p className="text-zinc-600 dark:text-zinc-400">Content from the top.</p>
              </Offcanvas>
              <Offcanvas isOpen={isOpenBottom} onClose={() => setIsOpenBottom(false)} position="bottom" title="Bottom Offcanvas">
                 <p className="text-zinc-600 dark:text-zinc-400">Content from the bottom.</p>
              </Offcanvas>
            </div>
          </CodeBlock>
        </section>

        {/* Static Backdrop */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Static Backdrop</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>staticBackdrop</code> agar offcanvas tidak menutup saat diklik di luar area panel.
          </p>
          <CodeBlock code={`<Offcanvas staticBackdrop isOpen={isOpen} onClose={() => setIsOpen(false)} title="Static Backdrop">
  <p>I will not close if you click outside of me.</p>
</Offcanvas>`}>
            <div className="w-full">
              <Button onClick={() => setIsOpenStatic(true)}>Open Static Offcanvas</Button>
              <Offcanvas staticBackdrop isOpen={isOpenStatic} onClose={() => setIsOpenStatic(false)} title="Static Backdrop">
                <p className="text-zinc-600 dark:text-zinc-400">
                  Try clicking outside this panel. It won't close unless you click the close button or perform an action inside.
                </p>
              </Offcanvas>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}