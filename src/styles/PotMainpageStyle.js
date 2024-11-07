import styled from "styled-components";

export const PotMainpageStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Search = styled.div`
    .Alarm {
        display: flex;
        justify-content: end;
    }
    .alarmimg {
        width: 30px;
    }

    .searchInput {
        width: 300px;
        height: 20px;
        border-radius: 15px;
        border: 1px solid #999999;
    }
    .searchInput {
        font-size: 14px;
        font-weight: 100;
        padding: 5px;
        text-indent: 10px; /* placeholder 위치 조정 */
    }
    .searchInput:focus {
        outline: 1.5px solid #999999;
    }
    .searchInput:focus::placeholder {
        color: transparent;
    }
    .searchBox {
        position: relative;
        width: 300px;
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
    }
    .search-Img {
        height: 20px;
    }
    .search-Img:hover {
        filter: invert(62%) sepia(87%) saturate(275%) hue-rotate(344deg)
            brightness(102%) contrast(98%);
    }
    #search-Btn {
        border: none;
        background-color: #ffffff;
        position: absolute;
        right: 10px;
        top: 4px;
        cursor: pointer;
    }
`;
export const Animation = styled.div``;
export const HotPot = styled.div`
    .listBox {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .listboximg {
        width: 64px;
        height: 64px;
        border-radius: 20px;
    }
    .DetailTitle {
        font-size: 14px;
        font-weight: 600;
    }

    .DetailPlace,
    .DetailDate {
        display: flex;
        flex-direction: row;
        font-size: 10px;
    }

    .listBoxInfo {
        display: flex;
        flex-direction: row;
        background-color: #e6e8ed;
        border-radius: 20px;
        width: 248px;
        height: 64px;
    }
    .detailimgsrc {
        width: 13.91px;
    }
    .potListbox {
        margin: 10px;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
`;
