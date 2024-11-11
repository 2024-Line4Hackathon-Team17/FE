import React from 'react';
import { PiX } from "react-icons/pi";

const EmpathyWritePopup = ({ onClose }) => {
    return (
        <div className='empathy_write_popup_container'>
            <div className="empathy_write_popup_inner_container">
                <div className="empathy_write_popup_back btn" onClick={onClose}></div>
                <div className="empathy_write_popup_area">
                    <div className="empathy_write_popup_header">
                        <div className="empathy_write_popup_close">
                            <PiX className="empathy_write_popup_close_icon btn" onClick={onClose} />
                        </div>
                    </div>
                    <div className="empathy_write_popup_content">
                        <div className="empathy_write_popup_title">
                            <input type="text" placeholder='제목' />
                        </div>
                        <div className="empathy_write_popup_text">
                            <textarea maxLength="100" placeholder="내용을 입력해주세요. (최대 100자)"></textarea>
                        </div>
                    </div>
                    <div className="empathy_write_popup_bottom">
                        <div className="empathy_write_popup_btn btn">글 작성 완료하기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpathyWritePopup