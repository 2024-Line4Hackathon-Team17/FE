// OnedayClass_category.jsx
import React from 'react';
import '../../styles/section/OnedayClass/OnedayClass_category.scss';
import { useLocation } from 'react-router-dom';
import img01 from '../../assets/images/onedayclass/image 16.png';
import img02 from '../../assets/images/onedayclass/image-1.png';
import img03 from '../../assets/images/onedayclass/image-2.png';
import img04 from '../../assets/images/onedayclass/image-3.png';
import img05 from '../../assets/images/onedayclass/image-4.png';
import img06 from '../../assets/images/onedayclass/image.png';

function OnedayClass_category() {

    const location = useLocation();
    const category = location.state?.category || '미술';
  
  const classes = [
    { id: 1, image: img01, title: 'LP 드로잉 원데이 클래스', location: '홍지로' },
    { id: 2, image: img02, title: '어반 스케치 원데이 클래스', location: '잠실' },
    { id: 3, image: img03, title: '액세 페인팅 원데이 클래스', location: '한정·상수' },
    { id: 4, image: img04, title: '나만의 굿즈 만들기 클래스', location: '성수' },
    { id: 5, image: img05, title: '캘리그라피 원데이 클래스', location: '홍대입구' },
    { id: 6, image: img06, title: '겨울 페인팅 원데이 클래스', location: '이태원' },
  ];

  return (
    <div className="oneday-class-category">
      <h2>OO님, <br />오늘의 {category} 클래스입니다!</h2>

      <div className="filter">
        <select className="filter-select">
          <option value="미술">미술</option>
          <option value="요리">요리</option>
          <option value="음악">음악</option>
          {/* 필요한 옵션을 추가 */}
        </select>
        <button className="filter-button">🔍</button>
      </div>

      <div className="class-list">
        {classes.map((item) => (
          <div key={item.id} className="class-card">
            <img src={item.image} alt={item.title} className="class-image" />
            <div className="class-info">
              <span className="class-location">[{item.location}]</span>
              <h3 className="class-title">{item.title}</h3>
              <button className="view-button">보러가기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnedayClass_category;
