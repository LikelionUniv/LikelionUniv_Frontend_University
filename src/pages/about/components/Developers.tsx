import DevInfo from './DevInfo';
import * as D from './DevlopersStyle';
import profile from '../../../img/developer/cgh.png';
import profile1 from '../../../img/developer/profile1.jpeg';
import profile2 from '../../../img/developer/profile2.jpeg';
import profile3 from '../../../img/developer/profile3.png';
import profile4 from '../../../img/developer/profile4.jpeg';
import profile5 from '../../../img/developer/profile5.jpeg';
import profile6 from '../../../img/developer/profile6.png';
import profile0 from '../../../img/developer/profile6.jpeg';
import profile7 from '../../../img/developer/profile7.jpeg';
import profile8 from '../../../img/developer/profile8.jpeg';
import profile9 from '../../../img/developer/profile9.jpeg';
import profile10 from '../../../img/developer/profile10.jpeg';
import profile11 from '../../../img/developer/profile11.png';
import profile12 from '../../../img/developer/profile12.png';
import profile13 from '../../../img/developer/profile13.jpeg';
import profile14 from '../../../img/developer/profile14.jpeg';
import profile15 from '../../../img/developer/profile15.jpeg';
import profile16 from '../../../img/developer/profile16.jpeg';
import profile17 from '../../../img/developer/profile17.jpeg';
import profile18 from '../../../img/developer/profile18.jpeg';
import profile19 from '../../../img/developer/profile19.jpeg';
import profile20 from '../../../img/developer/profile20.jpeg';
import profile21 from '../../../img/developer/profile21.jpeg';
import profile22 from '../../../img/developer/profile22.jpg';
import profile23 from '../../../img/developer/profile23.jpeg';

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
                        profile={profile1}
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">PM</p>
                <D.PeopleBox>
                    <DevInfo
                        name="변주현"
                        from="중앙대학교 11기 대표"
                        position="PM 파트장"
                        profile={profile2}
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Design</p>
                <D.PeopleBox>
                    <DevInfo
                        name="박혜준"
                        from="홍익대학교"
                        position="디자인 파트장"
                        profile={profile3}
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Frontend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="양화영"
                        from="한림대학교 11기 대표"
                        position="프론트엔드 파트장"
                        profile={profile18}
                    />
                    <DevInfo
                        name="김진호"
                        from="홍익대학교 11기 아기사자"
                        position="프론트엔드 파트장"
                        profile={profile13}
                    />
                    <DevInfo
                        name="김강민"
                        from="한국외국어대학교(글로벌) 11기 대표"
                        profile={profile10}
                    />
                    <DevInfo
                        name="김예린"
                        from="한국항공대학교 11기 운영진"
                        profile={profile11}
                    />

                    <DevInfo
                        name="김예지"
                        from="동덕여자대학교 11기 대표"
                        profile={profile12}
                    />
                    <DevInfo
                        name="노하림"
                        from="덕성여자대학교 11기 운영진"
                        profile={profile15}
                    />

                    <DevInfo
                        name="서가영"
                        from="홍익대학교 11기 아기사자"
                        profile={profile16}
                    />
                    <DevInfo
                        name="이서진"
                        from="이화여자대학교 11기 대표"
                        profile={profile17}
                    />
                    <DevInfo
                        name="조민규"
                        from="중앙대학교 11기 아기사자"
                        profile={profile19}
                    />

                    <DevInfo
                        name="최병찬"
                        from="건국대학교 11기 운영진"
                        profile={profile23}
                    />
                    <DevInfo
                        name="한영준"
                        from="한국외국어대학교(서울) 11기 대표"
                        profile={profile14}
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Backend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김슬기"
                        from="홍익대학교 11기 운영진"
                        position="백엔드 파트장"
                        profile={profile8}
                    />
                    <DevInfo
                        name="황제철"
                        from="한국항공대학교 11기 대표"
                        position="백엔드 파트장"
                        profile={profile7}
                    />
                    <DevInfo
                        name="김민석"
                        from="상명대학교(천안) 11기 대표 "
                        profile={profile4}
                    />
                    <DevInfo
                        name="김태완"
                        from="순천향대학교 11기 대표"
                        profile={profile5}
                    />
                    <DevInfo
                        name="서송현"
                        from="남서울대학교 11기 운영진"
                        profile={profile20}
                    />
                    <DevInfo
                        name="심보영"
                        from="서경대학교 11기 운영진"
                        profile={profile21}
                    />
                    <DevInfo
                        name="이가현"
                        from="한서대학교 11기 대표"
                        profile={profile6}
                    />
                    <DevInfo
                        name="이나현"
                        from="을지대학교 11기 대표"
                        profile={profile0}
                    />
                    <DevInfo
                        name="채서연"
                        from="명지대학교(인문) 11기 대표"
                        profile={profile9}
                    />
                    <DevInfo
                        name="최가현"
                        from="서울여자대학교 11기 운영진"
                        profile={profile}
                    />
                    <DevInfo
                        name="최혁순"
                        from="광운대학교 11기 운영진"
                        profile={profile22}
                    />
                </D.PeopleBox>
            </D.Container>
        </D.Wrapper>
    );
};

export default Developers;
