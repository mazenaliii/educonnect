import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const avatarUrls = {
  me: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato',
  bot: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato'
};

const Message = ({ msg }) => (
  <div className={`flex ${msg.type === 'outgoing' ? 'justify-end' : ''} mb-4`}>
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
);

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'Alice', text: "Hey there!", type: 'incoming', avatar: avatarUrls.bot },
    { from: 'Me', text: "Hello!", type: 'outgoing', avatar: avatarUrls.me },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { from: 'Me', text: inputText, type: 'outgoing', avatar: avatarUrls.me }]);
      setInputText('');
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="flex flex-col h-auto overflow-hidden bg-transparent">
      {isLogin ? (
        <div className="flex-1 flex flex-col bg-transparent">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <Message key={index} msg={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <footer className="bg-white border-t border-gray-300 p-4 fixed bottom-0 left-0 right-0">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleInputKeyPress}
              />
              <button onClick={handleSendMessage} className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
            </div>
          </footer>
        </div>
      ) : <span className='text-center'>Please login to access this chat.</span>}
    </div>
  );
}

export default Chat;
