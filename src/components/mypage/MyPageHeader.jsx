import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyPageHeader = ({ title }) => {
    return (
        <div className="mypage_header">
            <Link to="/mypage">
                <div className="mypage_back btn">
                    <MdArrowBackIosNew className='mypage_back_btn' />
                </div>
            </Link>
            <div className="mypage_title">
                <span>{ title }</span>
            </div>
            <div className="mypage_blank_box"></div>
        </div>
    )
}

export default MyPageHeader