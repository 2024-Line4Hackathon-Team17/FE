import React from 'react'
import LiveChatListItem from '../../components/live-chat/LiveChatListItem'
import LiveChatSearch from '../../components/live-chat/LiveChatSearch'
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader'

const LiveChatListPage = () => {
    return (
        <div className='live_chat_list_container container'>
            <div className="live_chat_list_inner_container">
                <EmpathyHeader />
                <div className="live_chat_title_container">
                    <div className="live_chat_title_inner_container">
                        <p>채팅방</p>
                    </div>
                </div>
                <LiveChatSearch />
                <div className="live_chat_list_scroll">
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                    <LiveChatListItem />
                </div>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default LiveChatListPage