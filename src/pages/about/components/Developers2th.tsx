import DevInfo from './DevInfo';
import * as D from './DevlopersStyle';
import profile from '../../../img/about/profile.png';
import profile1 from '../../../img/developer2/member1.png';
import profile2 from '../../../img/developer2/member2.png';
import profile3 from '../../../img/developer2/member3.png';
import profile4 from '../../../img/developer2/member4.png';
import profile5 from '../../../img/developer2/member5.png';
import profile6 from '../../../img/developer2/member6.png';
import profile7 from '../../../img/developer2/member7.png';
import profile8 from '../../../img/developer2/member8.png';
import profile9 from '../../../img/developer2/member9.png';
import profile10 from '../../../img/developer/profile8.jpeg';

const Developers2th = () => {
    return (
        <D.Wrapper>
            <D.Container>
                <p className="part">총괄</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김지은"
                        from="한성대학교 12기 대표"
                        position="PM"
                        profile={profile1}
                        email="lzen0409@naver.com"
                    />
                </D.PeopleBox>

                <D.Divider />
                <p className="part">PM</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김지은"
                        from="한성대학교 12기 대표"
                        position="PM 파트장"
                        profile={profile1}
                        email="lzen0409@naver.com"
                    />
                    <DevInfo
                        name="김서윤"
                        from="덕성여자대학교 12기 운영진"
                        position="PM 파트원"
                        profile={profile2}
                        email="pookey1104@naver.com"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Design</p>
                <D.PeopleBox>
                    <DevInfo
                        name="장민정"
                        from="한성대학교 12기 운영진"
                        position="디자인 파트장"
                        profile={profile3}
                        email="rose050800@gmail.com"
                    />
                    <DevInfo
                        name="나혜주"
                        from="인천대학교 12기 운영진"
                        position="디자인 파트원"
                        profile={profile}
                        email="nhj0038@naver.com"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Frontend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김태기"
                        from="광운대학교 12기 운영진"
                        position="프론트엔드 파트장"
                        profile={profile4}
                        email="ab315601@naver.com"
                    />
                    <DevInfo
                        name="김규회"
                        from="경북대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile5}
                        email="k546kh@gmail.com"
                    />
                    <DevInfo
                        name="조동필"
                        from="경북대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile6}
                        email="ehdvlf001@naver.com"
                    />
                    <DevInfo
                        name="박상아"
                        from="숙명여자대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile7}
                        email="sanga4474@naver.com"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Backend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김슬기"
                        from="홍익대학교 11기 운영진"
                        position="백엔드 파트장"
                        profile={profile10}
                    />
                    <DevInfo
                        name="신동훈"
                        from="충남대학교 12기 운영진"
                        position="백엔드 파트원"
                        profile={profile8}
                        email="donghun-shin@naver.com"
                    />
                    <DevInfo
                        name="강민서"
                        from="한성대학교 12기 운영진"
                        position="백엔드 파트원"
                        profile={profile9}
                        email="kms02171@naver.com"
                    />
                </D.PeopleBox>
            </D.Container>
        </D.Wrapper>
    );
};

export default Developers2th;
