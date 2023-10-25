import * as U from './UnivcontentStyle';
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

const Univcontent = () => {
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
        '졸업생이나 직장인도 참여 가능한가요?': '참여가 불가능합니다',
        '소속 학교에 멋쟁이사자처럼이 없는 것 같아요.': '이번 신규대학 모집으로 신청하실 수 있습니다',
        '소속 학교가 아닌 타학교의 멋쟁이사자처럼에서 활동할 수 있나요?':
            '타학교의 멋쟁이사자처럼에서는 활동할 수 없어요.',
        '선발 인원은 몇명인가요?': '각 학교별 상이 합니다. ',
    };

    return (
        <U.ContentDiv>
            <div>
                {/*Qualifications 부분*/}
                <U.Title>
                    <U.TD>Qualifications</U.TD>
                    <U.TD>지원 자격</U.TD>
                </U.Title>

                <U.Qbody>
                    <U.Qtext>
                        <U.Arrow src={Arrow1}></U.Arrow>
                        <U.Detail>
                            대학교에 재학 중이거나, <br />
                            휴학 중인 학생
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow2}></U.Arrow>
                        <U.Detail>
                            매주 1회 진행되는 학교 별 <br />
                            정규 세션에 참여할 수 있는 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow3}></U.Arrow>
                        <U.Detail>
                            개발과 창업에 도전하며 아이디어를 <br />
                            실현시키려는 열정을 가진 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow4}></U.Arrow>
                        <U.Detail>
                            새로운 것을 배울 의지가 있고,
                            <br /> 성장을 위해 노력하는 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow5}></U.Arrow>
                        <U.Detail>
                            협업하는 팀원들과 원활한
                            <br /> 의사소통이 가능하신 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow6}></U.Arrow>
                        <U.Detail>
                            1년 동안 자신의 역할에 책임감
                            <br /> 있게 임할 수 있는 분
                        </U.Detail>
                    </U.Qtext>
                </U.Qbody>

               
                <U.Title>
                    <U.TD>Recruitment schedule</U.TD>
                    <U.TD>모집 일정</U.TD>
                </U.Title>

                <U.Qbody2>
                    <U.Qtext2>
                        <U.Arrow src={Oarrow}></U.Arrow>
                        <U.TextDiv>
                            <U.Detail2>2월 말 - 3월 초</U.Detail2>
                            <U.Detail2>서류 접수</U.Detail2>
                        </U.TextDiv>
                    </U.Qtext2>
                    <U.Qtext2>
                        <U.Arrow src={Oarrow}></U.Arrow>
                        <U.TextDiv>
                            <U.Detail2>3월 중순</U.Detail2>
                            <U.Detail2>서류 합격자 발표</U.Detail2>
                        </U.TextDiv>
                    </U.Qtext2>
                    <U.Qtext2>
                        <U.Arrow src={Oarrow}></U.Arrow>
                        <U.TextDiv>
                            <U.Detail2>3월 중순</U.Detail2>
                            <U.Detail2>면접</U.Detail2>
                        </U.TextDiv>
                    </U.Qtext2>
                    <U.Qtext2>
                        <U.Arrow src={Oarrow}></U.Arrow>
                        <U.TextDiv>
                            <U.Detail2>3월 말</U.Detail2>
                            <U.Detail2>최종 합격</U.Detail2>
                        </U.TextDiv>
                    </U.Qtext2>
                </U.Qbody2>
                <U.Ps>* 자세한 일정은 학교별 모집 안내문을 확인해 주세요</U.Ps>

                
                <U.Title>
                    <U.TD>FAQ</U.TD>
                    <U.TD>자주 묻는 질문</U.TD>
                </U.Title>

                <U.Qbody3>
                    {Object.entries(table).map(([key, value], index) => (
                        <>
                            <U.Table
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
                            </U.Table>

                            {selected == index ? (
                                <U.AnsTable>
                                    <div>A</div>
                                    <div>{value}</div>
                                </U.AnsTable>
                            ) : (
                                <div></div>
                            )}
                        </>
                    ))}
                </U.Qbody3>
                <U.Ps2>
                    <p>더 궁금한 것이 있으신가요?</p>
                    <img src={Mail}></img>
                    <p>이메일로 문의하기</p>
                </U.Ps2>

                {/*University 부분*/}
                
            </div>
        </U.ContentDiv>
    );
};

export default Univcontent;
