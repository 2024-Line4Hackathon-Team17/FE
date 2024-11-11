// src/components/PotList.jsx
import React from "react";
import "../styles/PotSearch.scss"; // 스타일 포함
import "../styles/CommonStyle.scss"; // 추가 스타일 포함

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
                                    src={category.icon}
                                    alt={category.title}
                                    className="listboximg"
                                />
                            </div>
                            <div className="DetailTitle">
                                <div className="Id">{category.id}</div>
                                <div className="PotTitle">{category.title}</div>
                            </div>
                        </div>
                        <div className="listBoxInfo">
                            <div className="potListbox">
                                <div className="listBoxDetail">
                                    <div className="DetailPlace">
                                        <div className="Detailimg">
                                            <img
                                                src={category.mapIcon}
                                                alt="Map Icon"
                                                className="detailimgsrc"
                                            />
                                        </div>
                                        {category.place}
                                    </div>
                                    <div className="DetailDate">
                                        <div className="Detailimg">
                                            <img
                                                src={category.calendarIcon}
                                                alt="Calendar Icon"
                                                className="detailimgsrc"
                                            />
                                        </div>{" "}
                                        {category.date}
                                    </div>
                                </div>
                                <div className="listBoxLeft">
                                    <div className="listBoxLeftbox">
                                        <div className="potAttended">
                                            {category.attended}
                                        </div>
                                        <div>/</div>
                                        <div className="potAvailable">
                                            {category.available}
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
