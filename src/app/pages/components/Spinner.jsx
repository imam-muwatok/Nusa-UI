import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/ui/Button";

export default function SpinnerPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Spinner</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Indikator loading animasi untuk menunjukkan status pemrosesan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <CodeBlock code={`<Spinner />`}>
            <div className="flex justify-center p-8">
              <Spinner />
            </div>
          </CodeBlock>
        </section>

        {/* Growing Spinner */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Growing Spinner</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>type="grow"</code> untuk animasi yang membesar berulang-ulang.
          </p>
          <CodeBlock code={`<Spinner type="grow" />
<Spinner type="grow" color="success" />
<Spinner type="grow" color="danger" />`}>
            <div className="flex flex-wrap gap-6 justify-center p-8">
              <Spinner type="grow" />
              <Spinner type="grow" color="success" />
              <Spinner type="grow" color="danger" />
            </div>
          </CodeBlock>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Colors</h2>
          <CodeBlock code={`<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="success" />
<Spinner color="danger" />
<Spinner color="warning" />
<Spinner color="info" />
<Spinner color="dark" />`}>
            <div className="flex flex-wrap gap-6 justify-center p-8">
              <Spinner color="primary" />
              <Spinner color="secondary" />
              <Spinner color="success" />
              <Spinner color="danger" />
              <Spinner color="warning" />
              <Spinner color="info" />
              <Spinner color="dark" />
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}>
            <div className="flex flex-wrap items-end gap-6 justify-center p-8">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </CodeBlock>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>
          <CodeBlock code={`<Button disabled>
  <Spinner size="sm" color="white" className="mr-2" />
  Loading...
</Button>

<Button variant="secondary" disabled>
  <Spinner size="sm" color="secondary" className="mr-2" />
  Processing
</Button>`}>
            <div className="flex flex-wrap gap-4 justify-center p-8">
              <Button disabled>
                <Spinner size="sm" color="white" className="mr-2" />
                Loading...
              </Button>
              <Button variant="secondary" disabled>
                <Spinner size="sm" color="secondary" className="mr-2" />
                Processing
              </Button>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}