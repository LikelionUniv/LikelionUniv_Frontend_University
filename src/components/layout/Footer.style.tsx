import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Info = styled.div`
    width: 100%;
    padding: 30px 0 60px 0;
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
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }

        .left {
            & > svg {
                margin-bottom: 20px;
            }
            .text {
                color: #212224;
                font-family: Pretendard;
                font-size: 12px;
                font-weight: 500;
                margin-top: 5px;

                &.mail {
                    display: flex;
                    align-items: center;
                    svg {
                        margin-right: 3px;
                    }
                    a {
                        color: #212224;
                        margin-left: 3px;
                    }
                }
            }
            .icon-container {
                padding-top: 40px;
                display: flex;
                gap: 8px;
                svg {
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                }
                .makers-btn {
                    cursor: pointer;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    background-color: #212224;
                    color: #fff;
                    padding: 0 20px;
                    border-radius: 20px;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    white-space: nowrap;
                }
            }
        }

        .right {
            display: flex;
            gap: 80px;
            @media (max-width: 768px) {
                padding-top: 50px;
                flex-direction: column;
                gap: 50px;
            }

            .section {
                .title {
                    color: #212224;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-weight: 700;
                    padding-bottom: 16px;
                }
                .text {
                    padding: 8px 0;
                    display: flex;
                    align-items: center;
                    color: #212224;
                    font-family: Pretendard;
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    cursor: pointer;
                    &:hover {
                    }
                }
            }
        }
    }
`;
