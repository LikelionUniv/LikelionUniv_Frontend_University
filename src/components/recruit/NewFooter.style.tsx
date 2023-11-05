import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #f2f4f6;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        position: relative;
        width: 1200px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }

        .left {
            .title {
                color: #212224;
                font-size: 28px;
                font-weight: 700;
                font-family: Pretendard;
                margin-bottom: 10px;
            }
            .text {
                color: #212224;
                font-family: Pretendard;
                font-size: 12px;
                font-weight: 500;
                margin-top: 5px;
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8%;
            @media (max-width: 720px) {
                flex-direction: column;
                align-items: flex-end;
                gap: 10px;
                padding: 20px 0;
            }

            a {
                display: flex;
                align-items: center;
                color: #212224;
                font-family: Pretendard;
                font-size: 14px;
                font-weight: 500;
                text-decoration: none;
                flex-shrink: 0;
                svg {
                    width: 16px;
                    height: 16px;
                    margin-left: 3px;
                }
            }

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 40px;
                border-radius: 40px;
                background-color: #212224;
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none;
                margin-right: 0;
            }
        }
    }
`;
