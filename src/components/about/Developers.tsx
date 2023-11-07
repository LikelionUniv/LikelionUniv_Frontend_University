import DevInfo from './DevInfo';
import * as D from './DevlopersStyle';

const Developers = () => {
    return (
        <D.Wrapper>
            <div className="year">
                <p className="first">1기</p>
            </div>

            <D.Container>
                <p className="part">총괄</p>
                <D.PeopleBox>
                    <DevInfo
                        name="이태휘"
                        from="홍익대학교 11기 대표"
                        position="PM"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">PM</p>
                <D.PeopleBox>
                    <DevInfo
                        name="변주현"
                        from="중앙대학교 11기 대표"
                        position="PM 파트장"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Design</p>
                <D.PeopleBox>
                    <DevInfo
                        name="박혜준"
                        from="00대학교 00기 운영진"
                        position="디자인 파트장"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Frontend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="양화영"
                        from="한림대학교 11기 대표"
                        position="프론트엔드 파트장"
                    />
                    <DevInfo name="김강민" from="00대학교 00기 운영진" />
                    <DevInfo name="김예린" from="한국항공대학교 11기 운영진" />

                    <DevInfo name="김예지" from="동덕여자대학교 11기 운영진" />
                    <DevInfo name="김진호" from="홍익대학교 11기 아기사자" />
                    <DevInfo name="노하림" from="덕성대학교 11기 운영진" />

                    <DevInfo name="서가영" from="대학교 00기 운영진" />
                    <DevInfo name="이서진" from="00대학교 00기 운영진" />
                    <DevInfo name="조민규" from="중앙대학교 11기 아기사자" />

                    <DevInfo name="최병찬" from="00대학교 00기 운영진" />
                    <DevInfo
                        name="한영준"
                        from="한국외국어대학교 서울캠퍼스 11기 대표"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Backend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김슬기"
                        from="홍익대학교 11기 운영진"
                        position="백엔드 파트장"
                    />
                    <DevInfo
                        name="황제철"
                        from="한국항공대학교 11기 대표"
                        position="백엔드 파트장"
                    />

                    <DevInfo
                        name="김민석"
                        from="상명대학교 천안캠퍼스 11기 대표 "
                    />
                    <DevInfo name="김태완" from="순천향대학교 11기 대표" />
                    <DevInfo name="이가현" from="한서대학교 11기 대표" />

                    <DevInfo name="심보영" from="서경대학교 11기 운영진" />
                    <DevInfo name="이나현" from="00대학교 00기 운영진" />
                    <DevInfo name="서송현" from="남서울대학교 11기 운영진" />
                    <DevInfo name="채서연" from="00대학교 11기 운영진" />

                    <DevInfo name="최가현" from="서울여자대학교 11기 운영진" />
                    <DevInfo name="최혁순" from="광운대학교 11기 운영진" />
                </D.PeopleBox>
            </D.Container>
        </D.Wrapper>
    );
};

export default Developers;
