import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import { toast } from "../../components/ui/Toaster";
import Button from "../../components/ui/Button";

export default function ToastsPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Toasts</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Notifikasi sementara yang muncul di atas konten untuk memberikan umpan balik.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Panggil fungsi <code>toast()</code> dari mana saja untuk menampilkan notifikasi. Pastikan <code>&lt;Toaster /&gt;</code> sudah dipasang di root aplikasi.
          </p>
          <CodeBlock code={`import { toast } from "../components/ui/Toaster";

<Button onClick={() => toast({ title: "Success", message: "Data saved successfully!", type: "success" })}>
  Show Toast
</Button>`}>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => toast({ title: "Success", message: "Data saved successfully!", type: "success" })}>
                Success Toast
              </Button>
              <Button variant="danger" onClick={() => toast({ title: "Error", message: "Something went wrong.", type: "error" })}>
                Error Toast
              </Button>
              <Button variant="warning" onClick={() => toast({ title: "Warning", message: "Please check your input.", type: "warning" })}>
                Warning Toast
              </Button>
              <Button variant="secondary" onClick={() => toast({ title: "Info", message: "New update available.", type: "info" })}>
                Info Toast
              </Button>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}