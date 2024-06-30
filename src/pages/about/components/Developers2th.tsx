import DevInfo from './DevInfo';
import * as D from './DevlopersStyle';
import profile1 from '../../../img/about/profile.png';

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
                        profile={profile1}
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
                        profile={profile1}
                        email="rose050800@gmail.com"
                    />
                    <DevInfo
                        name="라혜주"
                        from="인천대학교 12기 운영진"
                        position="디자인 파트원"
                        profile={profile1}
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
                        profile={profile1}
                        email="ab315601@naver.com"
                    />
                    <DevInfo
                        name="김규회"
                        from="경북대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile1}
                    />
                    <DevInfo
                        name="조동필"
                        from="경북대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile1}
                    />
                    <DevInfo
                        name="박상아"
                        from="숙명여자대학교 12기 운영진"
                        position="프론트엔드 파트원"
                        profile={profile1}
                        email="sanga4474@naver.com"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Backend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김슬기"
                        from="홍익대학교 12기 운영진"
                        position="백엔드 파트장"
                        profile={profile1}
                    />
                    <DevInfo
                        name="신동훈"
                        from="숙명여자대학교 12기 운영진"
                        position="백엔드 파트원"
                        profile={profile1}
                    />
                    <DevInfo
                        name="강민서"
                        from="숙명대학교 12기 운영진"
                        position="백엔드 파트원"
                        profile={profile1}
                        email="kms02171@naver.com"
                    />
                </D.PeopleBox>
            </D.Container>
        </D.Wrapper>
    );
};

export default Developers2th;
