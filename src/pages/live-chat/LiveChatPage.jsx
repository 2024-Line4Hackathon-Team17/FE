import React, { useState } from 'react';
import LiveChatMessage from '../../components/live-chat/LiveChatMessage';
import { MdArrowBackIosNew } from "react-icons/md";
import { PiPaperclipLight } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const LiveChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '안녕하세요 성북천 러닝크루 모집보고 연락드려요 :)', sender: 'other' },
    { id: 2, text: '안녕하세요 어떻게 궁금하실까요? 편하게 질문주세요!', sender: 'me' },
    { id: 3, text: '혹시 일주일에 몇 회씩 진행할 예정이신가요? 모든 요일에 다 참여하지 않아도 될까요?', sender: 'other' },
    { id: 4, text: '네 편하신날만 오셔도 돼요!', sender: 'me' },
    { id: 5, text: '넵 감사합니다!', sender: 'other' },
  ]);

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
              <img src="https://i.namu.wiki/i/T3_Yf14kjCS9rcSAsQaD4EQIM1RF0x4VBJqP0tLlBzk4m3uTs3wGospUzcwB6LNuI4sz1o9XrrwPld13Hp7cMLuXBd1Kjvxca2xWkDh86XW9PH6n7cbxaOysPM6wR2tfwCQgikMD21x6pHTJLKAauA.webp" alt="프로필 사진" />
            </div>
            <div className="live_chat_other_nickname">
              <span>미야옹</span>
            </div>
          </div>
          <div className="live_chat_blank_box"></div>
        </div>
        <div className="live_chat_scroll">
          <div className="live_chat_date_area">
            <div className="live_chat_date">
              <span>Today</span>
            </div>
          </div>
          <div className="live_chat_area">
            {messages.map((message) => (
              <LiveChatMessage key={message.id} text={message.text} sender={message.sender} />
            ))}
            <div className='main_blank'></div>
          </div>
        </div>
        <div className="live_chat_bottom">
          <div className="live_chat_input">
            <input type="text" />
            <PiPaperclipLight className='live_chat_file btn' />
          </div>
          <div className="live_chat_send btn">
            <VscSend className='live_chat_send_btn' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChatPage