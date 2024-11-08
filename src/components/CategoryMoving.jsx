import React, { useEffect } from "react";
import "../styles/CategoryMoving.scss";
import { createLoopingText } from "./CreateLoopingText";

import coffee from "../assets/Coffee.png";
import running from "../assets/PersonSimpleRun.png";

function CategoryMoving() {
    const categories1 = [
        { icon: running, text: "# 우리 동네 러닝크루", alt: "Running Icon" },
        { icon: coffee, text: "# 분위기 좋은 카페 탐방", alt: "Coffee Icon" },
    ];
    const categories2 = [
        { icon: coffee, text: "# 도심 속 카페 투어", alt: "Coffee Icon" },
        { icon: running, text: "# 아침 러닝 모임", alt: "Running Icon" },
    ];
    const categories3 = [
        { icon: running, text: "# 주말 러닝클럽", alt: "Running Icon" },
        { icon: coffee, text: "# 디저트 카페 탐방", alt: "Coffee Icon" },
    ];

    useEffect(() => {
        const scrollElements = document.querySelectorAll(".scroll-content");
        createLoopingText(scrollElements[0], 1); // line1: 왼쪽으로 이동
        createLoopingText(scrollElements[1], -1); // line2: 오른쪽으로 이동
        createLoopingText(scrollElements[2], 1); // line3: 왼쪽으로 이동
    }, []);

    return (
        <div className="categorymovingpagebox">
            <div className="categorybox">
                {/* Line 1 */}
                <div className="boxline boxline1">
                    <div className="scroll-content">
                        <div className="item">
                            {categories1.map((category, index) => (
                                <div className="iconbox" key={index}>
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="item">
                            {categories1.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone1-${index}`}
                                >
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
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
                                <div className="iconbox" key={index}>
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="item">
                            {categories2.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone2-${index}`}
                                >
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
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
                                <div className="iconbox" key={index}>
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
                                    <div className="textbox">
                                        {category.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="item">
                            {categories3.map((category, index) => (
                                <div
                                    className="iconbox"
                                    key={`clone3-${index}`}
                                >
                                    <img
                                        src={category.icon}
                                        alt={category.alt}
                                    />
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
