import React, { useEffect, useState } from 'react'
import LiveChatListItem from '../../components/live-chat/LiveChatListItem'
import LiveChatSearch from '../../components/live-chat/LiveChatSearch'
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader'
import axios from 'axios'
import default_profile from '../../assets/images/Logo/default_profile.png'

const LiveChatListPage = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const response = await axios.get('/api/chatrooms/', {
                    params: { user_id: userId },
                });

                const chatRoomsData = response.data.chat_rooms;

                const chatRoomsWithProfile = await Promise.all(
                    chatRoomsData.map(async (chatRoom) => {
                        try {
                            const userProfileResponse = await axios.get(`/user/${chatRoom.other_user_id}/`);
                            const { profile_picture, nickname } = userProfileResponse.data;

                            return {
                                ...chatRoom,
                                profile_picture: profile_picture,
                                nickname: nickname,
                            };
                        } catch (error) {
                            console.error('Failed to fetch user profile:', error);
                            return { ...chatRoom, profile_picture: default_profile, nickname: "Unknown" };
                        }
                    })
                );

                setChatRooms(chatRoomsWithProfile);
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
                            profilePicture={chatRoom.profile_picture}
                            nickname={chatRoom.nickname}
                        />
                    ))}
                </div>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default LiveChatListPage