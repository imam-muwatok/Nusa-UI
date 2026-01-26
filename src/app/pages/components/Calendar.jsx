import React, { useState } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Calendar from "../../components/ui/Calendar";
import { XMarkIcon } from "@heroicons/react/24/outline";

const EventModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-md scale-100 rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 border dark:border-zinc-800 transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{event.title}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Date</label>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">
              {event.date.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              {event.endDate && ` - ${event.endDate.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
            </p>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Description</label>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Ini adalah detail acara. Anda bisa menambahkan properti deskripsi pada objek event Anda untuk menampilkannya di sini.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <button onClick={onClose} className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  const [events, setEvents] = useState([
    { id: 1, date: today, title: "Meeting with Team", color: "bg-blue-500", category: "Work", description: "Discussing Q3 roadmap and deliverables." },
    { id: 2, date: today, title: "Lunch Break", color: "bg-green-500", category: "Personal", description: "Lunch at Padang Restaurant." },
    { id: 3, date: tomorrow, title: "Project Deadline", color: "bg-red-500", category: "Urgent", description: "Final submission for the client project." },
    { id: 4, date: nextWeek, title: "Client Call", color: "bg-purple-500", category: "Work", description: "Weekly sync with the client." },
    { id: 5, date: today, endDate: threeDaysLater, title: "Design Sprint (3 Days)", color: "bg-orange-500", category: "Work", description: "Intensive design session for the new product features." },
  ]);

  const categories = [
    { name: "Work", color: "bg-blue-500" },
    { name: "Personal", color: "bg-green-500" },
    { name: "Urgent", color: "bg-red-500" },
  ];

  const handleEventMove = (movedEvent, newDate) => {
    setEvents(prevEvents => prevEvents.map(event => {
      if (event.id === movedEvent.id) {
        // Jika event multi-hari, pertahankan durasinya saat dipindah
        if (event.endDate) {
          const duration = event.endDate.getTime() - event.date.getTime();
          const newEndDate = new Date(newDate.getTime() + duration);
          return { ...event, date: newDate, endDate: newEndDate };
        }
        return { ...event, date: newDate };
      }
      return event;
    }));
  };

  const handleEventResize = (resizedEvent, newEndDate) => {
    setEvents(prevEvents => prevEvents.map(event => {
      if (event.id === resizedEvent.id) {
        // Pastikan end date tidak sebelum start date
        if (newEndDate < event.date) return event;
        return { ...event, endDate: newEndDate };
      }
      return event;
    }));
  };

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Calendar</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen kalender bulanan untuk menampilkan jadwal dan acara.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">View Modes</h2>
          <CodeBlock code={`const [events, setEvents] = useState([
  { id: 1, date: new Date(), title: "Meeting", color: "bg-blue-500" },
  { id: 2, date: new Date(Date.now() + 86400000), title: "Deadline", color: "bg-red-500" },
]);

<Calendar events={events} />`}>
            <div className="w-full">
              <Calendar events={events} />
            </div>
          </CodeBlock>
        </section>

        {/* Event Click */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Event Click</h2>
          <CodeBlock code={`<Calendar 
  events={events} 
  onEventClick={(event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  }} 
/>`}>
            <div className="w-full">
              <Calendar 
                events={events} 
                onEventClick={(event) => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Drag and Drop */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Drag and Drop</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Coba tarik dan lepas event di bawah ini ke tanggal lain.
          </p>
          <CodeBlock code={`<Calendar 
  events={events} 
  onEventMove={(event, newDate) => {
    setEvents(prev => prev.map(e => 
      e.id === event.id ? { ...e, date: newDate } : e
    ));
  }} 
/>`}>
            <div className="w-full">
              <Calendar events={events} onEventMove={handleEventMove} onEventClick={(event) => { setSelectedEvent(event); setIsModalOpen(true); }} />
            </div>
          </CodeBlock>
        </section>

        {/* Multi-day Events */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Multi-day Events</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tambahkan properti <code>endDate</code> pada objek event untuk membuat acara yang berlangsung lebih dari satu hari.
          </p>
          <CodeBlock code={`const events = [
  { 
    date: new Date("2023-10-01"), 
    endDate: new Date("2023-10-03"), 
    title: "Conference", 
    color: "bg-orange-500" 
  }
];`}>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
              Lihat contoh "Design Sprint" pada kalender di atas yang berwarna oranye.
            </div>
          </CodeBlock>
        </section>

        {/* Event Resizing */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Event Resizing</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Arahkan kursor ke ujung kanan event (seperti "Design Sprint") dan tarik untuk mengubah durasinya.
          </p>
          <CodeBlock code={`<Calendar 
  events={events} 
  onEventResize={(event, newEndDate) => {
    setEvents(prev => prev.map(e => 
      e.id === event.id ? { ...e, endDate: newEndDate } : e
    ));
  }} 
/>`}>
            <div className="w-full">
              <Calendar events={events} onEventResize={handleEventResize} onEventMove={handleEventMove} onEventClick={(event) => { setSelectedEvent(event); setIsModalOpen(true); }} />
            </div>
          </CodeBlock>
        </section>

        {/* Event Filtering */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Event Filtering</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>categories</code> untuk mengaktifkan fitur penyaringan. Pastikan setiap objek event memiliki properti <code>category</code> yang sesuai.
          </p>
          <CodeBlock code={`const categories = [
  { name: "Work", color: "bg-blue-500" },
  { name: "Personal", color: "bg-green-500" },
  { name: "Urgent", color: "bg-red-500" },
];

<Calendar events={events} categories={categories} />`}>
            <div className="w-full">
              <Calendar events={events} categories={categories} onEventClick={(event) => { setSelectedEvent(event); setIsModalOpen(true); }} />
            </div>
          </CodeBlock>
        </section>

        {/* Event Popover */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Event Popover</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Arahkan kursor ke acara untuk melihat ringkasan detailnya (Judul, Tanggal, Deskripsi).
          </p>
          <CodeBlock code={`const events = [
  { 
    title: "Meeting", 
    description: "Discussing Q3 roadmap...", 
    // ... 
  }
];`}>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
              Coba hover pada event di kalender utama di atas untuk melihat popover.
            </div>
          </CodeBlock>
        </section>

        {/* Event Badges */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Event Badges</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>useBadges</code> untuk menampilkan acara sebagai titik kecil (badge) agar tampilan lebih bersih.
          </p>
          <CodeBlock code={`<Calendar 
  useBadges 
  events={events} 
/>`}>
            <div className="w-full">
              <Calendar useBadges events={events} onEventClick={(event) => { setSelectedEvent(event); setIsModalOpen(true); }} />
            </div>
          </CodeBlock>
        </section>
      </div>

      <EventModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        event={selectedEvent} 
      />
    </main>
  );
}