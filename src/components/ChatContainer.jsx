import React, { useEffect, useState } from "react";
import "../App.css";
import UserChats from "./UserChats";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import { RiLogoutCircleRLine } from "react-icons/ri";
import socketIOClient from "socket.io-client";

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const socketio = socketIOClient("https://chat-server-1-pfss.onrender.com");

  const [chats, setChats] = useState([]);

 

  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });
    return () => {
      socketio.off("chat"); // Remove the event listener
  };
  },[socketio]);
  const sendToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  const addMessage = (chat) => {
    const newChat = { ...chat, user: localStorage.getItem("user") 

    };

    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser("");
  };
  return (
    <>
      <div>
        <div className="chat-container">
          {user ? (
            <div className="chat-box">
              <div className="chat-top ">
                <div className="chat-head-content">
                  <div className="user-online">
                    
                    <div className="online "></div>
                    
                  </div>

                  <div className="d-flex">
                    <h5 style={{fontFamily:'monospace'}} className="me-4 ">{user}</h5>
                    <RiLogoutCircleRLine className="logout-icon" onClick={logout} />
                  </div>
                </div>
              </div>
              <UserChats chats={chats} />
              <InputText addMessage={addMessage} />
            </div>
          ) : (
            <UserLogin setUser={setUser} />
          )}
        </div>
      </div>
    </>
  );
};

export default ChatContainer;