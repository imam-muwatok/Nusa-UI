import React, { useState, useEffect } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Progress from "../components/ui/Progress";

export default function ProgressPage() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 0;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Progress</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Menampilkan status kemajuan dari suatu proses.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Progress value={50} />`}>
            <div className="w-full max-w-md">
              <Progress value={50} />
            </div>
          </CodeBlock>
        </section>

        {/* With Label & Value */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Label & Value</h2>
          <CodeBlock code={`<Progress value={75} label="Uploading..." showValue />`}>
            <div className="w-full max-w-md">
              <Progress value={75} label="Uploading..." showValue />
            </div>
          </CodeBlock>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Colors</h2>
          <CodeBlock code={`<Progress value={40} color="success" className="mb-4" />
<Progress value={60} color="warning" className="mb-4" />
<Progress value={80} color="danger" />`}>
            <div className="w-full max-w-md">
              <Progress value={40} color="success" className="mb-4" />
              <Progress value={60} color="warning" className="mb-4" />
              <Progress value={80} color="danger" />
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Progress value={30} size="sm" className="mb-4" />
<Progress value={50} size="md" className="mb-4" />
<Progress value={70} size="lg" className="mb-4" />
<Progress value={90} size="xl" />`}>
            <div className="w-full max-w-md">
              <Progress value={30} size="sm" className="mb-4" />
              <Progress value={50} size="md" className="mb-4" />
              <Progress value={70} size="lg" className="mb-4" />
              <Progress value={90} size="xl" />
            </div>
          </CodeBlock>
        </section>

        {/* Animated */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Animated</h2>
          <CodeBlock code={`// Dynamic value update example
<Progress value={progress} label="Loading..." showValue />`}>
            <div className="w-full max-w-md">
              <Progress value={progress} label="Loading..." showValue />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}