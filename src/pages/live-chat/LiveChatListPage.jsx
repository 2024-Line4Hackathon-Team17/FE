import React, { useEffect, useState } from "react";
import LiveChatListItem from "../../components/live-chat/LiveChatListItem";
import LiveChatSearch from "../../components/live-chat/LiveChatSearch";
import EmpathyHeader from "../../components/empathy-community/EmpathyHeader";
import axios from "axios";
import default_profile from "../../assets/images/Logo/default_profile.png";

const LiveChatListPage = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.REACT_APP_API}/chatrooms/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log(response);
                const chatRoomsData = response.data || [];
                console.log(chatRoomsData);

                const chatRoomsWithProfile = await Promise.all(
                    chatRoomsData.map(async (chatRoom) => {
                        try {
                            const userProfileResponse = await axios.get(
                                `${process.env.REACT_APP_API}/user/register/${chatRoom.other_user.id}/profile/`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                }
                            );

                            console.log(userProfileResponse.data);

                            return {
                                ...chatRoom,
                                profile_picture:
                                    userProfileResponse.data.profile_picture ||
                                    default_profile,
                                nickname:
                                    userProfileResponse.data.nickname ||
                                    "Unknown",
                            };
                        } catch (error) {
                            console.error(
                                "Failed to fetch user profile:",
                                error
                            );
                            return {
                                ...chatRoom,
                                profile_picture: default_profile,
                                nickname: "Unknown",
                            };
                        }
                    })
                );

                setChatRooms(chatRoomsWithProfile);
            } catch (error) {
                console.error("Failed to fetch chat rooms:", error);
            }
        };

        fetchChatRooms();
    }, []);

    return (
        <div className="live_chat_list_container container">
            <div className="live_chat_list_inner_container">
                <EmpathyHeader />
                <div className="live_chat_title_container">
                    <div className="live_chat_title_inner_container">
                        <p>채팅방</p>
                    </div>
                </div>
                <LiveChatSearch />
                <div className="live_chat_list_scroll">
                    {chatRooms.length > 0 ? (
                        chatRooms.map((chatRoom) => (
                            <LiveChatListItem
                                key={chatRoom.id}
                                chatRoom={chatRoom}
                                profilePicture={chatRoom.profile_picture}
                                nickname={chatRoom.nickname}
                            />
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
                <div className="main_blank"></div>
            </div>
        </div>
    );
};

export default LiveChatListPage;
