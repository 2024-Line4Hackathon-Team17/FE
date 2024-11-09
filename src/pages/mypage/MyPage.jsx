import React from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import default_profile from '../../assets/images/Logo/default_profile.png';

const MyPage = () => {
    return (
        <div className='mypage_container container'>
            <div className="mypage_inner_container">
                <EmpathyHeader />
                <main className="mypage_main_container">
                    <div className="mypage_main_back"></div>
                    <div className="mypage_main_content">
                        <div className="mypage_main_profile_area">
                            <div className="mypage_profile_header">
                                <p>2002.06.24</p>
                                <p>서울</p>
                            </div>
                            <div className="mypage_profile_main">
                                <img src={default_profile} alt="기본 프로필" />
                                <p className='mypage_profile_nickname'>동에번쩍 서에번쩍</p>
                                <p className='mypage_profile_name'>홍길동</p>
                            </div>
                            <div className="mypage_profile_footer">
                                <div className="mypage_profile_keyword">운동</div>
                                <div className="mypage_profile_keyword">뮤지컬</div>
                                <div className="mypage_profile_keyword">맛집탐방</div>
                            </div>
                        </div>
                        <div className="mypage_main_list_area">
                            <ul className="mypage_main_list">
                                <li className="mypage_main_list_item btn">내가 만든 팟팅 모아보기</li>
                                <li className="mypage_main_list_item btn">내가 쓴 공감 글 모아보기</li>
                                <li className="mypage_main_list_item btn">팟팅 참여 내역</li>
                                <li className="mypage_main_list_item btn">정보 수정</li>
                                <li className="mypage_main_list_item btn">로그아웃</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MyPage