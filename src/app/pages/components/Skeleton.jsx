import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Skeleton from "../../components/ui/Skeleton";

export default function SkeletonPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Skeleton</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Placeholder animasi untuk menunjukkan konten sedang dimuat.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <CodeBlock code={`<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-1/2" />`}>
            <div className="w-full max-w-md space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CodeBlock>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Variants</h2>
          <CodeBlock code={`<Skeleton variant="circular" width={48} height={48} />
<Skeleton variant="rectangular" width={200} height={100} />
<Skeleton variant="text" className="h-4 w-48" />`}>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4">
                <Skeleton variant="circular" width={48} height={48} />
                <div className="space-y-2">
                    <Skeleton variant="text" className="h-4 w-32" />
                    <Skeleton variant="text" className="h-3 w-24" />
                </div>
              </div>
              <Skeleton variant="rectangular" width={200} height={100} />
            </div>
          </CodeBlock>
        </section>

        {/* Card Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Card Example</h2>
          <CodeBlock code={`<div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-sm">
  <div className="flex items-center gap-4 mb-4">
    <Skeleton variant="circular" className="h-12 w-12" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
  <Skeleton variant="rectangular" className="h-32 w-full mb-4" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
</div>`}>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-sm bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton variant="circular" className="h-12 w-12" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton variant="rectangular" className="h-32 w-full mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}