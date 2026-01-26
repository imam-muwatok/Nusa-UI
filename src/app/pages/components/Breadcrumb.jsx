import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { HomeIcon, FolderIcon, DocumentIcon } from "@heroicons/react/24/solid";

export default function BreadcrumbPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Breadcrumb</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Navigasi sekunder yang menunjukkan lokasi pengguna saat ini dalam hierarki situs web.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", active: true }
]} />`}>
            <div className="w-full">
              <Breadcrumb items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Electronics", active: true }
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons</h2>
          <CodeBlock code={`<Breadcrumb items={[
  { icon: <HomeIcon className="h-4 w-4" />, href: "/" },
  { icon: <FolderIcon className="h-4 w-4" />, label: "Projects", href: "/projects" },
  { icon: <DocumentIcon className="h-4 w-4" />, label: "Details", active: true }
]} />`}>
            <div className="w-full">
              <Breadcrumb items={[
                { icon: <HomeIcon className="h-4 w-4" />, href: "/" },
                { icon: <FolderIcon className="h-4 w-4" />, label: "Projects", href: "/projects" },
                { icon: <DocumentIcon className="h-4 w-4" />, label: "Details", active: true }
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* Custom Separator */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Separator</h2>
          <CodeBlock code={`<Breadcrumb 
  separator="/" 
  items={[
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Article", active: true }
  ]} 
/>`}>
            <div className="w-full">
              <Breadcrumb 
                separator={<span className="text-zinc-300">/</span>}
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "Article", active: true }
                ]} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Solid Background */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Solid Background</h2>
          <CodeBlock code={`<div className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
  <Breadcrumb items={[...]} />
</div>`}>
            <div className="w-full px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Breadcrumb items={[
                { label: "Home", href: "/" },
                { label: "Settings", href: "/settings" },
                { label: "Profile", active: true }
              ]} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}