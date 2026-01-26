import React, { useState, useRef } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import List, { ListItem, ListHeader } from "../components/ui/List";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { UserIcon, Cog6ToothIcon, BellIcon, ChevronRightIcon, Bars3Icon, TrashIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

export default function ListsPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete documentation", completed: true },
    { id: 2, text: "Fix responsive layout", completed: false },
    { id: 3, text: "Add dark mode support", completed: false },
  ]);
  
  const [draggableItems, setDraggableItems] = useState([
    "Drag me 1", "Drag me 2", "Drag me 3", "Drag me 4"
  ]);
  const [infiniteItems, setInfiniteItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([1]);
  const [sortableItems, setSortableItems] = useState([
    "Task 1", "Task 2", "Task 3", "Task 4"
  ]);
  const virtualItems = Array.from({ length: 10000 }, (_, i) => `Virtual Item ${i + 1}`);
  const dragItem = useRef(null);
  const sortDragItem = useRef(null);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    const copyListItems = [...draggableItems];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(position, 0, dragItemContent);
    dragItem.current = position;
    setDraggableItems(copyListItems);
  };

  const handleSortDragStart = (e, position) => {
    sortDragItem.current = position;
  };

  const handleSortDragEnter = (e, position) => {
    const copyListItems = [...sortableItems];
    const dragItemContent = copyListItems[sortDragItem.current];
    copyListItems.splice(sortDragItem.current, 1);
    copyListItems.splice(position, 0, dragItemContent);
    sortDragItem.current = position;
    setSortableItems(copyListItems);
  };

  const loadMoreItems = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const nextItems = Array.from({ length: 5 }, (_, i) => `Item ${infiniteItems.length + i + 1}`);
      setInfiniteItems((prev) => [...prev, ...nextItems]);
      if (infiniteItems.length >= 30) {
        setHasMore(false);
      }
      setLoading(false);
    }, 1500);
  };

  const toggleSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Lists</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk menampilkan daftar item, baik sederhana maupun kompleks.
        </p>
      </div>

      <div className="space-y-12">
        {/* Typography Lists */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Typography Lists</h2>
          <CodeBlock code={`<List variant="default">
  <li>Nusa-UI is lightweight</li>
  <li>Built with Tailwind CSS</li>
  <li>Easy to customize</li>
</List>

<List variant="ordered" as="ol">
  <li>Install dependencies</li>
  <li>Copy components</li>
  <li>Start building</li>
</List>`}>
            <div className="grid gap-8 md:grid-cols-2">
              <List variant="default">
                <li>Nusa-UI is lightweight</li>
                <li>Built with Tailwind CSS</li>
                <li>Easy to customize</li>
              </List>
              <List variant="ordered" as="ol">
                <li>Install dependencies</li>
                <li>Copy components</li>
                <li>Start building</li>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Nested List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Nested List</h2>
          <CodeBlock code={`<List variant="default">
  <li>Frontend Development
    <List variant="default" nested>
      <li>React.js</li>
      <li>Vue.js</li>
      <li>Tailwind CSS</li>
    </List>
  </li>
  <li>Backend Development
    <List variant="default" nested>
      <li>Node.js</li>
      <li>Python</li>
    </List>
  </li>
</List>`}>
            <div className="w-full max-w-md">
              <List variant="default">
                <li>Frontend Development
                  <List variant="default" nested>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Tailwind CSS</li>
                  </List>
                </li>
                <li>Backend Development
                  <List variant="default" nested>
                    <li>Node.js</li>
                    <li>Python</li>
                  </List>
                </li>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Bordered List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Bordered List</h2>
          <CodeBlock code={`<List variant="bordered">
  <ListItem>Profile</ListItem>
  <ListItem>Settings</ListItem>
  <ListItem>Messages</ListItem>
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                <ListItem>Profile</ListItem>
                <ListItem>Settings</ListItem>
                <ListItem>Messages</ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* With Icons & Actions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons & Actions</h2>
          <CodeBlock code={`<List variant="bordered">
  <ListItem icon={<UserIcon className="h-5 w-5" />} action={<Badge variant="success">Active</Badge>}>
    Jane Doe
  </ListItem>
  <ListItem icon={<BellIcon className="h-5 w-5" />} action={<Badge variant="danger">9+</Badge>}>
    Notifications
  </ListItem>
  <ListItem icon={<Cog6ToothIcon className="h-5 w-5" />} action={<Button size="xs" variant="secondary">Edit</Button>}>
    Configuration
  </ListItem>
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                <ListItem icon={<UserIcon className="h-5 w-5" />} action={<Badge variant="success">Active</Badge>}>
                  Jane Doe
                </ListItem>
                <ListItem icon={<BellIcon className="h-5 w-5" />} action={<Badge variant="danger">9+</Badge>}>
                  Notifications
                </ListItem>
                <ListItem icon={<Cog6ToothIcon className="h-5 w-5" />} action={<Button size="xs" variant="secondary">Edit</Button>}>
                  Configuration
                </ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Interactive List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interactive List</h2>
          <CodeBlock code={`<List variant="bordered">
  <ListItem onClick={() => alert('Clicked!')} action={<ChevronRightIcon className="h-4 w-4" />}>
    Click me
  </ListItem>
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                <ListItem onClick={() => alert('Clicked Item 1')} action={<ChevronRightIcon className="h-4 w-4 text-zinc-400" />}>Account Settings</ListItem>
                <ListItem onClick={() => alert('Clicked Item 2')} action={<ChevronRightIcon className="h-4 w-4 text-zinc-400" />}>Privacy Policy</ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Checkable List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Checkable List</h2>
          <CodeBlock code={`const [todos, setTodos] = useState([
  { id: 1, text: "Complete documentation", completed: true },
  { id: 2, text: "Fix responsive layout", completed: false },
]);

<List variant="bordered">
  {todos.map(todo => (
    <ListItem key={todo.id} checkable checked={todo.completed} onCheck={() => toggleTodo(todo.id)}>
      {todo.text}
    </ListItem>
  ))}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                {todos.map(todo => (
                  <ListItem 
                    key={todo.id} 
                    checkable 
                    checked={todo.completed} 
                    onCheck={() => toggleTodo(todo.id)}
                  >
                    {todo.text}
                  </ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Draggable List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Draggable List</h2>
          <CodeBlock code={`const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
const dragItem = useRef(null);

const handleDragStart = (e, position) => {
  dragItem.current = position;
};

const handleDragEnter = (e, position) => {
  const copyListItems = [...items];
  const dragItemContent = copyListItems[dragItem.current];
  copyListItems.splice(dragItem.current, 1);
  copyListItems.splice(position, 0, dragItemContent);
  dragItem.current = position;
  setItems(copyListItems);
};

<List variant="bordered">
  {items.map((item, index) => (
    <ListItem key={index} draggable onDragStart={(e) => handleDragStart(e, index)} onDragEnter={(e) => handleDragEnter(e, index)}>
      {item}
    </ListItem>
  ))}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                {draggableItems.map((item, index) => (
                  <ListItem key={index} draggable onDragStart={(e) => handleDragStart(e, index)} onDragEnter={(e) => handleDragEnter(e, index)} onDragOver={(e) => e.preventDefault()} icon={<Bars3Icon className="h-5 w-5 text-zinc-400" />}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Avatar List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Avatar List</h2>
          <CodeBlock code={`<List variant="flush">
  <ListItem avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" action={<span className="text-xs text-zinc-400">Online</span>}>
    <div className="font-medium text-zinc-900 dark:text-white">Bonnie Green</div>
    <div className="text-xs text-zinc-500">bonnie@example.com</div>
  </ListItem>
  {/* ... */}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="flush">
                <ListItem avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" action={<span className="text-xs text-zinc-400">Online</span>}>
                  <div className="font-medium text-zinc-900 dark:text-white">Bonnie Green</div>
                  <div className="text-xs text-zinc-500">bonnie@example.com</div>
                </ListItem>
                <ListItem avatar="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" action={<span className="text-xs text-zinc-400">Offline</span>}>
                  <div className="font-medium text-zinc-900 dark:text-white">Michael Foster</div>
                  <div className="text-xs text-zinc-500">michael@example.com</div>
                </ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Swipe Actions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Swipe Actions</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Geser item ke kiri atau kanan untuk menampilkan aksi tambahan (Mobile Friendly).
          </p>
          <CodeBlock code={`<List variant="bordered">
  <ListItem 
    swipeLeftActions={
      <button className="flex h-full w-[100px] items-center justify-center bg-red-500 text-white" onClick={() => alert('Deleted')}>
        <TrashIcon className="h-5 w-5" />
      </button>
    }
  >
    Swipe me left
  </ListItem>
  {/* ... */}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                <ListItem 
                  swipeLeftActions={
                    <button className="flex h-full w-[100px] items-center justify-center bg-red-500 text-white" onClick={() => alert('Deleted')}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  }
                >
                  Swipe me left (Delete)
                </ListItem>
                <ListItem 
                  swipeRightActions={
                    <button className="flex h-full w-[100px] items-center justify-center bg-blue-500 text-white" onClick={() => alert('Archived')}>
                      <ArchiveBoxIcon className="h-5 w-5" />
                    </button>
                  }
                >
                  Swipe me right (Archive)
                </ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Infinite Scroll */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Infinite Scroll</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Scroll ke bawah pada area daftar untuk memuat lebih banyak data secara otomatis.
          </p>
          <CodeBlock code={`const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => \`Item \${i + 1}\`));
const [hasMore, setHasMore] = useState(true);
const [loading, setLoading] = useState(false);

const loadMore = () => {
  setLoading(true);
  setTimeout(() => {
    const nextItems = Array.from({ length: 5 }, (_, i) => \`Item \${items.length + i + 1}\`);
    setItems((prev) => [...prev, ...nextItems]);
    if (items.length >= 30) setHasMore(false);
    setLoading(false);
  }, 1500);
};

<List variant="flush" onLoadMore={loadMore} hasMore={hasMore} loading={loading}>
  {items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
</List>`}>
            <div className="w-full max-w-md h-64 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
              <List variant="flush" onLoadMore={loadMoreItems} hasMore={hasMore} loading={loading}>
                {infiniteItems.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Virtualization */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Virtualization</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Menangani ribuan item dengan performa tinggi dengan hanya merender item yang terlihat (10,000 items).
          </p>
          <CodeBlock code={`const virtualItems = Array.from({ length: 10000 }, (_, i) => \`Virtual Item \${i + 1}\`);

<List 
  virtualized 
  variant="bordered" 
  height={300} 
  itemHeight={54} 
  items={virtualItems}
  renderItem={(item, index) => (
    <ListItem key={index} as="div" className="border-b border-zinc-100 dark:border-zinc-800" action={<span className="text-xs text-zinc-400">#{index + 1}</span>}>
      {item}
    </ListItem>
  )}
/>`}>
            <div className="w-full max-w-md">
              <List virtualized variant="bordered" height={300} itemHeight={54} items={virtualItems} renderItem={(item, index) => (
                <ListItem key={index} as="div" className="border-b border-zinc-100 dark:border-zinc-800" action={<span className="text-xs text-zinc-400">#{index + 1}</span>}>{item}</ListItem>
              )} />
            </div>
          </CodeBlock>
        </section>

        {/* Grid View */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Grid View</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tampilkan item dalam format grid kartu dengan <code>variant="grid"</code>.
          </p>
          <CodeBlock code={`<List variant="grid">
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <ListItem 
      key={item} 
      className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      avatar={\`https://i.pravatar.cc/150?u=\${item}\`}
      action={<Button size="xs" variant="secondary">Add</Button>}
    >
      <div className="font-medium text-zinc-900 dark:text-white">User {item}</div>
      <div className="text-xs text-zinc-500">Software Engineer</div>
    </ListItem>
  ))}
</List>`}>
            <div className="w-full">
              <List variant="grid">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ListItem key={item} className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" avatar={`https://i.pravatar.cc/150?u=${item}`} action={<Button size="xs" variant="secondary">Add</Button>}>
                    <div className="font-medium text-zinc-900 dark:text-white">User {item}</div>
                    <div className="text-xs text-zinc-500">Software Engineer</div>
                  </ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Selection */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Selection</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan <code>checkable</code>, <code>selected</code>, dan <code>noStrikethrough</code> untuk membuat daftar pilihan ganda.
          </p>
          <CodeBlock code={`const [selected, setSelected] = useState([1]);

<List variant="bordered">
  {[1, 2, 3].map((id) => (
    <ListItem 
      key={id} 
      checkable 
      noStrikethrough
      checked={selected.includes(id)} 
      selected={selected.includes(id)}
      onCheck={() => toggleSelection(id)}
    >
      Option {id}
    </ListItem>
  ))}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                {[1, 2, 3, 4].map((id) => (
                  <ListItem key={id} checkable noStrikethrough checked={selectedItems.includes(id)} selected={selectedItems.includes(id)} onCheck={() => toggleSelection(id)}>
                    Option {id}
                  </ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Sortable List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sortable List</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>dragHandle</code> untuk menambahkan handle khusus untuk drag and drop.
          </p>
          <CodeBlock code={`const [items, setItems] = useState(["Task 1", "Task 2", "Task 3"]);
// ... drag handlers ...

<List variant="bordered">
  {items.map((item, index) => (
    <ListItem 
      key={index} 
      draggable 
      onDragStart={(e) => handleDragStart(e, index)} 
      onDragEnter={(e) => handleDragEnter(e, index)}
      dragHandle={<Bars3Icon className="h-5 w-5" />}
    >
      {item}
    </ListItem>
  ))}
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                {sortableItems.map((item, index) => (
                  <ListItem 
                    key={index} 
                    draggable 
                    onDragStart={(e) => handleSortDragStart(e, index)} 
                    onDragEnter={(e) => handleSortDragEnter(e, index)} 
                    onDragOver={(e) => e.preventDefault()} 
                    dragHandle={<Bars3Icon className="h-5 w-5" />}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Collapsible List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Collapsible List</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>nestedList</code> untuk membuat item yang dapat diperluas (accordion).
          </p>
          <CodeBlock code={`<List variant="bordered">
  <ListItem 
    nestedList={
      <List variant="flush" className="pl-4">
        <ListItem>Sub-item 1</ListItem>
        <ListItem>Sub-item 2</ListItem>
      </List>
    }
  >
    Parent Item
  </ListItem>
</List>`}>
            <div className="w-full max-w-md">
              <List variant="bordered">
                <ListItem nestedList={<List variant="flush" className="pl-4"><ListItem>Sub-item 1</ListItem><ListItem>Sub-item 2</ListItem></List>}>
                  Parent Item 1
                </ListItem>
                <ListItem>Normal Item</ListItem>
                <ListItem nestedList={<List variant="flush" className="pl-4"><ListItem>Sub-item A</ListItem><ListItem>Sub-item B</ListItem></List>}>
                  Parent Item 2
                </ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Sticky Header */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sticky Header</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan komponen <code>ListHeader</code> untuk membuat header grup yang menempel di atas saat di-scroll.
          </p>
          <CodeBlock code={`<div className="h-64 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl relative">
  <List variant="flush">
    <ListHeader>Fruits</ListHeader>
    <ListItem>Apple</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Orange</ListItem>
    
    <ListHeader>Vegetables</ListHeader>
    <ListItem>Carrot</ListItem>
    <ListItem>Broccoli</ListItem>
    <ListItem>Spinach</ListItem>
    
    <ListHeader>Dairy</ListHeader>
    <ListItem>Milk</ListItem>
    <ListItem>Cheese</ListItem>
    <ListItem>Yogurt</ListItem>
  </List>
</div>`}>
            <div className="w-full max-w-md h-64 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 relative">
              <List variant="flush">
                <ListHeader>Fruits</ListHeader>
                <ListItem>Apple</ListItem>
                <ListItem>Banana</ListItem>
                <ListItem>Orange</ListItem>
                
                <ListHeader>Vegetables</ListHeader>
                <ListItem>Carrot</ListItem>
                <ListItem>Broccoli</ListItem>
                <ListItem>Spinach</ListItem>
                
                <ListHeader>Dairy</ListHeader>
                <ListItem>Milk</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Yogurt</ListItem>
              </List>
            </div>
          </CodeBlock>
        </section>

        {/* Empty State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Empty State</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tampilkan pesan saat daftar kosong dengan prop <code>emptyState</code>.
          </p>
          <CodeBlock code={`<List variant="bordered" emptyState="No items found.">
  {[]}
</List>

<List 
  variant="bordered" 
  emptyState={
    <div className="flex flex-col items-center gap-2">
      <ArchiveBoxIcon className="h-8 w-8 text-zinc-300" />
      <span>No data available</span>
    </div>
  }
>
  {[]}
</List>`}>
            <div className="w-full max-w-md space-y-4">
              <List variant="bordered" emptyState="No items found.">
                {[]}
              </List>
              <List variant="bordered" emptyState={<div className="flex flex-col items-center gap-2"><ArchiveBoxIcon className="h-8 w-8 text-zinc-300" /><span>No data available</span></div>}>
                {[]}
              </List>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}