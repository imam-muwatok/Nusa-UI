import React, { useState, useRef } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Avatar from "../../components/ui/Avatar";
import { 
  PaperAirplaneIcon, PhoneIcon, VideoCameraIcon, 
  EllipsisVerticalIcon, FaceSmileIcon, PaperClipIcon, TrashIcon,
  MagnifyingGlassIcon, CheckIcon, PencilSquareIcon, XMarkIcon, ArrowUturnLeftIcon,
  ArchiveBoxIcon, BookmarkIcon
} from "@heroicons/react/24/outline";

export default function ChatingPage() {
  const [contacts, setContacts] = useState([
    { 
      id: 1, 
      name: "Bonnie Green", 
      message: "Can we schedule a meeting?", 
      time: "10:30 AM", 
      unread: 2, 
      status: "online", 
      archived: false,
      pinned: false,
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      chatHistory: [
        { id: 1, sender: "them", text: "Hi there! Are you available for a quick call?", time: "10:00 AM" },
        { id: 2, sender: "me", text: "Yes, I am. Give me 5 minutes.", time: "10:02 AM", status: "read" },
        { id: 3, sender: "them", text: "Great! I'll send the invite.", time: "10:03 AM" },
      ]
    },
    { 
      id: 2, 
      name: "Jese Leos", 
      message: "Hey! I attached the file.", 
      time: "Yesterday", 
      unread: 0, 
      status: "offline", 
      archived: false,
      pinned: false,
      lastSeen: "2 hours ago",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      chatHistory: [
        { id: 1, sender: "me", text: "Hey Jese, did you finish the report?", time: "Yesterday" },
        { id: 2, sender: "them", text: "Hey! I attached the file.", time: "Yesterday" },
      ]
    },
    { 
      id: 3, 
      name: "Michael Gough", 
      message: "Thanks for your help!", 
      time: "Yesterday", 
      unread: 0, 
      status: "online", 
      archived: false,
      pinned: false,
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      chatHistory: [
        { id: 1, sender: "them", text: "Can you help me with this bug?", time: "Yesterday" },
        { id: 2, sender: "me", text: "Sure, what's the issue?", time: "Yesterday" },
        { id: 3, sender: "them", text: "Thanks for your help!", time: "Yesterday" },
      ]
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [viewArchived, setViewArchived] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [isTyping, setIsTyping] = useState(null);
  const fileInputRef = useRef(null);

  const emojis = ["😀", "😂", "😍", "🥰", "😎", "😭", "😡", "👍", "👎", "🙏", "🔥", "✨", "🎉", "❤️", "🤔", "🙄", "😴", "🤢", "🤧", "😷"];

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    if (editingMessageId) {
      const updatedHistory = selectedContact.chatHistory.map(msg => 
        msg.id === editingMessageId ? { ...msg, text: messageInput } : msg
      );
      const updatedContact = { ...selectedContact, chatHistory: updatedHistory };
      setSelectedContact(updatedContact);
      setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
      setEditingMessageId(null);
      setMessageInput("");
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "read",
      replyTo: replyingTo
    };

    const updatedContact = { ...selectedContact, chatHistory: [...selectedContact.chatHistory, newMessage] };
    setSelectedContact(updatedContact);
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
    setReplyingTo(null);
    setMessageInput("");

    // Simulate reply
    const chatPartnerId = selectedContact.id;
    setTimeout(() => {
      setIsTyping(chatPartnerId);
      setTimeout(() => {
        setIsTyping(null);
        const replyMessage = {
          id: Date.now() + 1,
          sender: "them",
          text: "This is a simulated reply.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setContacts(prevContacts => prevContacts.map(c => {
            if (c.id === chatPartnerId) {
                return { ...c, chatHistory: [...c.chatHistory, replyMessage] };
            }
            return c;
        }));

        setSelectedContact(prev => {
            if (prev.id === chatPartnerId) {
                return { ...prev, chatHistory: [...prev.chatHistory, replyMessage] };
            }
            return prev;
        });
      }, 2000);
    }, 1000);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith('image/');
    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: isImage ? "Sent an image" : `Sent a file: ${file.name}`,
      file: {
        name: file.name,
        url: URL.createObjectURL(file),
        type: isImage ? 'image' : 'file'
      },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "read",
      replyTo: replyingTo
    };

    const updatedContact = { ...selectedContact, chatHistory: [...selectedContact.chatHistory, newMessage] };
    setSelectedContact(updatedContact);
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
    setReplyingTo(null);
    
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleEditMessage = (msg) => {
    setEditingMessageId(msg.id);
    setMessageInput(msg.text);
    setReplyingTo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setMessageInput("");
    setReplyingTo(null);
  };

  const handleReplyMessage = (msg) => {
    setReplyingTo(msg);
    setEditingMessageId(null);
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
  };

  const handleDeleteMessage = (messageId) => {
    const updatedChatHistory = selectedContact.chatHistory.filter(msg => msg.id !== messageId);
    const updatedContact = { ...selectedContact, chatHistory: updatedChatHistory };

    setSelectedContact(updatedContact);
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
  };

  const handleSelectContact = (contact) => {
    // Mark as read
    const updatedContacts = contacts.map(c => 
      c.id === contact.id ? { ...c, unread: 0 } : c
    );
    setContacts(updatedContacts);
    
    // Update selected contact state
    setSelectedContact({ ...contact, unread: 0 });

    // Reset input states
    handleCancelEdit();
    handleCancelReply();
  };

  const handleMarkAsUnread = (e, contactId) => {
    e.stopPropagation(); // Prevent selecting the chat
    const updatedContacts = contacts.map(c => 
      c.id === contactId ? { ...c, unread: 1 } : c
    );
    setContacts(updatedContacts);
  };

  const handleArchiveContact = (e, contactId) => {
    e.stopPropagation();
    const updatedContacts = contacts.map(c => 
      c.id === contactId ? { ...c, archived: !c.archived } : c
    );
    setContacts(updatedContacts);
  };

  const handlePinContact = (e, contactId) => {
    e.stopPropagation();
    const updatedContacts = contacts.map(c => 
      c.id === contactId ? { ...c, pinned: !c.pinned } : c
    );
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts
    .filter((contact) => {
      const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchQuery.toLowerCase());
      const isArchived = contact.archived || false;
      return matchesSearch && (viewArchived ? isArchived : !isArchived);
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return 0; // Keep original order for non-pinned items
    });

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Chat</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen antarmuka obrolan untuk aplikasi pesan instan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Chat List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Chat List</h2>
          <CodeBlock code={`<div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
  <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex gap-2">
    <div className="relative flex-1">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
      <input type="text" placeholder="Search messages..." className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:text-white" />
    </div>
    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"><ArchiveBoxIcon className="w-5 h-5" /></button>
  </div>
  <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
    {contacts.map((contact) => (
      <div key={contact.id} className="flex items-center gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
        <div className="relative">
          <Avatar src={contact.avatar} status={contact.status} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-semibold text-zinc-900 dark:text-white truncate">{contact.name}</h3>
            <span className="text-xs text-zinc-500">{contact.time}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{contact.message}</p>
            {contact.unread > 0 && (
              <span className="flex items-center justify-center w-5 h-5 bg-cyan-600 text-white text-xs font-bold rounded-full">{contact.unread}</span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>`}>
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex gap-2">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search messages..." 
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:text-white" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                    onClick={() => setViewArchived(!viewArchived)}
                    className={`p-2 rounded-lg transition-colors ${viewArchived ? 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500'}`}
                    title={viewArchived ? "Show Active Chats" : "Show Archived Chats"}
                >
                    <ArchiveBoxIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {filteredContacts.length === 0 ? (
                  <div className="p-4 text-center text-sm text-zinc-500 dark:text-zinc-400">No contacts found</div>
                ) : filteredContacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    onClick={() => handleSelectContact(contact)}
                    className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${selectedContact.id === contact.id ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
                  >
                    <div className="relative">
                      <Avatar src={contact.avatar} status={contact.status} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-semibold text-zinc-900 dark:text-white truncate">{contact.name}</h3>
                        <span className="text-xs text-zinc-500">{contact.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className={`text-sm truncate ${contact.unread > 0 ? 'font-medium text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}>{contact.message}</p>
                        <div className="flex items-center gap-0.5 ml-2">
                            <button 
                                onClick={(e) => handlePinContact(e, contact.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-opacity"
                                title={contact.pinned ? "Unpin" : "Pin"}
                            >
                                {contact.pinned ? <BookmarkIcon className="w-4 h-4 text-yellow-500" /> : <BookmarkIcon className="w-4 h-4" />}
                            </button>
                            <button 
                                onClick={(e) => handleArchiveContact(e, contact.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-opacity"
                                title={viewArchived ? "Unarchive" : "Archive"}
                            >
                                <ArchiveBoxIcon className="w-4 h-4" />
                            </button>
                            <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                              {contact.unread > 0 ? (
                                <span className="flex items-center justify-center w-full h-full bg-cyan-600 text-white text-xs font-bold rounded-full">{contact.unread}</span>
                              ) : (
                                <button 
                                  onClick={(e) => handleMarkAsUnread(e, contact.id)}
                                  className="opacity-0 group-hover:opacity-100"
                                  title="Mark as unread"
                                >
                                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                                </button>
                              )}
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Chat Window */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Chat Window</h2>
          <CodeBlock code={`<div className="flex flex-col h-[600px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
  {/* Header */}
  <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
     <div className="flex items-center gap-3">
       <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" status="online" />
       <div>
         <h3 className="font-bold text-zinc-900 dark:text-white">Bonnie Green</h3>
         <p className="text-xs text-green-500">Online</p>
       </div>
     </div>
     <div className="flex items-center gap-1 text-zinc-500">
       <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><PhoneIcon className="w-5 h-5" /></button>
       <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><VideoCameraIcon className="w-5 h-5" /></button>
       <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><EllipsisVerticalIcon className="w-5 h-5" /></button>
     </div>
  </div>

  {/* Messages */}
  <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-zinc-50 dark:bg-zinc-950/50">
    {/* Date Divider */}
    <div className="flex justify-center">
        <span className="text-xs font-medium text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1 rounded-full">Today</span>
    </div>

    {/* Message Left */}
    <div className="flex gap-3">
       <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" size="sm" className="mt-1" />
       <div className="max-w-[80%]">
          <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700">
             <p className="text-sm text-zinc-800 dark:text-zinc-200">Hi there! Are you available for a quick call?</p>
          </div>
          <span className="text-xs text-zinc-400 mt-1 ml-1">10:00 AM</span>
       </div>
    </div>

    {/* Message Right */}
    <div className="flex gap-3 flex-row-reverse">
       <div className="max-w-[80%]">
          <div className="bg-cyan-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-white">
             <p className="text-sm">Yes, I am. Give me 5 minutes.</p>
          </div>
          <div className="flex items-center justify-end gap-1 mt-1 mr-1">
            <span className="text-xs text-zinc-400">10:02 AM</span>
            <CheckIcon className="w-3 h-3 text-cyan-600" />
          </div>
       </div>
    </div>
    
    {/* Message Left */}
    <div className="flex gap-3">
       <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" size="sm" className="mt-1" />
       <div className="max-w-[80%]">
          <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700">
             <p className="text-sm text-zinc-800 dark:text-zinc-200">Great! I'll send the invite.</p>
          </div>
          <span className="text-xs text-zinc-400 mt-1 ml-1">10:03 AM</span>
       </div>
    </div>
  </div>

  {/* Input */}
  <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
     <div className="flex items-center gap-2">
        <button className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><PaperClipIcon className="w-6 h-6" /></button>
        <input type="text" placeholder="Type a message..." className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:text-white" />
        <button className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><FaceSmileIcon className="w-6 h-6" /></button>
        <button className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors shadow-md shadow-cyan-600/20"><PaperAirplaneIcon className="w-5 h-5" /></button>
     </div>
  </div>
</div>`}>
            <div className="w-full">
              <div className="flex flex-col h-[600px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                   <div className="flex items-center gap-3">
                     <Avatar src={selectedContact.avatar} status={selectedContact.status} />
                     <div>
                       <h3 className="font-bold text-zinc-900 dark:text-white">{selectedContact.name}</h3>
                       <p className={`text-xs ${selectedContact.status === 'online' ? 'text-green-500' : 'text-zinc-500'}`}>
                         {selectedContact.status === 'online' ? 'Online' : `Last seen ${selectedContact.lastSeen || 'recently'}`}
                       </p>
                     </div>
                   </div>
                   <div className="flex items-center gap-1 text-zinc-500">
                     <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><PhoneIcon className="w-5 h-5" /></button>
                     <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><VideoCameraIcon className="w-5 h-5" /></button>
                     <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"><EllipsisVerticalIcon className="w-5 h-5" /></button>
                   </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-zinc-50 dark:bg-zinc-950/50">
                  {/* Date Divider */}
                  <div className="flex justify-center">
                      <span className="text-xs font-medium text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1 rounded-full">Today</span>
                  </div>

                  {selectedContact.chatHistory.map((msg) => (
                    <div key={msg.id} className={`group flex gap-3 ${msg.sender === 'me' ? 'flex-row-reverse items-center' : 'items-start'}`}>
                      {msg.sender === 'them' && <Avatar src={selectedContact.avatar} size="sm" className="mt-1" />}
                      <div className="max-w-[80%]">
                        <div className={`${msg.sender === 'me' ? 'bg-cyan-600 text-white rounded-tr-none' : 'bg-white dark:bg-zinc-800 rounded-tl-none border border-zinc-100 dark:border-zinc-700'} p-3 rounded-2xl shadow-sm`}>
                          {msg.replyTo && (
                            <div className={`mb-2 p-2 rounded text-xs border-l-2 ${msg.sender === 'me' ? 'bg-cyan-700/50 border-cyan-300 text-cyan-100' : 'bg-zinc-100 dark:bg-zinc-900/50 border-zinc-300 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400'}`}>
                                <span className="font-bold block mb-0.5">{msg.replyTo.sender === 'me' ? 'You' : selectedContact.name}</span>
                                <span className="line-clamp-1">{msg.replyTo.text || (msg.replyTo.file ? "Attachment" : "Message")}</span>
                            </div>
                          )}
                          {msg.file ? (
                            msg.file.type === 'image' ? (
                              <img src={msg.file.url} alt="Attachment" className="rounded-lg max-w-full h-auto max-h-48 object-cover" />
                            ) : (
                              <div className="flex items-center gap-2">
                                <PaperClipIcon className="w-5 h-5" />
                                <span className="text-sm underline truncate max-w-[150px]">{msg.file.name}</span>
                              </div>
                            )
                          ) : (
                            <p className={`text-sm ${msg.sender === 'me' ? '' : 'text-zinc-800 dark:text-zinc-200'}`}>{msg.text}</p>
                          )}
                        </div>
                        <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'me' ? 'justify-end mr-1' : 'ml-1'}`}>
                          <span className="text-xs text-zinc-400">{msg.time}</span>
                          {msg.sender === 'me' && msg.status === 'read' && <CheckIcon className="w-3 h-3 text-cyan-600" />}
                        </div>
                      </div>
                      <div className={`flex gap-1 opacity-0 transition-opacity group-hover:opacity-100 ${msg.sender === 'them' ? 'self-center' : ''}`}>
                           <button onClick={() => handleReplyMessage(msg)} className="shrink-0 p-1 text-zinc-400 hover:text-cyan-500" title="Reply">
                             <ArrowUturnLeftIcon className="h-4 w-4" />
                           </button>
                           {msg.sender === 'me' && !msg.file && (
                             <button onClick={() => handleEditMessage(msg)} className="shrink-0 p-1 text-zinc-400 hover:text-cyan-500" title="Edit">
                               <PencilSquareIcon className="h-4 w-4" />
                             </button>
                           )}
                           {msg.sender === 'me' && <button onClick={() => handleDeleteMessage(msg.id)} className="shrink-0 p-1 text-zinc-400 hover:text-red-500" title="Delete">
                             <TrashIcon className="h-4 w-4" />
                           </button>}
                      </div>
                    </div>
                  ))}

                  {isTyping === selectedContact.id && (
                    <div className="flex gap-3">
                       <Avatar src={selectedContact.avatar} size="sm" className="mt-1" />
                       <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700 flex items-center gap-1">
                          <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                       </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 relative">
                   {showEmojiPicker && (
                      <div className="absolute bottom-20 right-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg p-2 grid grid-cols-5 gap-1 w-64 z-10">
                          {emojis.map(emoji => (
                              <button key={emoji} onClick={() => setMessageInput(prev => prev + emoji)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-xl transition-colors">
                                  {emoji}
                              </button>
                          ))}
                      </div>
                   )}
                   {replyingTo && (
                       <div className="absolute -top-12 left-4 right-4 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg flex justify-between items-center text-xs text-zinc-500 border-l-4 border-cyan-500 shadow-sm z-10">
                           <div className="flex flex-col max-w-[90%]">
                               <span className="font-bold text-cyan-600">Replying to {replyingTo.sender === 'me' ? 'Yourself' : selectedContact.name}</span>
                               <span className="truncate">{replyingTo.text || (replyingTo.file ? "Attachment" : "Message")}</span>
                           </div>
                           <button onClick={handleCancelReply}><XMarkIcon className="w-4 h-4" /></button>
                       </div>
                   )}
                   {editingMessageId && (
                       <div className="absolute -top-10 left-4 right-4 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg flex justify-between items-center text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-700">
                           <span>Editing message...</span>
                           <button onClick={handleCancelEdit}><XMarkIcon className="w-4 h-4" /></button>
                       </div>
                   )}
                   <div className="flex items-center gap-2">
                      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileSelect} />
                      <button onClick={() => fileInputRef.current?.click()} className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><PaperClipIcon className="w-6 h-6" /></button>
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-cyan-500 outline-none dark:text-white" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className={`p-2 transition-colors ${showEmojiPicker ? 'text-cyan-600' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}><FaceSmileIcon className="w-6 h-6" /></button>
                      <button onClick={handleSendMessage} className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors shadow-md shadow-cyan-600/20"><PaperAirplaneIcon className="w-5 h-5" /></button>
                   </div>
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}