import React, { useState } from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import default_profile from '../../assets/images/Logo/default_profile.png';
import { BsCamera } from "react-icons/bs";

const MyPageInfo = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='mypage_info_container container'>
            <div className="mypage_info_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'정보 수정'} />
                <main className="mypage_info_container">
                    <div className="mypage_info_profile">
                        {profileImage ? (
                            <img src={profileImage} alt="프로필 미리보기" className="profile-image" />
                        ) : (
                            <img src={default_profile} alt="기본 프로필" className="profile-image" />
                        )}
                        <label htmlFor="profileImageInput" className="upload_icon">
                            <BsCamera className='upload_icon_camera' />
                        </label>
                        <input
                            type="file"
                            id="profileImageInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="mypage_info_nickname_pw">
                        <div className="mypage_info_nickname"></div>
                        <div className="mypage_info_pw"></div>
                        <div className="mypage_info_check_pw"></div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MyPageInfo