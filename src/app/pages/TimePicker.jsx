import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import TimePicker from "../components/ui/TimePicker";

export default function TimePickerPage() {
  const [time, setTime] = useState("09:00");
  const [time2, setTime2] = useState("");

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Time Picker</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk memilih waktu (jam dan menit).
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [time, setTime] = useState("09:00");

<TimePicker 
  label="Select Time" 
  value={time} 
  onChange={setTime} 
/>`}>
            <div className="w-full max-w-xs">
              <TimePicker 
                label="Select Time" 
                value={time} 
                onChange={setTime} 
              />
              <p className="mt-4 text-sm text-zinc-500">Selected: {time}</p>
            </div>
          </CodeBlock>
        </section>

        {/* Empty State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Empty State</h2>
          <CodeBlock code={`const [time, setTime] = useState("");

<TimePicker 
  label="Meeting Time" 
  value={time} 
  onChange={setTime} 
/>`}>
            <div className="w-full max-w-xs">
              <TimePicker 
                label="Meeting Time" 
                value={time2} 
                onChange={setTime2} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled</h2>
          <CodeBlock code={`<TimePicker disabled label="Disabled" value="12:30" />`}>
            <div className="w-full max-w-xs">
              <TimePicker disabled label="Disabled" value="12:30" />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}