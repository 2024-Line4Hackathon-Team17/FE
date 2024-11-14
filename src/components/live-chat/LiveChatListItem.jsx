import React from 'react'
import { Link } from 'react-router-dom'

const LiveChatListItem = ({ chatRoom }) => {
  return (
    <div className='live_chat_list_item_container'>
      <div className="live_chat_list_item_inner_container">
        <div className="live_chat_profile">
          <img src="https://i.namu.wiki/i/T3_Yf14kjCS9rcSAsQaD4EQIM1RF0x4VBJqP0tLlBzk4m3uTs3wGospUzcwB6LNuI4sz1o9XrrwPld13Hp7cMLuXBd1Kjvxca2xWkDh86XW9PH6n7cbxaOysPM6wR2tfwCQgikMD21x6pHTJLKAauA.webp" alt="프로필" />
        </div>
        <Link to={`/livechat/${chatRoom.chat_room_id}`}>
          <div className="live_chat_content btn">
            <div className="live_chat_nickname">
              <p>{chatRoom.other_user_name}</p>
            </div>
            <div className="live_chat_text">
              <p>{chatRoom.last_message.length > 15
                ? chatRoom.last_message.slice(0, 15) + '...'
                : chatRoom.last_message}</p>
            </div>
          </div>
        </Link>
        {chatRoom.unread_count > 0 ? (
          <div className="unread_count">
            <p>{chatRoom.unread_count}</p>
          </div>
        ) : (
          <div className="live_chat_unread_box"></div>
        )}
      </div>
    </div>
  )
}

export default LiveChatListItem