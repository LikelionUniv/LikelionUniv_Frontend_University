import { styled } from 'styled-components';

export const UnivFooterWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 304px;
    gap: 32px;
    background: var(--Grey-900, #212224);
`;

export const UnivText = styled.div`
    color: var(--White, #fff);
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%;

    @media screen and (max-width: 768px) {
        color: var(--White, #FFF);
        text-align: center;
        /* Title/28_Bold */
        font-family: Pretendard;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%; /* 39.2px */
    }
`;

export const UnivBtn = styled.div`
    display: flex;
    padding: 16px 32px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--Orange-600, #ff7710);
    cursor: pointer;

    &:hover {
        background: var(--Grey-900, #212224);
    }
    font-size: 20px;
    font-weight: 700;
    color: white;
    line-height: 150%; /* 30px */
`;
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
            }
            .text {
                color: #868c94;
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
