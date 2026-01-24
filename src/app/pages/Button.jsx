import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Button from "../components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function ButtonPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Buttons</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen tombol interaktif dengan berbagai variasi gaya, ukuran, dan state.
        </p>
      </div>

      <div className="space-y-12">
        {/* Solid Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Solid Variants</h2>
          <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>`}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
          </CodeBlock>
        </section>

        {/* Outline Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Outline Variants</h2>
          <CodeBlock code={`<Button type="outline" variant="primary">Primary</Button>
<Button type="outline" variant="secondary">Secondary</Button>
<Button type="outline" variant="success">Success</Button>
<Button type="outline" variant="danger">Danger</Button>
<Button type="outline" variant="warning">Warning</Button>
<Button type="outline" variant="info">Info</Button>`}>
            <Button type="outline" variant="primary">Primary</Button>
            <Button type="outline" variant="secondary">Secondary</Button>
            <Button type="outline" variant="success">Success</Button>
            <Button type="outline" variant="danger">Danger</Button>
            <Button type="outline" variant="warning">Warning</Button>
            <Button type="outline" variant="info">Info</Button>
          </CodeBlock>
        </section>

        {/* Ghost Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Ghost Variants</h2>
          <CodeBlock code={`<Button type="ghost" variant="primary">Primary</Button>
<Button type="ghost" variant="secondary">Secondary</Button>
<Button type="ghost" variant="success">Success</Button>
<Button type="ghost" variant="danger">Danger</Button>
<Button type="ghost" variant="warning">Warning</Button>
<Button type="ghost" variant="info">Info</Button>`}>
            <Button type="ghost" variant="primary">Primary</Button>
            <Button type="ghost" variant="secondary">Secondary</Button>
            <Button type="ghost" variant="success">Success</Button>
            <Button type="ghost" variant="danger">Danger</Button>
            <Button type="ghost" variant="warning">Warning</Button>
            <Button type="ghost" variant="info">Info</Button>
          </CodeBlock>
        </section>

        {/* Gradient Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Gradient Variants</h2>
          <CodeBlock code={`<Button type="gradient" variant="primary">Primary</Button>
<Button type="gradient" variant="secondary">Secondary</Button>
<Button type="gradient" variant="success">Success</Button>
<Button type="gradient" variant="danger">Danger</Button>
<Button type="gradient" variant="warning">Warning</Button>
<Button type="gradient" variant="info">Info</Button>
<Button type="gradient" variant="light">Light</Button>
<Button type="gradient" variant="dark">Dark</Button>`}>
            <Button type="gradient" variant="primary">Primary</Button>
            <Button type="gradient" variant="secondary">Secondary</Button>
            <Button type="gradient" variant="success">Success</Button>
            <Button type="gradient" variant="danger">Danger</Button>
            <Button type="gradient" variant="warning">Warning</Button>
            <Button type="gradient" variant="info">Info</Button>
            <Button type="gradient" variant="light">Light</Button>
            <Button type="gradient" variant="dark">Dark</Button>
          </CodeBlock>
        </section>

        {/* Icon Only (Circle) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Icon Only (Circle)</h2>
          <CodeBlock code={`<Button iconOnly size="xs"><PlusIcon className="h-4 w-4" /></Button>
<Button iconOnly size="sm"><PlusIcon className="h-5 w-5" /></Button>
<Button iconOnly size="md"><PlusIcon className="h-6 w-6" /></Button>
<Button iconOnly size="lg"><PlusIcon className="h-7 w-7" /></Button>
<Button iconOnly size="xl"><PlusIcon className="h-8 w-8" /></Button>
<Button iconOnly size="2xl"><PlusIcon className="h-9 w-9" /></Button>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Button iconOnly size="xs"><PlusIcon className="h-4 w-4" /></Button>
              <Button iconOnly size="sm"><PlusIcon className="h-5 w-5" /></Button>
              <Button iconOnly size="md"><PlusIcon className="h-6 w-6" /></Button>
              <Button iconOnly size="lg"><PlusIcon className="h-7 w-7" /></Button>
              <Button iconOnly size="xl"><PlusIcon className="h-8 w-8" /></Button>
              <Button iconOnly size="2xl"><PlusIcon className="h-9 w-9" /></Button>
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>
<Button size="2xl">2XL</Button>`}>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
            <Button size="2xl">2XL</Button>
          </CodeBlock>
        </section>

        {/* States */}
        <section>
          <h2 className="text-2xl font-bold mb-6">States</h2>
          <CodeBlock code={`<Button disabled className="cursor-not-allowed opacity-50">Disabled</Button>

<Button className="flex items-center gap-2 cursor-wait">
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading
</Button>`}>
            <Button disabled className="cursor-not-allowed opacity-50">
              Disabled
            </Button>
            <Button className="flex items-center gap-2 cursor-wait">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </Button>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}