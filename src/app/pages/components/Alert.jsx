import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Alert from "../../components/ui/Alert";

export default function AlertPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Alerts</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Menampilkan pesan kontekstual yang penting untuk pengguna.
        </p>
      </div>

      <div className="space-y-12">
        {/* Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Variants</h2>
          <CodeBlock code={`<Alert variant="info">This is an informational alert.</Alert>
<Alert variant="success">This is a success alert.</Alert>
<Alert variant="warning">This is a warning alert.</Alert>
<Alert variant="danger">This is a danger alert.</Alert>`}>
            <div className="w-full space-y-4">
              <Alert variant="info">
                This is an informational alert.
              </Alert>
              <Alert variant="success">
                This is a success alert.
              </Alert>
              <Alert variant="warning">
                This is a warning alert.
              </Alert>
              <Alert variant="danger">
                This is a danger alert.
              </Alert>
            </div>
          </CodeBlock>
        </section>

        {/* With Close Button */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Closable</h2>
          <CodeBlock code={`{/* Anda perlu mengelola state untuk fungsionalitas ini */}
<Alert variant="success" onClose={() => { /* handle close */ }}>
  This success alert is closable.
</Alert>`}>
            <div className="w-full">
              <Alert variant="success" onClose={() => {}}>
                This success alert is closable.
              </Alert>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}