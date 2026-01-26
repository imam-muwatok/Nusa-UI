import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Error404Page() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Error</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Halaman yang ditampilkan ketika konten yang dicari tidak ditemukan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Simple 404 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Simple 404</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-600 dark:text-cyan-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-zinc-500 dark:text-zinc-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <Button className="inline-flex items-center gap-2">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Homepage
          </Button>
      </div>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-600 dark:text-cyan-500">404</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-white">Something's missing.</p>
                            <p className="mb-4 text-lg font-light text-zinc-500 dark:text-zinc-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                            <Button className="inline-flex items-center gap-2">
                                <ArrowLeftIcon className="h-5 w-5" />
                                Back to Homepage
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* With Illustration */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Illustration</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <img className="mx-auto mb-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found" />
            <h1 className="mb-4 text-2xl font-extrabold text-cyan-600 dark:text-cyan-500">404 Not Found</h1>
            <p className="mb-10 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-white">Whoops! That page doesn't exist.</p>
            <p className="mb-4 text-zinc-500 dark:text-zinc-400">Here are some helpful links instead:</p>
            {/* Links... */}
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <img className="mx-auto mb-4 h-64" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found" />
                            <h1 className="mb-4 text-2xl font-extrabold text-cyan-600 dark:text-cyan-500">404 Not Found</h1>
                            <p className="mb-10 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-white">Whoops! That page doesn't exist.</p>
                            <Button>Go back home</Button>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}