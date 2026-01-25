import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import Badge from "../components/ui/Badge";

export default function TablePage() {
  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { 
      key: "status", 
      label: "Status", 
      render: (value) => (
        <Badge variant={value === "Active" ? "success" : "secondary"} size="sm">
          {value}
        </Badge>
      ) 
    },
    { key: "email", label: "Email" },
  ];

  const data = [
    { name: "John Doe", role: "Admin", status: "Active", email: "john@example.com" },
    { name: "Jane Smith", role: "User", status: "Inactive", email: "jane@example.com" },
    { name: "Alice Johnson", role: "Editor", status: "Active", email: "alice@example.com" },
    { name: "Bob Brown", role: "User", status: "Active", email: "bob@example.com" },
    { name: "Charlie Davis", role: "Admin", status: "Inactive", email: "charlie@example.com" },
    { name: "Diana Evans", role: "User", status: "Active", email: "diana@example.com" },
    { name: "Evan Foster", role: "Editor", status: "Active", email: "evan@example.com" },
    { name: "Fiona Green", role: "User", status: "Inactive", email: "fiona@example.com" },
    { name: "George Harris", role: "User", status: "Active", email: "george@example.com" },
    { name: "Hannah White", role: "Admin", status: "Active", email: "hannah@example.com" },
    { name: "Ian Black", role: "User", status: "Inactive", email: "ian@example.com" },
    { name: "Jack King", role: "Editor", status: "Active", email: "jack@example.com" },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Tables</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen tabel data dengan fitur sorting dan pagination.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Table */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Table</h2>
          <CodeBlock code={`const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status" },
];

const data = [
  { name: "John Doe", role: "Admin", status: "Active" },
  // ...
];

<Table columns={columns} data={data} />`}>
            <div className="w-full">
              <Table columns={columns.slice(0, 3)} data={data.slice(0, 5)} />
            </div>
          </CodeBlock>
        </section>

        {/* Pagination & Sorting */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pagination & Sorting</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>pagination</code> dan <code>itemsPerPage</code> untuk mengaktifkan pagination. Tambahkan <code>sortable: true</code> pada kolom untuk mengaktifkan sorting.
          </p>
          <CodeBlock code={`<Table 
  columns={columns} 
  data={data} 
  pagination 
  itemsPerPage={5} 
/>`}>
            <div className="w-full">
              <Table columns={columns} data={data} pagination itemsPerPage={5} />
            </div>
          </CodeBlock>
        </section>

        {/* Search Filter */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Search Filter</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>searchable</code> untuk menambahkan input pencarian di atas tabel.
          </p>
          <CodeBlock code={`<Table 
  searchable
  pagination
  itemsPerPage={5}
  columns={columns} 
  data={data} 
/>`}>
            <div className="w-full">
              <Table searchable pagination itemsPerPage={5} columns={columns} data={data} />
            </div>
          </CodeBlock>
        </section>

        {/* Export Data */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Export Data</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>exportable</code> untuk menampilkan tombol export (CSV, JSON, PDF).
          </p>
          <CodeBlock code={`<Table 
  exportable
  searchable
  pagination
  itemsPerPage={5}
  columns={columns} 
  data={data} 
/>`}>
            <div className="w-full">
              <Table exportable searchable pagination itemsPerPage={5} columns={columns} data={data} />
            </div>
          </CodeBlock>
        </section>

        {/* Excel Style, Resizable & Editable */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Excel Style, Resizable & Editable</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>variant="excel"</code>, <code>resizable</code>, dan <code>editable</code> untuk pengalaman seperti spreadsheet. Klik sel untuk mengedit.
          </p>
          <CodeBlock code={`<Table 
  variant="excel"
  resizable
  editable
  columns={columns} 
  data={data} 
  pagination
  onDataChange={(newData) => console.log(newData)}
/>`}>
            <div className="w-full">
              <Table variant="excel" resizable editable columns={columns} data={data} pagination itemsPerPage={5} onDataChange={(d) => console.log("Data updated:", d)} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}