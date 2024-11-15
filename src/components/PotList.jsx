import React from "react";
import "../styles/PotSearch.scss";
import "../styles/CommonStyle.scss";
import CalendarCheck from "../assets/CalendarCheckW.png";
import MapPin from "../assets/MapPinSimpleAreaW.png";
import CalendarCheckB from "../assets/CalendarCheckB.png";
import MapPinB from "../assets/MapPinSimpleAreaB.png";
import sample from "../assets/sample.jpg"; // sample 이미지 import 추가

const PotList = ({ categories, colors, openModal }) => {
    return (
        <div className="potList">
            {categories.map((category, index) => {
                const backgroundColor = colors[index % colors.length];
                // 폰트 색상 결정
                const listBoxTopColor =
                    backgroundColor === "#E6E8ED" ||
                    backgroundColor === "#D7CCAF"
                        ? "#503939" // 밝은 배경
                        : "#FFFFFF"; // 어두운 배경
                const listBoxInfoColor =
                    backgroundColor === "#E6E8ED" ||
                    backgroundColor === "#D7CCAF"
                        ? "#1C2135" // 밝은 배경
                        : "#DBDBDB"; // 어두운 배경

                // 아이콘 결정
                const calendarIcon =
                    backgroundColor === "#E6E8ED" ||
                    backgroundColor === "#D7CCAF"
                        ? CalendarCheckB
                        : CalendarCheck;
                const mapPinIcon =
                    backgroundColor === "#E6E8ED" ||
                    backgroundColor === "#D7CCAF"
                        ? MapPinB
                        : MapPin;

                return (
                    <div
                        className="listBox"
                        key={index}
                        style={{
                            top: `${-index * 10}px`,
                            backgroundColor,
                            zIndex: index + 1,
                            position: "relative",
                        }}
                        onClick={() =>
                            openModal(
                                category,
                                backgroundColor,
                                listBoxInfoColor
                            )
                        }
                    >
                        <div className="potlistbox">
                            <div
                                className="listboxtop"
                                style={{ color: listBoxTopColor }}
                            >
                                <div className="listBoxImg">
                                    <img
                                        src={sample} // sample 이미지
                                        alt={category.title}
                                        className="listboximg"
                                    />
                                </div>
                                <div className="DetailTitle">
                                    <div className="Id">
                                        {category.created_by}
                                    </div>
                                    <div className="PotTitle">
                                        {category.title}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="listBoxInfo"
                                style={{ color: listBoxInfoColor }}
                            >
                                <div className="potListbox">
                                    <div className="listBoxDetail">
                                        <div className="DetailPlace">
                                            <div className="Detailimg">
                                                <img
                                                    src={mapPinIcon}
                                                    alt="Map Icon"
                                                    className="detailimgsrc"
                                                />
                                            </div>
                                            {category.location}
                                        </div>
                                        <div className="DetailDate">
                                            <div className="Detailimg">
                                                <img
                                                    src={calendarIcon}
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
                );
            })}
        </div>
    );
};

export default PotList;
