import React, { useEffect, useState } from 'react'
import LiveChatListItem from '../../components/live-chat/LiveChatListItem'
import LiveChatSearch from '../../components/live-chat/LiveChatSearch'
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader'
import axios from 'axios'

const LiveChatListPage = () => {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const response = await axios.get('/api/chatrooms/');
                setChatRooms(response.data.chat_rooms);
            } catch (error) {
                console.error('Failed to fetch chat rooms:', error);
            }
        };

        fetchChatRooms();
    }, []);

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
                    {chatRooms.map((chatRoom) => (
                        <LiveChatListItem
                            key={chatRoom.chat_room_id}
                            chatRoom={chatRoom}
                        />
                    ))}
                </div>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default LiveChatListPage