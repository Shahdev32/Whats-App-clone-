import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css';

const Chat = () => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed:", input);
    // You can implement further logic to send the message

    setInput('');
  };

  

  return (
    <div className='chat'>
      <div className='chat__header'>
        <img
          className='customAvatar'
          src='https://api.dicebear.com/7.x/pixel-art/svg'
          alt='Custom Avatar'
        />

        <div className='chat__headerInfo'>
          <h3>Ahmed</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true ? 'chat__receiver' : ''}`}>
          <span className='chat__name'>Ahmed</span>
          Hey Guys
          <span className='chat__timestamp'>3:52pm</span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
