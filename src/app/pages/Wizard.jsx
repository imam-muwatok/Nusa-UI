import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Wizard from "../components/ui/Wizard";
import FormControl from "../components/ui/FormControl";

export default function WizardPage() {
  const inputClasses = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white transition-all";

  const steps = [
    {
      title: "Account Details",
      content: (
        <div className="space-y-4 max-w-md">
          <FormControl label="Username">
            <input type="text" className={inputClasses} placeholder="johndoe" />
          </FormControl>
          <FormControl label="Email">
            <input type="email" className={inputClasses} placeholder="john@example.com" />
          </FormControl>
        </div>
      )
    },
    {
      title: "Personal Info",
      content: (
        <div className="space-y-4 max-w-md">
          <FormControl label="Full Name">
            <input type="text" className={inputClasses} placeholder="John Doe" />
          </FormControl>
          <FormControl label="Address">
            <input type="text" className={inputClasses} placeholder="123 Main St" />
          </FormControl>
        </div>
      )
    },
    {
      title: "Review",
      content: (
        <div className="py-4">
          <h4 className="text-lg font-bold mb-2">All set!</h4>
          <p className="text-zinc-500 dark:text-zinc-400">Please review your information before submitting.</p>
          <div className="mt-4 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 text-sm space-y-2">
            <p><strong>Username:</strong> johndoe</p>
            <p><strong>Email:</strong> john@example.com</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Wizard</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Formulir multi-langkah untuk memandu pengguna melalui proses yang kompleks secara bertahap.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const steps = [
  { title: "Step 1", content: <Form1 /> },
  { title: "Step 2", content: <Form2 /> },
  { title: "Review", content: <Review /> },
];

<Wizard steps={steps} onComplete={() => alert("Done!")} />`}>
            <div className="w-full max-w-3xl">
              <Wizard steps={steps} onComplete={() => alert("Wizard Completed!")} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}