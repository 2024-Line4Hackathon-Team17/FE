import React, { useState } from "react";
import { PiX } from "react-icons/pi";

//연동
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/community/posts/";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjk1NTc5LCJpYXQiOjE3MzE2OTE5NzksImp0aSI6IjEzZWZlYzI3NmNiODQ4M2JhMTk4YjYxNTMwYjg4YTAzIiwidXNlcl9pZCI6MX0.5x4tDKQA4-RH0j3ThEZgvQrxXp5VqC7Bw35BIqcmaRs";

const EmpathyWritePopup = ({ onClose, onPostSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        const postData = {
            title,
            content,
        };

        setIsSubmitting(true);

        try {
            const response = await axios.post(API_URL, postData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            console.log("Post Created:", response.data);

            // 부모 컴포넌트에 작성된 게시글 데이터 전달
            if (onPostSubmit) {
                onPostSubmit(response.data);
            }

            alert("글 작성이 완료되었습니다!");
            onClose(); // 작성 완료 후 팝업 닫기
        } catch (error) {
            console.error(
                "Error creating post:",
                error.response?.data || error.message
            );
            alert("글 작성 중 오류가 발생했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="empathy_write_popup_container">
            <div className="empathy_write_popup_inner_container">
                <div
                    className="empathy_write_popup_back btn"
                    onClick={onClose}
                ></div>
                <div className="empathy_write_popup_area">
                    <div className="empathy_write_popup_header">
                        <div className="empathy_write_popup_close">
                            <PiX
                                className="empathy_write_popup_close_icon btn"
                                onClick={onClose}
                            />
                        </div>
                    </div>
                    <div className="empathy_write_popup_content">
                        <div className="empathy_write_popup_title">
                            <input
                                type="text"
                                placeholder="제목"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="empathy_write_popup_text">
                            <textarea
                                maxLength="100"
                                placeholder="내용을 입력해주세요. (최대 100자)"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                    </div>
                    <div className="empathy_write_popup_bottom">
                        <div
                            className="empathy_write_popup_btn btn"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            글 작성 완료하기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpathyWritePopup;
