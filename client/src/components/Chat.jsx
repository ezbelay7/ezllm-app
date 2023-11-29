import React, { useState } from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { 
  MainContainer, 
  ChatContainer, 
  MessageList, 
  Message, 
  MessageInput 
} from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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"; 

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (message) => {
    // Update chat history with user's input
    setChatHistory([...chatHistory, { sender: 'You', message: message }]);
    
    // Send the message to the backend and await the response
    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // Update chat history with backend's response
      setChatHistory(history => [...history, { sender: 'ChatGPT', message: result.message }]);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {chatHistory.map((chat, index) => (
              <Message 
                key={index}
                model={{
                  message: chat.message,
                  sentTime: "just now",
                  sender: chat.sender,
                  direction: chat.sender === "You" ? "outgoing" : "incoming"
                }} 
              />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSubmit} />
        </ChatContainer>
      </MainContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <button onClick={clearChat} style={{ fontSize: '12px' }}>Clear Chat</button>
        </div>
    </div>
  );
};

export default Chat;
