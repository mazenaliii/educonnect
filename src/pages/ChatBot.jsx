import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';

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
    <div className={`flex flex-col max-w-96 p-3 gap-3 rounded-lg ${msg.type === 'outgoing' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'}`}>
      {msg.fileName && (
        <div className="text-sm bg-gray-200 p-2 rounded mb-2">
          <strong>File Attached:</strong> {msg.fileName}
        </div>
      )}
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
    { from: 'Alice', text: "Hey there! How can i help you today?", type: 'incoming', avatar: avatarUrls.bot },
  ]);
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const newMessage = { 
        from: 'Me', 
        text: inputText, 
        type: 'outgoing', 
        avatar: avatarUrls.me, 
        fileName: file ? file.name : null 
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');

      if (file) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = reader.result.split(',')[1];
          try {
            const response = await axios.post('https://c7d0-41-42-85-26.ngrok-free.app/query_pdf/', {
              input: inputText,
              pdf: base64
            });
            const botMessage = { from: 'Bot', text: response.data.response, type: 'incoming', avatar: avatarUrls.bot };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setFile(null);
          } catch (error) {
            console.error('Error uploading PDF to API:', error);
          }
        };
        reader.readAsDataURL(file);
      } else {
        try {
          const response = await axios.post('https://c7d0-41-42-85-26.ngrok-free.app/chat', { input: inputText }, {
            headers: {
              "ngrok-skip-browser-warning": "69420"
            }
          });
          const botMessage = { from: 'Bot', text: response.data.response, type: 'incoming', avatar: avatarUrls.bot };
          setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
          console.error('Error sending message to API:', error);
        }
      }
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return (
    <div className="flex flex-col h-auto overflow-hidden bg-transparent">
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
            <div className="relative ml-4">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
                <span>📄</span>
                <span>Upload</span>
              </label>
            </div>
            <button onClick={handleSendMessage} className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Chat;
