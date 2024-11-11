import React from 'react';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageEmpathyCard from '../../components/mypage/MyPageEmpathyCard';

const MyPageEmpathy = () => {
    return (
        <div className='mypage_empathy_container container'>
            <div className="mypage_empathy_inner_container">
                <EmpathyHeader />
                <MyPageHeader title={'내가 쓴 공감 글 모아보기'} />
                <main className="mypage_empathy_container">
                    <div className="mypage_empathy_back"></div>
                    <div className="mypage_empathy_area">
                        <MyPageEmpathyCard />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MyPageEmpathy