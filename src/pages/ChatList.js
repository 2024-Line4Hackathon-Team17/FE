import react from "react";
import * as C from "../styles/CommonStyle";
import * as CS from "../styles/ChatListStyle";

function ChatList() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <CS.ChatListStyle></CS.ChatListStyle>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default ChatList;
