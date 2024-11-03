import react from "react";
import * as C from "../styles/CommonStyle";
import * as MS from "../styles/MypageStyle";

function Mypage() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <MS.MypageStyle></MS.MypageStyle>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default Mypage;
