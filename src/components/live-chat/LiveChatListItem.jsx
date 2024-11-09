import React from 'react'
import { Link } from 'react-router-dom'

const LiveChatListItem = () => {
  return (
    <div className='live_chat_list_item_container'>
      <div className="live_chat_list_item_inner_container">
        <div className="live_chat_profile">
          <img src="https://i.namu.wiki/i/T3_Yf14kjCS9rcSAsQaD4EQIM1RF0x4VBJqP0tLlBzk4m3uTs3wGospUzcwB6LNuI4sz1o9XrrwPld13Hp7cMLuXBd1Kjvxca2xWkDh86XW9PH6n7cbxaOysPM6wR2tfwCQgikMD21x6pHTJLKAauA.webp" alt="프로필" />
        </div>
        <Link to="/livechat/id">
          <div className="live_chat_content btn">
            <div className="live_chat_nickname">
              <p>미야옹</p>
            </div>
            <div className="live_chat_text">
              <p>안녕하세요 성북천 러닝...</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LiveChatListItem