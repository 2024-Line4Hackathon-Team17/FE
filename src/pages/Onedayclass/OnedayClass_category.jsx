// OnedayClass_category.jsx
import React from 'react';
import '../../styles/section/OnedayClass/OnedayClass_category.scss';

function OnedayClass_category() {
  const classes = [
    { id: 1, image: 'lp-class.jpg', title: 'LP 드로잉 원데이 클래스', location: '홍지로' },
    { id: 2, image: 'sketch-class.jpg', title: '어반 스케치 원데이 클래스', location: '잠실' },
    { id: 3, image: 'painting-class.jpg', title: '액세 페인팅 원데이 클래스', location: '한정·상수' },
    { id: 4, image: 'goods-class.jpg', title: '나만의 굿즈 만들기 클래스', location: '성수' },
    { id: 5, image: 'calligraphy-class.jpg', title: '캘리그라피 원데이 클래스', location: '홍대입구' },
    { id: 6, image: 'acrylic-class.jpg', title: '겨울 페인팅 원데이 클래스', location: '이태원' },
  ];

  return (
    <div className="oneday-class-category">
      <h2>OO님, 오늘의 미술 클래스입니다!</h2>

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
