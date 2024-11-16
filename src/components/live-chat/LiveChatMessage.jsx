import React from "react";

const LiveChatMessage = ({ text, sender }) => {
    return (
        <div className="live_chat_message_container">
            <div
                className={`live_chat_message_inner_container ${
                    sender === "me"
                        ? "other_message_container"
                        : "my_message_container"
                }`}
            >
                <div
                    className={`live_chat_message_text ${
                        sender === "me" ? "other_message" : "my_message"
                    }`}
                >
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default LiveChatMessage;
