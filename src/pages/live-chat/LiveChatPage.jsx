import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LiveChatMessage from '../../components/live-chat/LiveChatMessage';
import { MdArrowBackIosNew } from "react-icons/md";
import { PiPaperclipLight } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { useParams, Link } from 'react-router-dom';
import default_profile from '../../assets/images/Logo/default_profile.png';

const LiveChatPage = () => {
  const { chat_room_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [chatDate, setChatDate] = useState(null);
  const [otherUser, setOtherUser] = useState({ nickname: '', profile_picture: '' });
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chatrooms/${chat_room_id}/messages/`, {
          params: { chat_room_id: chat_room_id },
        });
        setMessages(response.data);

        if (response.data.length > 0) {
          const firstMessageDate = new Date(response.data[0].created_at);
          setChatDate(firstMessageDate.toLocaleDateString());
        }

        const chatRoomResponse = await axios.get(`/api/chatrooms/${chat_room_id}/`);
        const otherUserId = chatRoomResponse.data.other_user_id;

        const userProfileResponse = await axios.get(`/user/${otherUserId}/`);
        const { nickname, profile_picture } = userProfileResponse.data;
        setOtherUser({
          nickname,
          profile_picture: profile_picture || default_profile,
        });
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [chat_room_id]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const response = await axios.post(`/api/chatrooms/${chat_room_id}/messages/send/`, {
        chat_room_id: chat_room_id,
        message: newMessage,
      });
      setMessages((prevMessages) => [...prevMessages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className='live_chat_container container'>
      <div className="live_chat_inner_container">
        <div className="live_chat_header">
          <Link to="/livechat">
            <div className="live_chat_back btn">
              <MdArrowBackIosNew className='live_chat_back_btn' />
            </div>
          </Link>
          <div className="live_chat_other_profile">
            <div className="live_chat_other_profile_img">
              <img src={otherUser.profile_picture} alt="프로필 사진" />
            </div>
            <div className="live_chat_other_nickname">
              <span>{otherUser.nickname}</span>
            </div>
          </div>
          <div className="live_chat_blank_box"></div>
        </div>
        <div className="live_chat_scroll">
          <div className="live_chat_date_area">
            <div className="live_chat_date">
              <span>{chatDate}</span>
            </div>
          </div>
          <div className="live_chat_area">
            {messages.map((message) => (
              <LiveChatMessage key={message.id} text={message.text} sender={message.sender === 1 ? 'me' : 'other'} />
            ))}
            <div className='main_blank'></div>
          </div>
        </div>
        <div className="live_chat_bottom">
          <div className="live_chat_input">
            <input type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <PiPaperclipLight className='live_chat_file btn' />
          </div>
          <div className="live_chat_send btn" onClick={sendMessage}>
            <VscSend className='live_chat_send_btn' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChatPage