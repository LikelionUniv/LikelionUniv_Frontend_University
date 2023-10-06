import * as R from './ContentStyle';
import Arrow1 from '../../img/recruit/1arrow.svg';
import Arrow2 from '../../img/recruit/2arrow.svg';
import Arrow3 from '../../img/recruit/3arrow.svg';
import Arrow4 from '../../img/recruit/4arrow.svg';
import Arrow5 from '../../img/recruit/5arrow.svg';
import Arrow6 from '../../img/recruit/6arrow.svg';
import Oarrow from '../../img/recruit/Oarrow.svg';
import Mail from '../../img/recruit/mail.svg';
import Plus from '../../img/recruit/plus.svg';
import Min from '../../img/recruit/min.svg';
import { useState } from 'react';
import Tab from '../univ/UnivTab';

const Content = () => {
    /* FAQ click animation */
    const [selected, setSelected] = useState(null);

    const handleClick = (index: any) => {
        if (selected === index) {
            setSelected(null);
        } else {
            setSelected(index);
        }
    };

    const table = {
        '졸업생이나 직장인도 참여 가능한가요?': '몰랑',
        '소속 학교에 멋쟁이사자처럼이 없는 것 같아요.': '몰랑',
        '소속 학교가 아닌 타학교의 멋쟁이사자처럼에서 활동할 수 있나요?':
            '타학교의 멋쟁이사자처럼에서는 활동할 수 없어요.',
        '선발 인원은 몇명인가요?': '몰랑',
    };

    return (
        <R.ContentDiv>
            <div>
                {/*Qualifications 부분*/}
                <R.Title>
                    <R.TD>Qualifications</R.TD>
                    <R.TD>지원 자격</R.TD>
                </R.Title>

                <R.Qbody>
                    <R.Qtext>
                        <R.Arrow src={Arrow1}></R.Arrow>
                        <R.Detail>
                            대학교에 재학 중이거나, <br />
                            휴학 중인 학생
                        </R.Detail>
                    </R.Qtext>
                    <R.Qtext>
                        <R.Arrow src={Arrow2}></R.Arrow>
                        <R.Detail>
                            매주 1회 진행되는 학교 별 <br />
                            정규 세션에 참여할 수 있는 분
                        </R.Detail>
                    </R.Qtext>
                    <R.Qtext>
                        <R.Arrow src={Arrow3}></R.Arrow>
                        <R.Detail>
                            개발과 창업에 도전하며 아이디어를 <br />
                            실현시키려는 열정을 가진 분
                        </R.Detail>
                    </R.Qtext>
                    <R.Qtext>
                        <R.Arrow src={Arrow4}></R.Arrow>
                        <R.Detail>
                            새로운 것을 배울 의지가 있고,
                            <br /> 성장을 위해 노력하는 분
                        </R.Detail>
                    </R.Qtext>
                    <R.Qtext>
                        <R.Arrow src={Arrow5}></R.Arrow>
                        <R.Detail>
                            협업하는 팀원들과 원활한
                            <br /> 의사소통이 가능하신 분
                        </R.Detail>
                    </R.Qtext>
                    <R.Qtext>
                        <R.Arrow src={Arrow6}></R.Arrow>
                        <R.Detail>
                            1년 동안 자신의 역할에 책임감
                            <br /> 있게 임할 수 있는 분
                        </R.Detail>
                    </R.Qtext>
                </R.Qbody>

                {/*Recruitment schedule 부분*/}
                <R.Title>
                    <R.TD>Recruitment schedule</R.TD>
                    <R.TD>모집 일정</R.TD>
                </R.Title>

                <R.Qbody2>
                    <R.Qtext2>
                        <R.Arrow src={Oarrow}></R.Arrow>
                        <R.TextDiv>
                            <R.Detail2>2월 말 - 3월 초</R.Detail2>
                            <R.Detail2>서류 접수</R.Detail2>
                        </R.TextDiv>
                    </R.Qtext2>
                    <R.Qtext2>
                        <R.Arrow src={Oarrow}></R.Arrow>
                        <R.TextDiv>
                            <R.Detail2>3월 중순</R.Detail2>
                            <R.Detail2>서류 합격자 발표</R.Detail2>
                        </R.TextDiv>
                    </R.Qtext2>
                    <R.Qtext2>
                        <R.Arrow src={Oarrow}></R.Arrow>
                        <R.TextDiv>
                            <R.Detail2>3월 중순</R.Detail2>
                            <R.Detail2>면접</R.Detail2>
                        </R.TextDiv>
                    </R.Qtext2>
                    <R.Qtext2>
                        <R.Arrow src={Oarrow}></R.Arrow>
                        <R.TextDiv>
                            <R.Detail2>3월 말</R.Detail2>
                            <R.Detail2>최종 합격</R.Detail2>
                        </R.TextDiv>
                    </R.Qtext2>
                </R.Qbody2>
                <R.Ps>* 자세한 일정은 학교별 모집 안내문을 확인해 주세요</R.Ps>

                {/*FAQ 부분*/}
                <R.Title>
                    <R.TD>FAQ</R.TD>
                    <R.TD>자주 묻는 질문</R.TD>
                </R.Title>

                <R.Qbody3>
                    {Object.entries(table).map(([key, value], index) => (
                        <>
                            <R.Table
                                key={index}
                                onClick={() => handleClick(index)}
                                style={{
                                    background:
                                        selected == index ? 'white' : '#f2f4f6',
                                    borderBottom:
                                        selected == index
                                            ? 'none'
                                            : '1px solid #212224',
                                }}
                            >
                                <div className="left-container">
                                    <div>Q</div>
                                    <div>{key}</div>
                                </div>
                                {selected == index ? (
                                    <img src={Min}></img>
                                ) : (
                                    <img src={Plus}></img>
                                )}
                            </R.Table>

                            {selected == index ? (
                                <R.AnsTable>
                                    <div>A</div>
                                    <div>{value}</div>
                                </R.AnsTable>
                            ) : (
                                <div></div>
                            )}
                        </>
                    ))}
                </R.Qbody3>
                <R.Ps2>
                    <p>더 궁금한 것이 있으신가요?</p>
                    <img src={Mail}></img>
                    <p>이메일로 문의하기</p>
                </R.Ps2>

                {/*University 부분*/}
                <R.Title>
                    <R.TD>University</R.TD>
                    <R.TD>대학</R.TD>
                </R.Title>
                <R.Ps3>
                    <p>소속 대학을 선택하면 지원 페이지로 이동합니다.</p>
                </R.Ps3>
                <R.Qbody4>
                    <Tab />
                </R.Qbody4>
            </div>
        </R.ContentDiv>
    );
};

export default Content;
