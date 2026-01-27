import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { ArrowLeftIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ErrorPage from "../../components/ui/ErrorPage";

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
          <CodeBlock code={`<ErrorPage 
  code="404" 
  title="Something's missing." 
  message="Sorry, we can't find that page. You'll find lots to explore on the home page." 
/>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <ErrorPage 
                  code="404" 
                  title="Something's missing." 
                  message="Sorry, we can't find that page. You'll find lots to explore on the home page." 
                />
            </div>
          </CodeBlock>
        </section>

        {/* With Illustration */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Illustration</h2>
          <CodeBlock code={`<ErrorPage 
  image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
  code={null}
  title="Whoops! That page doesn't exist."
  message="Here are some helpful links instead:"
/>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <ErrorPage 
                  image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
                  code={null}
                  title="Whoops! That page doesn't exist."
                  message="Here are some helpful links instead:"
                />
            </div>
          </CodeBlock>
        </section>

        {/* 500 Server Error */}
        <section>
          <h2 className="text-2xl font-bold mb-6">500 Server Error</h2>
          <CodeBlock code={`<ErrorPage 
  code="500" 
  title="Internal Server Error." 
  message="We are already working to solve the problem." 
/>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <ErrorPage 
                  code="500" 
                  title="Internal Server Error." 
                  message="We are already working to solve the problem." 
                />
            </div>
          </CodeBlock>
        </section>

        {/* Under Maintenance */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Under Maintenance</h2>
          <CodeBlock code={`<ErrorPage 
  code="Maintenance" 
  title="We'll be back soon!" 
  message="Sorry for the inconvenience but we're performing some maintenance at the moment."
  action={<Button>Contact Support</Button>}
/>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <ErrorPage 
                  code="Maintenance" 
                  title="We'll be back soon!" 
                  message="Sorry for the inconvenience but we're performing some maintenance at the moment."
                  action={<Button>Contact Support</Button>}
                />
            </div>
          </CodeBlock>
        </section>

        {/* Access Denied (403) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Access Denied (403)</h2>
          <CodeBlock code={`<ErrorPage 
  icon={<LockClosedIcon />}
  code="403" 
  title="Access Denied." 
  message="Sorry, you don't have permission to access this page."
/>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <ErrorPage 
                  icon={<LockClosedIcon />}
                  code="403" 
                  title="Access Denied." 
                  message="Sorry, you don't have permission to access this page."
                />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}