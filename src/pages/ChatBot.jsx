'use client'
import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'Alice', text: "Hey Bob, how's it going?", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Me', text: "Hi Alice! I'm good, just finished a great book. How about you?", type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Alice', text: "That book sounds interesting! What's it about?", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Me', text: "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!", type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Alice', text: "I'm intrigued! Maybe I'll borrow it from you when you're done?", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Me', text: "Of course! I'll drop it off at your place tomorrow.", type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Alice', text: "Thanks, you're the best!", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Me', text: "Anytime! Let me know how you like it. 😊", type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Alice', text: "So, pizza next week, right?", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Me', text: "Absolutely! Can't wait for our pizza date. 🍕", type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { from: 'Alice', text: "Hoorayy!!", type: 'incoming', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { from: 'Me', text: inputText, type: 'outgoing', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' }]);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <header className="bg-white p-4 text-gray-700 border-b border-gray-300">
          <h1 className="text-2xl font-semibold">Chat with Alice</h1>
        </header>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'outgoing' ? 'justify-end' : ''} mb-4`}>
              {msg.type === 'incoming' && (
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img src={msg.avatar} alt={`${msg.from} Avatar`} className="w-8 h-8 rounded-full" />
                </div>
              )}
              <div className={`flex max-w-96 p-3 gap-3 rounded-lg ${msg.type === 'outgoing' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'}`}>
                <p>{msg.text}</p>
              </div>
              {msg.type === 'outgoing' && (
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img src={msg.avatar} alt="My Avatar" className="w-8 h-8 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-300 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleSendMessage} className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Chat;
