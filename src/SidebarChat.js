import React from 'react';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      // You may want to handle the creation of a new chat room here
      // For example, call an API to create a new chat room with the given roomName
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <img
        className='customAvatar'
        src='https://api.dicebear.com/7.x/pixel-art/svg'
        alt='Custom Avatar'
      />
      <div className='sidebarChat__info'>
        <h2>Ahemd</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
