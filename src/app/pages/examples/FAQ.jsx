import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Accordion from "../../components/ui/Accordion";

export default function FAQPage() {
  const faqs = [
    {
      title: "What is Nusa-UI?",
      content: "Nusa-UI is a library of interactive UI components built with Tailwind CSS and React. It provides a set of accessible, reusable, and beautiful components to help you build your next project faster."
    },
    {
      title: "Is it free to use?",
      content: "Yes, Nusa-UI is completely free and open-source. You can use it in both personal and commercial projects without any restrictions."
    },
    {
      title: "How do I install it?",
      content: "You can install Nusa-UI by copying the component code directly into your project. We believe in owning your code, so there are no npm packages to install for the components themselves."
    },
    {
      title: "Can I customize the components?",
      content: "Absolutely! Since you have the source code, you can customize every aspect of the components to match your brand and design requirements. They are built with Tailwind CSS, making customization a breeze."
    },
    {
      title: "Do you offer support?",
      content: "While we don't offer dedicated support, you can join our community on Discord or open an issue on GitHub if you encounter any bugs or have feature requests."
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">FAQ</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Halaman Pertanyaan yang Sering Diajukan (FAQ) menggunakan komponen Accordion.
        </p>
      </div>

      <div className="space-y-12">
        {/* Simple FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Simple FAQ</h2>
          <CodeBlock code={`<div className="max-w-3xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
  <Accordion items={faqs} />
</div>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 bg-white dark:bg-zinc-900">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <Accordion items={faqs} />
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* FAQ with Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">FAQ with Categories</h2>
          <CodeBlock code={`<div className="grid md:grid-cols-12 gap-8">
  <div className="md:col-span-4">
    <h3 className="text-xl font-bold mb-4">General</h3>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Basic questions about the platform.</p>
  </div>
  <div className="md:col-span-8">
    <Accordion variant="flush" items={faqs.slice(0, 2)} />
  </div>

  <div className="md:col-span-4">
    <h3 className="text-xl font-bold mb-4">Technical</h3>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Detailed technical information.</p>
  </div>
  <div className="md:col-span-8">
    <Accordion variant="flush" items={faqs.slice(2, 5)} />
  </div>
</div>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 bg-white dark:bg-zinc-900">
                <div className="grid md:grid-cols-12 gap-8 mb-12 border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <div className="md:col-span-4">
                        <h3 className="text-xl font-bold mb-2">General</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Basic questions about the platform and licensing.</p>
                    </div>
                    <div className="md:col-span-8">
                        <Accordion variant="flush" items={faqs.slice(0, 2)} />
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <h3 className="text-xl font-bold mb-2">Technical</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Detailed technical information regarding installation and customization.</p>
                    </div>
                    <div className="md:col-span-8">
                        <Accordion variant="flush" items={faqs.slice(2, 5)} />
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}