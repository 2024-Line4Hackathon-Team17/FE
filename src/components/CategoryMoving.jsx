import React, { useEffect } from "react";
import "../styles/CategoryMoving.scss";
import { useNavigate } from "react-router-dom";
import { createLoopingText } from "./CreateLoopingText";

import coffee from "../assets/Coffee.png";
import running from "../assets/PersonSimpleRun.png";
import Racquet from "../assets/Racquet.png";
import Baseball from "../assets/Baseball.png";
import Wine from "../assets/Wine.png";
import Mountain from "../assets/Mountains.png";

function CategoryMoving() {
    const navigate = useNavigate();

    const categories1 = [
        {
            icon: running,
            text: "# 우리 동네 러닝크루",
            alt: "running-icon",
            category: 1, // 고유 ID로 숫자 사용
        },
        {
            icon: coffee,
            text: "# 분위기 좋은 카페 탐방",
            alt: "coffee-icon",
            category: 2,
        },
    ];

    const categories2 = [
        {
            icon: Wine,
            text: "# 와인에 대해 알고 싶은",
            alt: "wine-icon",
            category: 3,
        },
        {
            icon: Mountain,
            text: "# 우리나라 산 정복하기",
            alt: "mountain-icon",
            category: 4,
        },
    ];

    const categories3 = [
        {
            icon: Baseball,
            text: "# 요즘 유행 야구 직관",
            alt: "baseball-icon",
            category: 5,
        },
        {
            icon: Racquet,
            text: "# 배드민턴 같이 쳐요",
            alt: "racquet-icon",
            category: 6,
        },
    ];

    const handleCategoryClick = (category) => {
        // 선택한 카테고리 정보와 함께 PotSearch 페이지로 이동
        navigate("/search", { state: { category } });
    };

    useEffect(() => {
        const scrollElements = document.querySelectorAll(".scroll-content");
        createLoopingText(scrollElements[0], 1);
        createLoopingText(scrollElements[1], -1);
        createLoopingText(scrollElements[2], 1);
    }, []);

    return (
        <div className="categorymovingpagebox">
            {/* 카테고리 목록 */}
            <div className="categorybox">
                {/* Line 1 */}
                <div className="boxline boxline1">
                    <div className="scroll-content">
                        <div className="item">
                            {categories1.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={index}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Line 1 반복 */}
                        <div className="item">
                            {categories1.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone1-${index}`}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Line 2 */}
                <div className="boxline boxline2">
                    <div className="scroll-content">
                        <div className="item">
                            {categories2.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={index}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Line 2 반복 */}
                        <div className="item">
                            {categories2.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone2-${index}`}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Line 3 */}
                <div className="boxline boxline3">
                    <div className="scroll-content">
                        <div className="item">
                            {categories3.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={index}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Line 3 반복 */}
                        <div className="item">
                            {categories3.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone3-${index}`}
                                    onClick={() =>
                                        handleCategoryClick(category.category)
                                    }
                                >
                                    <div
                                        className={`iconimgbox ${category.alt}`}
                                    >
                                        <img
                                            src={category.icon}
                                            alt={category.alt}
                                            className="imgbox"
                                        />
                                    </div>
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryMoving;
