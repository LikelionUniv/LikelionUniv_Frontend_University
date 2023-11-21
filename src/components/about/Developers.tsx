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
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fb8cc474a-db20-4941-b8db-3e6c7648d401%2FIMG_2817.jpeg?id=57191fbd-8f6c-4402-a63d-86147005209a&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">PM</p>
                <D.PeopleBox>
                    <DevInfo
                        name="변주현"
                        from="중앙대학교 11기 대표"
                        position="PM 파트장"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F83c98cac-6466-4f18-9b2b-43ed50504dfb%2F34C56384-8DEA-4957-A5E3-B3212C04A20F.jpeg?id=49eeb1f0-ec36-4911-bbf8-f9670c55128e&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Design</p>
                <D.PeopleBox>
                    <DevInfo
                        name="박혜준"
                        from="홍익대학교"
                        position="디자인 파트장"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F240f073e-1349-403a-969b-d240c37cc1c5%2FProfile_%25EB%25B0%2595%25ED%2598%259C%25EC%25A4%2580.png?id=7d651a8d-3bb1-4ac1-9481-37679bf36f17&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Frontend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="양화영"
                        from="한림대학교 11기 대표"
                        position="프론트엔드 파트장"
                        profile="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6e8e26c4-3b4d-4dce-98e2-2ff985ecd39c%2FIMG_6576.jpeg?table=block&id=0e346082-5974-4794-815e-94191eb00d5b&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=2000&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2"
                    />
                    <DevInfo
                        name="김강민"
                        from="한국외국어대학교(글로벌) 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fb3516d1b-8382-49e0-835c-7f994a325dfd%2FKakaoTalk_20231105_201243613.jpg?id=4533e1ed-6804-40a9-ae22-433605620c6c&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="김예린"
                        from="한국항공대학교 11기 운영진"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F5cc431d5-c847-45bf-83ac-869153bc485e%2FKakaoTalk_20230517_231012541.png?id=fdcc9357-db52-4be8-827c-3e13129d093e&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />

                    <DevInfo
                        name="김예지"
                        from="동덕여자대학교 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F161317e3-8b0e-4f8f-ac9d-ce1aee5a3736%2F73f2eaa61885aafa86ad1302e68b3efa-sticker.png?id=7e7c0e3b-c55b-4b68-8340-5e33da339df3&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="김진호"
                        from="홍익대학교 11기 아기사자"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F08bc59ea-eef6-46f7-a70d-6c99d91b77c1%2F%25EB%2582%25B4_%25EB%25AF%25BC%25EC%25A6%259D%25EC%2582%25AC%25EC%25A7%2584.jpg?id=1607b4c3-3d09-452a-a0a8-83fa0bfe062e&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="노하림"
                        from="덕성여자대학교 11기 운영진"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F924f604f-664c-468b-95d0-986b933894ed%2FKakaoTalk_20231107_184045256.jpg?id=53f8454e-5027-4f75-b609-b9cc03b9d5e6&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />

                    <DevInfo
                        name="서가영"
                        from="홍익대학교 11기 아기사자"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fa9a78fbb-8e5e-43ff-afd7-ab36920986c6%2F3472497127623705176_20230120165552901.jpg?id=68a74145-1b9b-4dc1-b7c7-b02502c18916&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="이서진"
                        from="이화여자대학교 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F8f17f114-9543-4e69-95df-b60f78d351fc%2Fprofile.jpg?id=19125834-1e6d-4d03-bf76-a64f27e4ab2f&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo name="조민규" from="중앙대학교 11기 아기사자" profile="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fabd41a92-065b-4c8d-88c4-58f7b6d5e559%2FKakaoTalk_Photo_2022-09-11-17-05-44.jpeg?table=block&id=94e5736c-8f92-4850-a391-427aeffa53ed&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=2000&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2"/>

                    <DevInfo name="최병찬" from="건국대학교 11기 운영진" />
                    <DevInfo
                        name="한영준"
                        from="한국외국어대학교(서울) 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Ff0e1f14c-d25a-4b0c-be48-edffe1f92b88%2F%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AE%25E1%2584%2585%25E1%2585%25B3%25E1%2584%2589%25E1%2585%25B3.jpeg?id=be8ab10e-4729-4bb6-a2f6-8e6fc1d25522&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                </D.PeopleBox>
                <D.Divider />
                <p className="part">Backend</p>
                <D.PeopleBox>
                    <DevInfo
                        name="김슬기"
                        from="홍익대학교 11기 운영진"
                        position="백엔드 파트장"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fdd622d49-1b87-4be6-9a41-75bf3ecbe76c%2F%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2589%25E1%2585%25A1.jpeg?id=fd64fb34-b744-4384-ad53-a71617e80f5c&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="황제철"
                        from="한국항공대학교 11기 대표"
                        position="백엔드 파트장"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fdc328fc0-6c49-4705-9d55-e13dd2073203%2FHappyFace.jpg?id=c783c5e3-d1b4-4124-999e-116fc2d71063&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="김민석"
                        from="상명대학교(천안) 11기 대표 "
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fe756eb71-688b-436d-b2d4-7506c4b8f7b8%2FKakaoTalk_20231106_134234461.jpg?id=e1fb9e72-9613-4898-a22e-a7090d494ba6&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="김태완"
                        from="순천향대학교 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F253e74fd-a289-4942-b322-a993a3cb7d03%2FIMG_8885.jpg?id=394f8e82-9f87-4ad9-85c6-34842d78a1fc&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo name="서송현" from="남서울대학교 11기 운영진" profile="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3369c432-9eef-46b6-858e-5b39d3a43eb3%2FIMG_5670.jpeg?table=block&id=6725b288-4148-46d2-90ac-469420f6fac9&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=2000&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2"/>
                    <DevInfo name="심보영" from="서경대학교 11기 운영진" profile="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc084987e-6215-459b-aa5b-66616e383d4d%2FC4556A5E-819A-442C-B72E-47E72B78CB1D.jpeg?table=block&id=ea87616d-04a7-4125-ac7a-2fd88db4d2e6&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=2000&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2n" />
                    <DevInfo
                        name="이가현"
                        from="한서대학교 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2Fc94d1814-aa21-4601-9587-666065b9d386%2FIMG_1995.png?id=d66d7afe-307e-4aae-9143-db8b80003976&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo
                        name="이나현"
                        from="을지대학교 11기 대표"
                        profile="https://spiny-lilac-a2a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F60151541-194c-4be9-8625-79945890e6e6%2FKakaoTalk_20231009_222134073.jpg?id=835e3c58-96d4-4401-ad67-a6e766e1bfb2&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=&cache=v2"
                    />
                    <DevInfo name="채서연" from="명지대학교(인문) 11기 대표" profile="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9aed2014-30e7-4fb1-890f-7420bc8497ef%2F0a243333-a3a4-4ab3-ae03-729e1f62ca0b%2FIMG_6873.jpeg?id=01e23695-b533-4a48-a08f-450a3facfe5b&table=block&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=600&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2" />
                    <DevInfo name="최가현" from="서울여자대학교 11기 운영진" />
                    <DevInfo name="최혁순" from="광운대학교 11기 운영진" profile="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe292f642-2279-45ee-bd19-37b4229b72e6%2FIMG_4356.jpg?table=block&id=cac9a370-541c-4f08-bed6-18a60b90cf1d&spaceId=9aed2014-30e7-4fb1-890f-7420bc8497ef&width=2000&userId=56c38f32-89fd-423f-bebb-3acd4a79ef42&cache=v2" />
                </D.PeopleBox>
            </D.Container>
        </D.Wrapper>
    );
};

export default Developers;
