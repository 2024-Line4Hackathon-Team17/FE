import React from 'react';
import EmpathyCard from '../components/empathy-community/EmpathyCard';
import EmpathyHeader from '../components/empathy-community/EmpathyHeader';
import EmpathyWriteBtn from '../components/empathy-community/EmpathyWriteBtn';

const EmpathyCommunityPage = () => {
  return (
    <div className='empathy_community_container container'>
      <EmpathyHeader />
      <div className="empathy_title_container">
        <div className="empathy_title_inner_container">
          <p>OO님,</p>
          <p>오늘 하루는 어떠셨나요?</p>
          <p>팟들에게 위로를 받아보세요 :)</p>
        </div>
      </div>
      <div className="empathy_subtitle_container">
        <div className="empathy_subtitle_inner_container">
          <div className="empathy_subtitle">
            <span>팟들과 오늘 일상을 공유해보세요.</span>
          </div>
          <div className="empathy_sort btn">
            <select name="empathy_sort_selec" id="empathy_sort_selec">
              <option value="latest">최신순</option>
              <option value="popular">인기순</option>
            </select>
          </div>
        </div>
      </div>
      <EmpathyCard />
      <EmpathyCard />
      <EmpathyCard />
      <EmpathyCard />
      <EmpathyCard />
      <EmpathyWriteBtn />
    </div>
  )
}

export default EmpathyCommunityPage