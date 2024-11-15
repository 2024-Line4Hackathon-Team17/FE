import React from 'react'
import { Link } from 'react-router-dom'

const LiveChatListItem = ({ chatRoom, profilePicture, nickname }) => {
  return (
    <div className='live_chat_list_item_container'>
      <div className="live_chat_list_item_inner_container">
        <div className="live_chat_profile">
          <img src={profilePicture} alt="프로필" />
        </div>
        <Link to={`/livechat/${chatRoom.id}`}>
          <div className="live_chat_content btn">
            <div className="live_chat_nickname">
              <p>{nickname}</p>
            </div>
            <div className="live_chat_text">
              <p>{chatRoom.last_message
                  ? chatRoom.last_message.length > 15
                ? chatRoom.last_message.slice(0, 15) + '...'
                : chatRoom.last_message
                : '메세지가 없습니다.'}</p>
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