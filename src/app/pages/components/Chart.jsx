import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Chart from "../../components/ui/Chart";

export default function ChartPage() {
  const data1 = [10, 40, 30, 70, 50, 90, 80, 110];
  const data2 = [50, 30, 60, 20, 80, 40, 70, 90, 10, 50];
  const data3 = [120, 100, 140, 80, 150, 110, 160];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Chart</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen grafik garis sederhana menggunakan SVG yang ringan dan responsif.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <CodeBlock code={`<Chart data={[10, 40, 30, 70, 50, 90, 80, 110]} />`}>
            <div className="h-64 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900">
              <Chart data={data1} />
            </div>
          </CodeBlock>
        </section>

        {/* Interactivity (Tooltip) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interactivity (Tooltip)</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">Arahkan kursor ke titik data untuk memperbesar titik tersebut dan menampilkan nilainya dalam tooltip bawaan browser.</p>
          <CodeBlock code={`// No extra props needed, interactivity is built-in.
<Chart data={[...]} />`}>
            <div className="h-64 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900">
              <Chart data={data1} />
            </div>
          </CodeBlock>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Colors</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">Gunakan prop <code>color</code> untuk mengubah warna chart. Contoh: <code>"red"</code>, <code>"green"</code>, <code>"purple"</code>.</p>
          <CodeBlock code={`<Chart data={[...]} color="red" />`}>
            <div className="h-64 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900">
              <Chart data={data3} color="red" />
            </div>
          </CodeBlock>
        </section>

        {/* Custom Container */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Container</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">Chart akan mengikuti ukuran container induknya.</p>
          <CodeBlock code={`<div className="h-32 w-64">
  <Chart data={[50, 30, 60, 20, 80, 40, 70, 90, 10, 50]} color="green" />
</div>`}>
            <div className="h-32 w-64 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2 bg-white dark:bg-zinc-900">
              <Chart data={data2} color="green" />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}