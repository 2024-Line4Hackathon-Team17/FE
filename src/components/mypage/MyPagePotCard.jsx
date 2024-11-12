import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { PiMapPinSimpleArea, PiCalendarCheck } from "react-icons/pi";

const MyPagePotCard = ({ index, category, colors, openModal }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = (openIndex) => {
        if (openIndex === index) {
            setShowOptions(!showOptions);
        }
    };

    return (
        <div className='mypage_pot_card_container'
            style={{
                backgroundColor: colors[index % colors.length],
                transform: `translateY(-${index * 75}px`,
                position: 'relative',
                zIndex: index,
            }}
        >
            <div className="mypage_pot_card_inner_container">
                <div className="mypage_pot_card_top">
                    <div className="mypage_pot_card_img">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSi4g-BPfFytBfUl7e4AgXFRam8kB5Mv5WT8LkrmYBBlSAxD7cE" alt="프로필" />
                    </div>
                    <div className="mypage_pot_card_nickname_title btn"
                        onClick={() =>
                            openModal(category, colors[index % colors.length])
                        }
                    >
                        <p style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}>{category.id}</p>
                        <p style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}>{category.title}</p>
                    </div>
                    <div className="mypage_pot_card_list">
                        <BsThreeDots className='mypage_pot_card_list_icon btn'
                            onClick={() => toggleOptions(index)}
                            style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}
                        />
                        {showOptions && (
                            <ul className="empathy_top_list_options mypage_top_list_options">
                                <li className='btn'>삭제하기</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="mypage_pot_card_mid">
                    <div className="mypage_pot_card_place_date">
                        <div className="mypage_pot_card_place">
                            <PiMapPinSimpleArea className='mypage_pot_card_place_icon'
                                style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}
                            />
                            <span style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}>{category.place}</span>
                        </div>
                        <div className="mypage_pot_card_date">
                            <PiCalendarCheck className="mypage_pot_card_date_icon"
                                style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}
                            />
                            <span style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}>{category.date}</span>
                        </div>
                    </div>
                    <div className="mypage_pot_card_person">
                        <span >{category.attended}/{category.available}</span>
                    </div>
                </div>
                <div className="mypage_pot_card_bottom">
                    <div className="mypage_pot_card_text">
                        <span style={{ color: (index % colors.length) === 0 || (index % colors.length) === 1 ? "#E6E8ED" : "#503939" }}>{category.text}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPagePotCard