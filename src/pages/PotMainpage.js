import react from "react";
import * as C from "../styles/CommonStyle";
import * as PMS from "../styles/PotMainpageStyle";

import MovingCategory from "../components/CategoryMoving";
import bell from "../assets/Bell.png";
import CalendarCheck from "../assets/CalendarCheck.png";
import MapPin from "../assets/MapPinSimpleArea.png";
import sample from "../assets/sample.jpg";
import search from "../assets/search.png";

import Coffee from "../assets/Coffee.png";
import Mountain from "../assets/Mountains.png";
import Running from "../assets/PersonSimpleRun.png";

function PotMainpage() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <PMS.PotMainpageStyle>
                            <PMS.Search>
                                <div className="TopSelection">
                                    <div className="Alarm">
                                        <img
                                            src={bell}
                                            className="alarmimg"
                                        ></img>
                                    </div>
                                    <div className="RecommendText">
                                        <div>4호선님,</div>
                                        오늘도 팟팅하세요!
                                    </div>
                                    <div className="Searchbar">
                                        <div className="searchBox">
                                            <input
                                                type="text"
                                                placeholder="찾으시는 팟팅을 검색해보세요."
                                                className="searchInput"
                                            />

                                            <button id="search-Btn">
                                                <img
                                                    src={search}
                                                    className="search-Img"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </PMS.Search>
                            <PMS.Animation>
                                <div className="AnimationTitle">
                                    카테고리별 팟팅
                                </div>
                                <div className="animationselection">
                                    <MovingCategory />
                                </div>
                            </PMS.Animation>
                            <PMS.HotPot>
                                <div className="HotpotTitle">
                                    현재 떠오르는 팟팅
                                </div>
                                <div className="potList">
                                    <div className="listBox">
                                        <div className="listBoxImg">
                                            <img
                                                src={sample}
                                                className="listboximg"
                                            ></img>
                                        </div>
                                        <div className="listBoxInfo">
                                            <div className="potListbox">
                                                <div className="listBoxDetail">
                                                    <div className="DetailTitle">
                                                        흥국생명 직관 같이가요
                                                    </div>
                                                    <div className="DetailPlace">
                                                        <div className="Detailimg">
                                                            <img
                                                                src={MapPin}
                                                                className="detailimgsrc"
                                                            ></img>
                                                        </div>
                                                        인천삼산체육관
                                                    </div>
                                                    <div className="DetailDate">
                                                        <div className="Detailimg">
                                                            <img
                                                                className="detailimgsrc"
                                                                src={
                                                                    CalendarCheck
                                                                }
                                                            ></img>
                                                        </div>{" "}
                                                        11/2 오후 7시
                                                    </div>
                                                </div>
                                                <div className="listBoxLeft">
                                                    2/3
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PMS.HotPot>
                        </PMS.PotMainpageStyle>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default PotMainpage;
