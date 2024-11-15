import React, { useEffect, useState } from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import Modal from '../../components/PotModal';
import "../../styles/PotSearch.scss";
import MyPagePotCard from '../../components/mypage/MyPagePotCard';
import axios from 'axios';
import default_profile from '../../assets/images/Logo/default_profile.png';

const MyPagePot = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalColor, setModalColor] = useState(null);

    const colors = ["#8794c0", "#1C2135", "#fff", "#D7CCAF"];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // const token = localStorage.getItem('token');
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk4MDU3LCJpYXQiOjE3MzE2OTQ0NTcsImp0aSI6IjlhMDFlMjIwNTUxNDQwODViYTdjZTk3MzQxZTZkZjA3IiwidXNlcl9pZCI6MX0.LPbTvCAvUwHyHxGil67WnDfvWoFFCzIafjIRY2tzaqw';

                const response = await axios.get(`${process.env.REACT_APP_API}/api/pating/myposts/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in the Authorization header
                    },
                });
                const categoriesData = await Promise.all(
                    response.data.map(async (category) => {
                        try {
                            const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/mypage/profile/`, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            return {
                                ...category,
                                userNickname: userResponse.data.nickname || "Unknown",
                                userProfileImage: userResponse.data.profile_picture || default_profile,
                            };
                        } catch (error) {
                            console.error("Failed to fetch user profile:", error);
                            return {
                                ...category,
                                userNickname: "Unknown",
                                userProfileImage: default_profile,
                            };
                        }
                    })
                );
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = (deletedId) => {
        setCategories(prevCategories => prevCategories.filter(category => category.id !== deletedId));
    };

    const openModal = (category, color) => {
        setSelectedCategory(category);
        setModalColor(color);
    };

    const closeModal = () => setSelectedCategory(null);

    return (
        <div className='mypage_pot_container container'>
            <div className="mypage_pot_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'내가 만든 팟팅 모아보기'} />
                <main className="mypage_pot_main_container">
                    <div className="mypage_pot_back"></div>
                    <div className="mypage_pot_scroll">
                        <div className="scroll_x">
                            {categories.map((category, index) => (
                                <MyPagePotCard category={category}
                                    colors={colors}
                                    openModal={openModal} index={index} onDelete={handleDelete} />
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

export default MyPagePot