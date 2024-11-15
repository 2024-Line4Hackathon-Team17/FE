// src/components/PotList.jsx

import React from "react";
import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import sample from "../assets/sample.jpg"; // sample 이미지 import 추가

const PotList = ({ categories, colors, openModal }) => {
    return (
        <div className="potList">
            {categories.map((category, index) => (
                <div
                    className="listBox"
                    key={index}
                    style={{
                        top: `${-index * 10}px`,
                        backgroundColor: colors[index % colors.length],
                        zIndex: index + 1,
                        position: "relative",
                    }}
                    onClick={() =>
                        openModal(category, colors[index % colors.length])
                    }
                >
                    <div className="potlistbox">
                        <div className="listboxtop">
                            <div className="listBoxImg">
                                <img
                                    src={sample} // 아이콘 이미지로 대체
                                    alt={category.title}
                                    className="listboximg"
                                />
                            </div>
                            <div className="DetailTitle">
                                <div className="Id">{category.created_by}</div>
                                <div className="PotTitle">{category.title}</div>
                            </div>
                        </div>
                        <div className="listBoxInfo">
                            <div className="potListbox">
                                <div className="listBoxDetail">
                                    <div className="DetailPlace">
                                        <div className="Detailimg">
                                            <img
                                                src={MapPin}
                                                alt="Map Icon"
                                                className="detailimgsrc"
                                            />
                                        </div>
                                        {category.location}
                                    </div>
                                    <div className="DetailDate">
                                        <div className="Detailimg">
                                            <img
                                                src={CalendarCheck}
                                                alt="Calendar Icon"
                                                className="detailimgsrc"
                                            />
                                        </div>
                                        {category.time}
                                    </div>
                                </div>
                                <div className="listBoxLeft">
                                    <div className="listBoxLeftbox">
                                        <div className="potAttended">
                                            {category.participants_count}
                                        </div>
                                        <div>/</div>
                                        <div className="potAvailable">
                                            {category.max_participants}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PotList;
