import React from "react";
import { EllipsisHorizontalIcon, PhotoIcon, ShareIcon, PencilIcon, DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/24/outline";
import CodeBlock from "../../components/ui/CodeBlock";
import Dropdown, { DropdownItem, DropdownDivider } from "../../components/ui/Dropdown";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/Card";

export default function CardPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Cards</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen kontainer fleksibel untuk menampilkan konten dan tindakan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic</h2>
          <CodeBlock code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";

{/* Basic Card */}
<Card>
  <CardContent>
    <CardDescription>Ini adalah card paling dasar. Hanya sebuah kontainer dengan padding dan border.</CardDescription>
  </CardContent>
</Card>

{/* Simple Card */}
<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>Kartu sederhana dengan judul dan teks deskripsi. Cocok untuk menampilkan informasi ringkas.</CardDescription>
  </CardHeader>
  <CardFooter>
    <button className="text-sm font-bold text-cyan-600 hover:text-cyan-500">Read more &rarr;</button>
  </CardFooter>
</Card>

{/* With Header Action & Dropdown */}
<Card>
  <CardHeader className="flex-row items-center justify-between">
    <CardTitle>With Header</CardTitle>
    <Dropdown
      triggerMode="hover"
      align="right"
      trigger={
        <button className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </button>
      }
    >
      <DropdownItem icon={<PencilIcon className="h-4 w-4" />}>Edit</DropdownItem>
      <DropdownItem icon={<DocumentDuplicateIcon className="h-4 w-4" />}>Duplicate</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<TrashIcon className="h-4 w-4" />} className="!text-red-500 hover:!text-red-600 dark:hover:!text-red-400">Delete</DropdownItem>
    </Dropdown>
  </CardHeader>
  <CardContent>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Kartu dengan header dan aksi opsional di pojok kanan atas.</p>
  </CardContent>
</Card>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {/* Basic Card */}
              <Card>
                <CardContent>
                  <CardDescription>Ini adalah card paling dasar. Hanya sebuah kontainer dengan padding dan border.</CardDescription>
                </CardContent>
              </Card>

              {/* Simple Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>Kartu sederhana dengan judul dan teks deskripsi. Cocok untuk menampilkan informasi ringkas.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <button className="text-sm font-bold text-cyan-600 hover:text-cyan-500">Read more &rarr;</button>
                </CardFooter>
              </Card>
              
              {/* With Header Action */}
              <Card>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle>With Header</CardTitle>
                    <Dropdown
                      triggerMode="hover"
                      align="right"
                      trigger={
                        <button className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                          <EllipsisHorizontalIcon className="h-6 w-6" />
                        </button>
                      }
                    >
                      <DropdownItem icon={<PencilIcon className="h-4 w-4" />}>Edit</DropdownItem>
                      <DropdownItem icon={<DocumentDuplicateIcon className="h-4 w-4" />}>Duplicate</DropdownItem>
                      <DropdownDivider />
                      <DropdownItem icon={<TrashIcon className="h-4 w-4" />} className="!text-red-500 hover:!text-red-600 dark:hover:!text-red-400">Delete</DropdownItem>
                    </Dropdown>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">Kartu dengan header dan aksi opsional di pojok kanan atas.</p>
                </CardContent>
              </Card>
            </div>
          </CodeBlock>
        </section>

        {/* Image Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Image</h2>
          <CodeBlock code={`{/* Vertical Card */}
<Card className="overflow-hidden p-0">
  <img src="https://picsum.photos/id/20/200/300" alt="Image" className="h-48 w-full object-cover" />
  <CardContent className="p-6">
    <CardTitle className="mb-2">Card Title</CardTitle>
    <CardDescription className="mb-6">Deskripsi singkat tentang konten kartu ini. Gambar di atas memberikan konteks visual yang menarik.</CardDescription>
    <button className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors">
      Action
    </button>
  </CardContent>
</Card>
`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {/* Vertical Card */}
              <Card className="overflow-hidden p-0">
                <img src="https://picsum.photos/id/20/200/300" alt="Card visual" className="h-48 w-full object-cover" />
                <CardContent className="p-6">
                  <CardTitle className="mb-2">Card Title</CardTitle>
                  <CardDescription className="mb-6">Deskripsi singkat tentang konten kartu ini. Gambar di atas memberikan konteks visual yang menarik.</CardDescription>
                  <button className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors">
                    Action
                  </button>
                </CardContent>
              </Card>
              
            </div>
          </CodeBlock>
        </section>

        {/* Image Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Image Horisontal</h2>
          <CodeBlock code={`{/* Horizontal Card (Fixed Layout) */}
<Card className="flex flex-row overflow-hidden p-0">
  <img src="https://picsum.photos/id/20/200/300" alt="Image" className="w-1/3 object-cover" />
  <div className="w-2/3 p-6 flex flex-col justify-center">
    <CardTitle className="mb-2">Horizontal</CardTitle>
    <CardDescription className="mb-4">Gambar di samping teks dengan layout tetap.</CardDescription>
    <button className="self-start text-sm font-bold text-cyan-600">Read more &rarr;</button>
  </div>
</Card>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {/* Horizontal Card (Fixed Layout) */}
              <Card className="flex flex-row overflow-hidden p-0">
                <img src="https://picsum.photos/id/20/200/300" alt="Card visual" className="w-1/3 object-cover" />
                <div className="w-2/3 flex flex-col justify-center">
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">Horizontal</CardTitle>
                    <CardDescription className="mb-4">Varian kartu dengan gambar di samping teks. Layout ini tetap horizontal.</CardDescription>
                    <button className="self-start text-sm font-bold text-cyan-600 hover:text-cyan-500">Read more &rarr;</button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </CodeBlock>
        </section>

        {/* Horizontal Card Responsive */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Horizontal Responsive</h2>
          <CodeBlock code={`<Card className="flex flex-col md:flex-row overflow-hidden p-0">
  <div className="h-48 w-full md:w-48 md:h-auto shrink-0">
    <img src="https://picsum.photos/id/20/200/300" className="h-full w-full object-cover" />
  </div>
  <div className="flex flex-col justify-center">
    <CardHeader>
      <CardTitle>Horizontal Card</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>Varian kartu horizontal ini sangat cocok untuk menampilkan artikel berita, posting blog, atau profil pengguna dengan gambar di samping.</CardDescription>
    </CardContent>
    <CardFooter>
      <button className="self-start text-sm font-bold text-cyan-600 hover:text-cyan-500">Read full story &rarr;</button>
    </CardFooter>
  </div>
</Card>`}>
            <div className="w-full max-w-2xl">
              <Card className="flex flex-col md:flex-row overflow-hidden p-0">
                <div className="h-48 w-full md:w-48 md:h-auto shrink-0">
                  <img src="https://picsum.photos/id/20/200/300" alt="Card visual" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <CardHeader>
                    <CardTitle>Horizontal Card Responsive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Varian kartu horizontal ini sangat cocok untuk menampilkan artikel berita, posting blog, atau profil pengguna dengan gambar di samping.</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <button className="self-start text-sm font-bold text-cyan-600 hover:text-cyan-500">Read full story &rarr;</button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </CodeBlock>
        </section>

        {/* Interactive */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interactive</h2>
          <CodeBlock code={`<Card className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/50">
  <CardHeader>
    <div className="mb-4 h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
      <ShareIcon className="h-5 w-5" />
    </div>
    <CardTitle className="group-hover:text-cyan-500 transition-colors">Hover Effect</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>Kartu ini memiliki efek hover yang halus, cocok untuk item yang dapat diklik atau navigasi.</CardDescription>
  </CardContent>
</Card>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
               <Card className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/50">
                <CardHeader>
                  <div className="mb-4 h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"><ShareIcon className="h-5 w-5" /></div>
                  <CardTitle className="group-hover:text-cyan-500 transition-colors">Hover Effect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Kartu ini memiliki efek hover yang halus, cocok untuk item yang dapat diklik atau navigasi.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}