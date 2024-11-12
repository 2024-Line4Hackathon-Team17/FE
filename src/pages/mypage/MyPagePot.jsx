import React, { useState } from 'react';
import EmpathyHeader from '../../components/empathy-community/EmpathyHeader';
import MyPageHeader from '../../components/mypage/MyPageHeader';
import CalendarCheck from "../../assets/CalendarCheckW.png";
import MapPin from "../../assets/MapPinSimpleAreaW.png";
import sample from "../../assets/sample.jpg";
import Modal from '../../components/PotModal';
import "../../styles/PotSearch.scss";
import MyPagePotCard from '../../components/mypage/MyPagePotCard';

const MyPagePot = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalColor, setModalColor] = useState(null);

    const categories = [
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
        {
            title: "흥국생명 직관 같이가요",
            place: "인천삼산체육관",
            date: "11/2 오후 7시",
            attended: "2",
            available: "3",
            id: "미야옹",
            text: "매주 금요일 8시반에 같이 성북천 러닝할 크루원 구합니다! 혼자 하려니 안뛰게 되어서요ㅠㅜ 연령대 상관없이 모두 환영합니다ㅎ",
            icon: sample,
            mapIcon: MapPin,
            calendarIcon: CalendarCheck,
        },
    ];

    const colors = ["#8794c0", "#1C2135", "#fff", "#D7CCAF"];

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

export default MyPagePot