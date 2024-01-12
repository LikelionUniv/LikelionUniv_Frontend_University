import React, { useState, useEffect } from 'react';
import * as P from './HeaderStyle';
import WriteIcon from '../../img/project/write.svg';
import { useNavigate } from 'react-router-dom';
import { ProjectAPI } from './ProjectList';
import { Gen } from './register/RegisterOptions';
import useIsAdmin from '../../hooks/useIsAdmin';

interface IHeader {
    setProjectApi: React.Dispatch<React.SetStateAction<ProjectAPI>>;
}

function Header({ setProjectApi }: IHeader) {
    const { isAdmin } = useIsAdmin();
    const [activeTab, setActiveTab] = useState<number | undefined>();

    const handleClick = (index?: number) => {
        setActiveTab(index);
    };

    useEffect(() => {
        // 전체를 클릭할 경우
        if (activeTab === undefined) {
            setProjectApi({ uri: '/api/v1/project/' });
            return;
        }

        // 아닐 경우
        setProjectApi({ uri: `/api/v1/project/ordinal/${activeTab}` });
    }, [activeTab, setProjectApi]);

    const navigate = useNavigate();
    const goRegister = (): void => {
        navigate('register');
    };

    const recentFiveGen = Gen.loadRecentFiveGen();
    const sixYearsAgoGen = recentFiveGen[recentFiveGen.length - 1] - 1;

    return (
        <P.HeaderContainer>
            <P.TabContainer>
                <P.Tab
                    onClick={() => handleClick(undefined)}
                    className={activeTab === undefined ? 'selected' : ''}
                >
                    전체
                    {activeTab === undefined && <P.Divider>_</P.Divider>}{' '}
                    {/* 수정된 부분 */}
                </P.Tab>

                {recentFiveGen !== undefined &&
                    recentFiveGen.map(gen => (
                        <P.Tab
                            key={gen}
                            onClick={() => handleClick(gen)}
                            className={activeTab === gen ? 'selected' : ''}
                        >
                            {gen}기
                            {activeTab === gen && <P.Divider>_</P.Divider>}{' '}
                        </P.Tab>
                    ))}
                <P.Tab
                    onClick={() => handleClick(sixYearsAgoGen)}
                    className={activeTab === sixYearsAgoGen ? 'selected' : ''}
                >
                    {sixYearsAgoGen}기 이전
                    {activeTab === sixYearsAgoGen && <P.Divider>_</P.Divider>}
                </P.Tab>
            </P.TabContainer>

            <P.WriteBtn isAdmin={true} onClick={goRegister}>
                <img src={WriteIcon} alt="write" />
                글쓰기
            </P.WriteBtn>
        </P.HeaderContainer>
    );
}

export default Header;
