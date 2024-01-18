import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as U from './UnivcontentStyle';
import Email2 from '../../img/recruit/Email2.svg';
import Mail from '../../img/recruit/mail.svg';
import Plus from '../../img/recruit/plus.svg';
import Min from '../../img/recruit/min.svg';
import { StyledButton } from './UnivcontentStyle';
import Apply1 from '../../img/recruit/apply1.svg';
import Apply2 from '../../img/recruit/apply2.svg';
import { useNavigate } from 'react-router-dom';

const Univcontent = () => {
    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleClick = (index: any) => {
        if (selected === index) {
            setSelected(null);
        } else {
            setSelected(index);
        }
    };

    const goEmail = () => {
        window.open('mailto:univ_admin@likelion.net');
    };

    // Define the table object
    const table: { [key: string]: string } = {
        '’아기사자’가 무엇인가요?':
            '멋쟁이사자처럼 대학에 들어온 구성원들을 지칭하는 말입니다.',
        '대학 졸업생이나 직장인도 참여 가능한가요?':
            '아니요, 대학 기반 동아리이니만큼 재학생, 휴학생에 한해 지원할 수 있습니다.',

        '운영진 및 아기사자 지원은 어떻게 하나요?':
            '참여대학 페이지에 우리 학교가 있다면, 각 학교의 대표 페이지를 통해 문의해주세요. 만일 찾는 데에 어려움이 있다면, univ_admin@likelion.net 메일로 문의해주세요.',

        '중앙 운영단은 어떤 조직이며, 어떻게 구성되나요?':
            '중앙 운영단은 멋쟁이사자처럼 대학의 구성원 전체를 대표하는 조직으로, 운영팀, 콘텐츠팀으로 나뉘어 멋쟁이사자처럼과 직접적으로 소통하며 멋대를 이끌어나갈 예정입니다. 자세한 선발 내용은 1월 중순 중 발표될 모집 요강을 살펴봐 주세요.',

        '교육과 행사는 오프라인으로 진행되나요?':
            '학교별로 진행하는 교육은 각 학교 내부에서 자율적으로 진행하면 되며, 오프라인을 권장드립니다. 멋쟁이사자처럼에서 진행하는 행사의 경우 온/오프라인 행사가 혼합되어 있습니다.',

        '리크루팅 전체 일정은 어떻게 되나요?': `12기 리크루팅 일정은 아래와 같습니다.\n\n▶️ 참여 대학 모집 기간 : 23. 11. 20~23. 12. 10\n\n▶️ 운영진 모집 마감 기한 : ~24. 01. 15\n\n▶️ 중앙 운영단 모집 기간 : 24. 01. 16~24. 01. 28 (※ 면접 : 01. 29 ~01. 31)\n\n▶️ 전체 운영진 OT : 24. 02. 01\n\n▶️ 아기사자 모집 마감 기한 : ~24. 03. 17\n\n▶️ 전체 OT : 24. 03. 21\n\n위 일정을 놓치셨다면, 내년에 진행될 13기 리크루팅 일정을 기다려주세요.`,
    };

    const question = '운영진 및 아기사자 지원은 어떻게 하나요?';

    const answer = table[question] || '';

    if (typeof document !== 'undefined') {
        const answerElement = document.getElementById('answer');
        if (answerElement) {
            answerElement.innerHTML = answer;
        }
    } else {
        console.log(answer);
    }

    const handleBtn1Click = (): void => {
        window.open(
            'https://likelion.notion.site/12-1-28-0619e6f40a8a492aa1a1ba826712ff11',
        );
    };

    const navigate = useNavigate();

    const handleBtn2Click = useCallback(() => {
        window.scrollTo(0, 0);
        navigate('/univ');
    }, [navigate]);

    return (
        <U.ContentDiv>
            <U.ContentSection>
                <U.StyledButton>
                    {/* <button className="button1">
                        <U.StyledImg src={Apply1} alt="지원용이미지1" />

                        <U.Text1>중앙 운영단 지원</U.Text1>

                        <U.Text2>2024. 1. 16 ~ 1. 31 모집 예정</U.Text2>
                    </button> */}

                    {/* <button className="button2">
                        <U.StyledImg src={Apply2} alt="지원용이미지2" />

                        <U.Text3>아기사자 지원</U.Text3>
                        <U.Text4>~ 3. 17 모집 예정</U.Text4>
                    </button> */}

                    <U.Btn1 onClick={handleBtn1Click}>
                        <U.StyledImg src={Apply1} alt="지원용이미지1" />
                        <U.Text1>중앙 운영단 지원</U.Text1>
                        <U.Text2>2024. 01. 16 ~ 01. 28</U.Text2>
                    </U.Btn1>

                    <U.Btn2 onClick={handleBtn2Click}>
                        <U.StyledImg2 src={Apply2} alt="2" />{' '}
                        <U.Text3>아기사자 지원</U.Text3>
                        <U.Text4>~ 03. 17</U.Text4>
                    </U.Btn2>
                </U.StyledButton>

                <U.Title>
                    <U.TD>FAQ</U.TD>
                    <U.TD>자주 묻는 질문</U.TD>
                </U.Title>

                <U.Qbody3>
                    {Object.entries(table).map(([key, value], index) => (
                        <React.Fragment key={index}>
                            <U.Table
                                onClick={() => handleClick(index)}
                                style={{
                                    background:
                                        selected === index
                                            ? 'white'
                                            : '#f2f4f6',
                                    borderBottom:
                                        selected === index
                                            ? 'none'
                                            : '1px solid #212224',
                                }}
                            >
                                <div className="left-container">
                                    <div>Q</div>
                                    <div>{key}</div>
                                </div>
                                {selected === index ? (
                                    <img src={Min} alt="이미지" />
                                ) : (
                                    <img src={Plus} alt="이미지" />
                                )}
                            </U.Table>

                            {selected === index ? (
                                <U.AnsTable>
                                    <div>A</div>
                                    <div>{value}</div>
                                </U.AnsTable>
                            ) : null}
                        </React.Fragment>
                    ))}
                </U.Qbody3>
                <U.Ps2>
                    <p>더 궁금한 것이 있으신가요?</p>
                    <img src={hovered ? Email2 : Mail} alt="이미지" />
                    <p
                        onClick={goEmail}
                        style={{ color: hovered ? '#FF7710' : '#212224' }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        이메일로 문의하기
                    </p>
                </U.Ps2>
            </U.ContentSection>
        </U.ContentDiv>
    );
};

export { Univcontent };
