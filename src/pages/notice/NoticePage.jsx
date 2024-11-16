import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeCard from "../../components/notice/NoticeCard";
import "../../styles/section/notice/_notice.scss";

const NoticePage = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        // 알림 목록 가져오기
        const fetchNotifications = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.REACT_APP_API}/noti/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setNotifications(response.data);
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
            }
        };

        // 읽지 않은 알림 수 가져오기
        const fetchUnreadCount = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.REACT_APP_API}/noti/unread-count/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUnreadCount(response.data.unread_count);
            } catch (error) {
                console.error("Failed to fetch unread count:", error);
            }
        };

        fetchNotifications();
        fetchUnreadCount();
    }, []);

    return (
        <div className="notice_page_container container">
            <div className="notice_page_inner_container">
                <div className="notice_back_container">
                    <div className="notice_title">
                        <p>알림창</p>
                        <span>읽지 않은 알림: {unreadCount}개</span>
                    </div>
                    <div className="notice_scroll">
                        {notifications.map((noti) => (
                            <NoticeCard key={noti.id} notification={noti} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticePage;
