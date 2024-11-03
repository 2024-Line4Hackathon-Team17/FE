import react from "react";
import * as C from "../styles/CommonStyle";
import * as PMS from "../styles/PotMainpageStyle";

function PotMainpage() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <PMS.PotMainpageStyle></PMS.PotMainpageStyle>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default PotMainpage;
