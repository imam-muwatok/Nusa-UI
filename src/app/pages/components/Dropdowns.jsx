import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Dropdown, { DropdownItem, DropdownDivider } from "../../components/ui/Dropdown";
import Button from "../../components/ui/Button";
import { ChevronDownIcon, UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, PencilIcon, DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function DropdownsPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Dropdowns</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Menu toggleable untuk menampilkan daftar tautan atau tindakan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Dropdown 
  trigger={
    <Button variant="primary" className="flex items-center gap-2">
      Options <ChevronDownIcon className="h-4 w-4" />
    </Button>
  }
>
  <DropdownItem icon={<PencilIcon />}>Edit</DropdownItem>
  <DropdownItem icon={<DocumentDuplicateIcon />}>Duplicate</DropdownItem>
  <DropdownDivider />
  <DropdownItem icon={<TrashIcon />} className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
    Delete
  </DropdownItem>
</Dropdown>`}>
            <div className="h-48 flex items-start">
                <Dropdown 
                trigger={
                    <Button variant="primary" className="flex items-center gap-2">
                    Options <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                }
                >
                <DropdownItem icon={<PencilIcon />}>Edit</DropdownItem>
                <DropdownItem icon={<DocumentDuplicateIcon />}>Duplicate</DropdownItem>
                <DropdownDivider />
                <DropdownItem icon={<TrashIcon />} className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">Delete</DropdownItem>
                </Dropdown>
            </div>
          </CodeBlock>
        </section>

        {/* Alignment & Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Alignment & Icons</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>align="right"</code> untuk meratakan menu ke kanan.
          </p>
          <CodeBlock code={`<Dropdown 
  align="right"
  trigger={<Button type="outline" className="flex items-center gap-2">User Menu <ChevronDownIcon className="h-4 w-4" /></Button>}
>
  <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
  <DropdownItem icon={<Cog6ToothIcon />}>Settings</DropdownItem>
  <DropdownDivider />
  <DropdownItem icon={<ArrowRightOnRectangleIcon />}>Logout</DropdownItem>
</Dropdown>`}>
            <div className="h-56 flex justify-start">
                <Dropdown 
                align="right" // Note: Di preview ini kita pakai left alignment visual agar tidak terpotong container, tapi kodenya right
                trigger={<Button type="outline" className="flex items-center gap-2">User Menu <ChevronDownIcon className="h-4 w-4" /></Button>}
                >
                <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
                <DropdownItem icon={<Cog6ToothIcon />}>Settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem icon={<ArrowRightOnRectangleIcon />}>Logout</DropdownItem>
                </Dropdown>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}