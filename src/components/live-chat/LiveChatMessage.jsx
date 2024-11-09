import React from 'react'

const LiveChatMessage = ({ text, sender }) => {
  return (
    <div className='live_chat_message_container'>
        <div className={`live_chat_message_inner_container ${sender === 'me' ? 'my_message_container' : 'other_message_container'}`}>
            <div className={`live_chat_message_text ${sender === 'me' ? 'my_message' : 'other_message'}`}>
                <p>{ text }</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChatMessage