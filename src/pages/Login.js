import react from "react";
import * as C from "../styles/CommonStyle";
import * as Lo from "../styles/LoginStyle";

function Login() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <Lo.LoginpageStyle></Lo.LoginpageStyle>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default Login;
