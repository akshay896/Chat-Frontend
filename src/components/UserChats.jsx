import React from "react";
import "../App.css";
import senderimg from '../assets/senderimg.jpg'
import receiverimg from '../assets/receiverimg.jpg'

const UserChats = ({ chats }) => {
  const user = localStorage.getItem("user");

  function SenderChat({ message, username }) {
    return (
      <div>
        <div className="chatsender">
          
          {/* <p className="fw-bold">{username}</p> */}
          <p className="me-2">{message}</p>
          <img className="me-2" style={{width:'30px',height:'30px'}} src={senderimg} alt="" />
        </div>
        
      </div>
      
    );
  }

  function ReceiverChat({ message, username }) {
    return (
      <div className="chatreceiver">
        <img className="ms-2" style={{width:'30px',height:'30px'}} src={receiverimg} alt="" />
        <p className="ms-2">{message}</p>
      </div>
    );
  }
  return (
    <div className="chat-list">
      {chats.map((chat, index) => {
        if (chat.user === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.user}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.user}
              avatar={chat.avatar}
            />
          );
        }
      })}
    </div>
  );
};

export default UserChats;
