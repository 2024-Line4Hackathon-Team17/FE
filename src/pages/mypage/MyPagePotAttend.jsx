import React, { useEffect, useState } from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import Modal from '../../components/PotModal';
import "../../styles/PotSearch.scss";
import MyPagePotCard from '../../components/mypage/MyPagePotCard';
import axios from 'axios';
import default_profile from "../../assets/images/Logo/default_profile.png";

const MyPagePotAttend = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalColor, setModalColor] = useState(null);

    const colors = ["#8794c0", "#1C2135", "#fff", "#D7CCAF"];

    useEffect(() => {
        const fetchParticipationData = async () => {
            // const token = localStorage.getItem('token');
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk4MDU3LCJpYXQiOjE3MzE2OTQ0NTcsImp0aSI6IjlhMDFlMjIwNTUxNDQwODViYTdjZTk3MzQxZTZkZjA3IiwidXNlcl9pZCI6MX0.LPbTvCAvUwHyHxGil67WnDfvWoFFCzIafjIRY2tzaqw';
            if (!token) {
                console.error("Token not found");
                return;
            }

            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/pating/myposts/participated/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                    },
                });

                const data = response.data;

                // item.created_by가 작성자 user_id인지?
                const enrichedData = await Promise.all(data.map(async (item) => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/user/${item.created_by}/`, {
                            headers: {
                                Authorization: `Bearer ${token}`, // Include token in the Authorization header
                            },
                        });

                        const userProfileImage = userResponse.data.profile_picture || default_profile;
                        const userNickname = userResponse.data.nickname || "익명";

                        return { ...item, userProfileImage, userNickname };
                    } catch (error) {
                        console.error("Failed to fetch user profile:", error);
                        return { ...item, userProfileImage: default_profile, userNickname: "익명" };
                    }
                }));

                setCategories(enrichedData);
            } catch (error) {
                console.error("Failed to fetch participation data:", error);
            }
        };

        fetchParticipationData();
    }, []);

    const openModal = (category, color) => {
        setSelectedCategory(category);
        setModalColor(color);
    };

    const closeModal = () => setSelectedCategory(null);

    return (
        <div className='mypage_pot_container container'>
            <div className="mypage_pot_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'팟팅 참여 내역'} />
                <main className="mypage_pot_main_container">
                    <div className="mypage_pot_back"></div>
                    <div className="mypage_pot_scroll">
                        <div className="scroll_x">
                            {categories.map((category, index) => (
                                <MyPagePotCard key={category.id} category={category}
                                    colors={colors}
                                    openModal={openModal} index={index} />
                            ))}
                        </div>
                        {selectedCategory && (
                            <Modal
                                backgroundColor={modalColor}
                                category={selectedCategory}
                                onClose={closeModal}
                            />
                        )}
                    </div>
                </main>
                <div className='main_blank'></div>
            </div>
        </div>
    )
}

export default MyPagePotAttend