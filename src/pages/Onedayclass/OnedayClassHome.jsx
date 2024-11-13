// OnedayClassHome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/section/OnedayClass/OnedayClassHome.scss';
import 'swiper/css/pagination'; // 페이지네이션 스타일 추가
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import oneday01 from '../../assets/images/onedayclass/oneday01.png';
import oneday02 from '../../assets/images/onedayclass/oneday02.png';
import oneday03 from '../../assets/images/onedayclass/oneday03.png';
import { PiChefHat, PiScissors, PiMicrophoneStage, PiFlower, PiSneakerMove, PiTreeStructure, PiSparkle, PiPalette } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import

function OnedayClassHome() {
    const navigate = useNavigate();

    

    const handleCategoryClick = (category) => {
        navigate('/onedayclass-category', { state: { category } }); // OnedayClass_category 페이지로 이동
    };

    return (
        <div className="oneday-class-home">
            <EmpathyHeader />
            <div className="oneday-class-home-content">
                <h2>OO님<br /> 오늘의 추천 클래스입니다!</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        type: 'bullets', // 원형 페이지네이션 설정
                    }}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <div className="slide">
                            <img src={oneday01} alt="Cooking Class" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img src={oneday02} alt="Baking Class" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img src={oneday03} alt="Drawing Class" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="category">
                    <div className="category-title">카테고리</div>
                    <div className="category-grid">
                        <div className="category-item" onClick={() => handleCategoryClick('요리 / 베이킹')} style={{ cursor: 'pointer' }}>

                            요리 / 베이킹 <PiChefHat className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('수공예')} style={{ cursor: 'pointer' }}>

                            수공예 <PiScissors className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('가드닝')} style={{ cursor: 'pointer' }}>

                            가드닝 <PiFlower className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('액티비티')} style={{ cursor: 'pointer' }}>

                            액티비티 <PiSneakerMove className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('뷰티·패션')} style={{ cursor: 'pointer' }}>

                            뷰티·패션 <PiSparkle className="icon outlined" />
                        </div>
                        <div className="category-item"  onClick={() => handleCategoryClick('기술')} style={{ cursor: 'pointer' }}>

                            기술 <PiTreeStructure className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('음악')} style={{ cursor: 'pointer' }}>

                            음악 <PiMicrophoneStage className="icon outlined" />
                        </div>
                        <div className="category-item" onClick={() => handleCategoryClick('미술')} style={{ cursor: 'pointer' }}>

                            미술 <PiPalette className="icon outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnedayClassHome;
