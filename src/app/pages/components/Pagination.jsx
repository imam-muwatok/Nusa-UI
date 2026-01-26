import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Pagination from "../components/ui/Pagination";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(5);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(1);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Pagination</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Navigasi untuk membagi konten panjang menjadi beberapa halaman.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [currentPage, setCurrentPage] = useState(1);

<Pagination 
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}>
            <div className="w-full flex justify-center">
              <Pagination 
                currentPage={currentPage} 
                totalPages={10} 
                onPageChange={setCurrentPage} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Many Pages */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Many Pages</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Otomatis menampilkan ellipsis (...) jika jumlah halaman terlalu banyak.
          </p>
          <CodeBlock code={`const [currentPage, setCurrentPage] = useState(5);

<Pagination 
  currentPage={currentPage} 
  totalPages={20} 
  onPageChange={setCurrentPage} 
/>`}>
            <div className="w-full flex justify-center">
              <Pagination 
                currentPage={currentPage2} 
                totalPages={20} 
                onPageChange={setCurrentPage2} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Simple Pagination */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Simple Pagination</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Navigasi sederhana dengan tombol Previous dan Next.
          </p>
          <CodeBlock code={`const [currentPage, setCurrentPage] = useState(1);

<Pagination 
  simple
  currentPage={currentPage} 
  totalPages={10} 
  onPageChange={setCurrentPage} 
/>`}>
            <div className="w-full">
              <Pagination 
                simple
                currentPage={currentPage3} 
                totalPages={10} 
                onPageChange={setCurrentPage3} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Go to Page */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Go to Page</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tambahkan prop <code>showGoTo</code> untuk menampilkan input lompat halaman.
          </p>
          <CodeBlock code={`const [currentPage, setCurrentPage] = useState(1);

<Pagination 
  showGoTo
  currentPage={currentPage} 
  totalPages={50} 
  onPageChange={setCurrentPage} 
/>`}>
            <div className="w-full flex justify-center">
              <Pagination 
                showGoTo
                currentPage={currentPage4} 
                totalPages={50} 
                onPageChange={setCurrentPage4} 
              />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}