import React, { useState } from 'react';
import * as P from './HeaderStyle';
import WriteIcon from '../../img/project/write.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index: number) => {
        setActiveTab(index);
    };

    const navigate = useNavigate();

    const goRegister = (): void => {
        navigate('register');
    };

    return (
        <P.HeaderContainer>
            <P.TabContainer>
                <P.Tab
                    onClick={() => handleClick(0)}
                    className={activeTab === 0 ? 'selected' : ''}
                >
                    전체
                    {activeTab === 0 && <P.Divider>_</P.Divider>}{' '}
                    {/* 수정된 부분 */}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(11)}
                    className={activeTab === 11 ? 'selected' : ''}
                >
                    11기
                    {activeTab === 11 && <P.Divider>_</P.Divider>}{' '}
                    {/* 수정된 부분 */}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(10)}
                    className={activeTab === 10 ? 'selected' : ''}
                >
                    10기
                    {activeTab === 10 && <P.Divider>_</P.Divider>}{' '}
                    {/* 수정된 부분 */}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(9)}
                    className={activeTab === 9 ? 'selected' : ''}
                >
                    9기
                    {activeTab === 9 && <P.Divider>_</P.Divider>}{' '}
                    {/* 수정된 부분 */}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(8)} // 8기 탭
                    className={activeTab === 8 ? 'selected' : ''}
                >
                    8기
                    {activeTab === 8 && <P.Divider>_</P.Divider>}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(7)} // 7기 탭
                    className={activeTab === 7 ? 'selected' : ''}
                >
                    7기
                    {activeTab === 7 && <P.Divider>_</P.Divider>}
                </P.Tab>

                <P.Tab
                    onClick={() => handleClick(6)} // 6기 이전 탭
                    className={activeTab === 6 ? 'selected' : ''}
                >
                    6기 이전
                    {activeTab === 6 && <P.Divider>_</P.Divider>}
                </P.Tab>
            </P.TabContainer>

            <P.WriteBtn onClick={goRegister}>
                <img src={WriteIcon} alt="write" />
                글쓰기
            </P.WriteBtn>
        </P.HeaderContainer>
    );
};

export default Header;
