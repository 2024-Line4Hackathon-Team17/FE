import React from 'react';
import { LuSearch } from "react-icons/lu";

const LiveChatSearch = () => {
  return (
    <div className='live_chat_list_search_container'>
        <div className="live_chat_list_seach_inner_container">
            <div className="live_chat_search_input">
                <input type="text" placeholder='찾으시는 내용을 검색해보세요.' />
            </div>
            <div className="live_chat_search_icon_area btn">
                <LuSearch className='live_chat_search_icon' />
            </div>
        </div>
    </div>
  )
}

export default LiveChatSearch