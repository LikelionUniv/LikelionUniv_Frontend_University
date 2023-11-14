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
        '아기사자’가 무엇인가요?':
            '멋쟁이사자처럼 대학에 들어온 구성원들을 지칭하는 말입니다.',
        '대학 졸업생이나 직장인도 참여 가능한가요?':
            '아니요, 대학 기반 동아리이니만큼 재학생, 휴학생에 한해 지원할 수 있습니다.',

        '신규 대학 모집에 혼자 지원해도 되나요?':
            '가능합니다. 멋사에서 선발 이후에 같은 대학의 다른 합격자분들과 연결시켜 드릴 예정입니다.',

        '비전공자도 지원 가능한가요?':
            '지원 가능합니다! 다만, 아기사자들을 이끌고 스터디를 진행해야 하기 때문에 어느 정도의 지식을 가지고 계신 분들께 권장드립니다.',

        '직전 기수에는 참여하지 않은 대학이나, 그 이전에 멋쟁이사자처럼 대학 동아리가 있었던 학교일 경우 재지원이 가능한가요?':
            '직전 기수에 참여하지 않은 대학이라면 신규 지원으로 가능합니다.',

        '선발 이후 새 학기 시작 전까지 무엇을 하나요?':
            '먼저 자체적으로 각 학교의 대표와 운영진을 선발합니다. 이후에 각 학교 대표와 운영진들은 12기 학생을 맞이할 준비를 하게 됩니다. 교육 세션 커리큘럼 구성과 모집 준비를 진행하며, 운영진 OT를 통해 멋쟁이사자처럼에 대한 소속감을 함께 높여보아요.',
        '선발은 어떻게 진행되나요?':
            '지원서 내용을 바탕으로 1차 선발을 진행하게 됩니다. 작성해 주신 지원서의 대표자 메일과 문자로 합불 여부를 발표할 예정이며 이후 온라인 면접을 통해 멋쟁이사자처럼 대학에 합류하고자 하는 의지와 보유 경험과 역량 등을 평가할 예정입니다.',

        '모집할 시, 학교별로 권장하는 인원수가 궁금합니다.':
            '학교별로 대표 1명, 운영진 최소 5명, 학생 최소 20명 정도의 인원을 권장합니다.',

        '교육과 행사는 오프라인으로 진행되나요?':
            '학교별로 진행하는 교육은 각 학교 내부에서 자율적으로 진행하면 되며, 오프라인을 권장드립니다. 멋쟁이사자처럼에서 진행하는 행사의 경우 온/오프라인 행사가 혼합되어 있습니다.',
    };

    return (
        <U.ContentDiv>
            <U.ContentSection>
                {/* Qualifications 부분
                <U.Title>
                    <U.TD>Qualifications</U.TD>
                    <U.TD>지원 자격</U.TD>
                </U.Title>

                <U.Qbody>
                    <U.Qtext>
                        <U.Arrow src={Arrow1}></U.Arrow>
                        <U.Detail>
                            대학교에 재학 중이거나,
                            휴학 중인 학생
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow2}></U.Arrow>
                        <U.Detail>
                            매주 1회 진행되는 학교 별
                            정규 세션에 참여할 수 있는 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow3}></U.Arrow>
                        <U.Detail>
                            개발과 창업에 도전하며 아이디어를
                            실현시키려는 열정을 가진 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow4}></U.Arrow>
                        <U.Detail>
                            새로운 것을 배울 의지가 있고,
                            성장을 위해 노력하는 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow5}></U.Arrow>
                        <U.Detail>
                            협업하는 팀원들과 원활한
                            의사소통이 가능하신 분
                        </U.Detail>
                    </U.Qtext>
                    <U.Qtext>
                        <U.Arrow src={Arrow6}></U.Arrow>
                        <U.Detail>
                            1년 동안 자신의 역할에 책임감
                            있게 임할 수 있는 분
                        </U.Detail>
                    </U.Qtext>
                </U.Qbody>

               
                <U.Title className='recruitSchedule'>
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

                 */}
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
            </U.ContentSection>
        </U.ContentDiv>
    );
};

export default Univcontent;
