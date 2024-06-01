import React, { useState } from 'react';
import '../App.css';
import { IoIosSend } from 'react-icons/io';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    addMessage({ message });
    setMessage('');
  };

  return (
    <>
      <div className='inputtext-container'>
        <input
          value={message}
          onChange={handleInputChange}
          className='inputspace'
          id='message'
        />
        <button onClick={sendMessage} className='send-btn '>
          <IoIosSend className='send-icon'/>
        </button>
      </div>
    </>
  );
};

export default InputText;
