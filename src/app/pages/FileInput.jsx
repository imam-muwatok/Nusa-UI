import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import FileInput from "../components/ui/FileInput";

export default function FileInputPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">File Input</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen upload file dengan dukungan drag & drop dan preview daftar file.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes & Variants</h2>
          <CodeBlock code={`{/* Sizes */}
<FileInput size="sm" label="Small" />
<FileInput size="md" label="Medium" />
<FileInput size="lg" label="Large" />
<FileInput size="xl" label="Extra Large" />

{/* Variants */}
<FileInput variant="primary" label="Primary" />
<FileInput variant="success" label="Success" />
<FileInput variant="warning" label="Warning" />
<FileInput variant="danger" label="Danger" />`}>
            <div className="w-full space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Sizes</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <FileInput size="sm" label="Small" />
                  <FileInput size="md" label="Medium" />
                  <FileInput size="lg" label="Large" />
                  <FileInput size="xl" label="Extra Large" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Variants</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <FileInput variant="primary" label="Primary" />
                  <FileInput variant="success" label="Success" />
                  <FileInput variant="warning" label="Warning" />
                  <FileInput variant="danger" label="Danger" />
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Image Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Image Preview</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Otomatis menampilkan thumbnail jika file yang diupload adalah gambar.
          </p>
          <CodeBlock code={`<FileInput 
  label="Gallery" 
  multiple
  accept="image/*"
  helperText="Upload images to see the preview." 
/>`}>
            <div className="w-full max-w-lg">
              <FileInput label="Gallery" multiple accept="image/*" helperText="Upload images to see the preview." />
            </div>
          </CodeBlock>
        </section>

        {/* Multiple Files */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Multiple Files</h2>
          <CodeBlock code={`<FileInput 
  multiple
  label="Upload Documents" 
  helperText="Select multiple files to upload." 
/>`}>
            <div className="w-full max-w-lg">
              <FileInput 
                multiple
                label="Upload Documents" 
                helperText="Select multiple files to upload." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Max Size Validation */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Max Size Validation</h2>
          <CodeBlock code={`<FileInput 
  label="Upload Resume" 
  maxSize={2 * 1024 * 1024} // 2MB
  helperText="PDF, DOCX up to 2MB" 
  accept=".pdf, .docx"
/>`}>
            <div className="w-full max-w-lg">
              <FileInput 
                label="Upload Resume" 
                maxSize={2 * 1024 * 1024} 
                helperText="PDF, DOCX up to 2MB" 
                accept=".pdf, .docx"
              />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled</h2>
          <CodeBlock code={`<FileInput disabled label="Upload Disabled" />`}>
            <div className="w-full max-w-lg">
              <FileInput disabled label="Upload Disabled" />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}