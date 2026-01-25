import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import DatePicker from "../components/ui/DatePicker";

export default function DatePickerPage() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(new Date());

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Date Picker</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk memilih tanggal dari kalender visual.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [date, setDate] = useState(null);

<DatePicker 
  label="Select Date" 
  value={date} 
  onChange={setDate} 
/>`}>
            <div className="w-full max-w-sm">
              <DatePicker 
                label="Select Date" 
                value={date} 
                onChange={setDate} 
              />
              <p className="mt-4 text-sm text-zinc-500">Selected: {date ? date.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "None"}</p>
            </div>
          </CodeBlock>
        </section>

        {/* Pre-selected */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pre-selected Date</h2>
          <CodeBlock code={`const [date, setDate] = useState(new Date());

<DatePicker 
  label="Appointment" 
  value={date} 
  onChange={setDate} 
/>`}>
            <div className="w-full max-w-sm">
              <DatePicker 
                label="Appointment" 
                value={date2} 
                onChange={setDate2} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled</h2>
          <CodeBlock code={`<DatePicker disabled label="Disabled" value={new Date()} />`}>
            <div className="w-full max-w-sm">
              <DatePicker disabled label="Disabled" value={new Date()} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}