import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Accordion from "../../components/ui/Accordion";
import { UserIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function AccordionPage() {
  const defaultItems = [
    { title: "Apa itu Nusa-UI?", content: "Nusa-UI adalah library komponen React yang dibangun di atas Tailwind CSS untuk mempercepat pengembangan antarmuka pengguna dengan gaya yang modern dan minimalis." },
    { title: "Bagaimana cara menggunakannya?", content: "Cukup copy-paste komponen yang Anda butuhkan ke dalam proyek Anda. Tidak ada dependensi npm yang berat, hanya React dan Tailwind CSS." },
    { title: "Apakah gratis?", content: "Ya, Nusa-UI sepenuhnya open source dan gratis untuk digunakan dalam proyek pribadi maupun komersial." },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Accordion</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk menyembunyikan dan menampilkan konten secara vertikal untuk menghemat ruang layar.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const items = [
  { title: "Apa itu Nusa-UI?", content: "..." },
  { title: "Bagaimana cara menggunakannya?", content: "..." },
  { title: "Apakah gratis?", content: "..." },
];

<Accordion items={items} />`}>
            <div className="w-full">
              <Accordion items={defaultItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Flush Variant */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Flush Variant</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan <code>variant="flush"</code> untuk menghilangkan border luar dan radius, cocok untuk ditempatkan di dalam container lain.
          </p>
          <CodeBlock code={`<Accordion variant="flush" items={items} />`}>
            <div className="w-full rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/50">
              <Accordion variant="flush" items={defaultItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Bordered Variant */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Bordered Variant</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan <code>variant="bordered"</code> untuk memberikan border terpisah pada setiap item.
          </p>
          <CodeBlock code={`<Accordion variant="bordered" items={items} />`}>
            <div className="w-full">
              <Accordion variant="bordered" items={defaultItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Always Open */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Always Open</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tambahkan prop <code>alwaysOpen</code> untuk mengizinkan beberapa item terbuka secara bersamaan.
          </p>
          <CodeBlock code={`<Accordion alwaysOpen items={items} />`}>
            <div className="w-full">
              <Accordion alwaysOpen items={[
                { title: "Item #1", content: "Konten item pertama yang bisa tetap terbuka." },
                { title: "Item #2", content: "Konten item kedua. Buka item lain tanpa menutup ini." },
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons</h2>
          <CodeBlock code={`<Accordion items={[
  { 
    title: "Personal Settings", 
    icon: <UserIcon className="h-5 w-5" />,
    content: "Manage your personal details and preferences here." 
  },
  { 
    title: "Security", 
    icon: <ShieldCheckIcon className="h-5 w-5" />,
    content: "Update your password and security settings." 
  },
]} />`}>
            <div className="w-full">
              <Accordion items={[
                { title: "Personal Settings", icon: <UserIcon className="h-5 w-5" />, content: "Manage your personal details and preferences here." },
                { title: "Security", icon: <ShieldCheckIcon className="h-5 w-5" />, content: "Update your password and security settings." },
              ]} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}