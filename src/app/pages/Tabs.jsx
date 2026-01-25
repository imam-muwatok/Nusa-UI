import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Tabs from "../components/ui/Tabs";
import { UserIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/outline";

export default function TabsPage() {
  const items = [
    { label: "Profile", content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Profile Content: Manage your public profile here.</div> },
    { label: "Settings", content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Settings Content: Update your password and security settings.</div> },
    { label: "Messages", content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Messages Content: Check your latest messages and notifications.</div> },
  ];

  const iconItems = [
    { label: "Profile", icon: <UserIcon className="h-5 w-5" />, content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Profile Content with Icon</div> },
    { label: "Settings", icon: <Cog6ToothIcon className="h-5 w-5" />, content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Settings Content with Icon</div> },
    { label: "Notifications", icon: <BellIcon className="h-5 w-5" />, content: <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">Notifications Content with Icon</div> },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Tabs</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk mengorganisir konten dalam tab yang dapat dialihkan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Tabs */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Tabs</h2>
          <CodeBlock code={`const items = [
  { label: "Profile", content: <div>Profile Content</div> },
  { label: "Settings", content: <div>Settings Content</div> },
  { label: "Messages", content: <div>Messages Content</div> },
];

<Tabs items={items} />`}>
            <div className="w-full">
              <Tabs items={items} />
            </div>
          </CodeBlock>
        </section>

        {/* Pills Variant */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pills Variant</h2>
          <CodeBlock code={`<Tabs variant="pills" items={items} />`}>
            <div className="w-full">
              <Tabs variant="pills" items={items} />
            </div>
          </CodeBlock>
        </section>

        {/* Underline Variant */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Underline Variant</h2>
          <CodeBlock code={`<Tabs variant="underline" items={items} />`}>
            <div className="w-full">
              <Tabs variant="underline" items={items} />
            </div>
          </CodeBlock>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons</h2>
          <CodeBlock code={`const items = [
  { label: "Profile", icon: <UserIcon />, content: ... },
  // ...
];

<Tabs items={items} />`}>
            <div className="w-full">
              <Tabs items={iconItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Vertical Tabs */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Vertical Tabs</h2>
          <CodeBlock code={`<Tabs vertical variant="pills" items={items} />`}>
            <div className="w-full">
              <Tabs vertical variant="pills" items={items} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}