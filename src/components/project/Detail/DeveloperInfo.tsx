import { FunctionComponent, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 1.75rem;
    line-height: 150%;
    font-weight: 500;
    @media (max-width: 768px) {
        top: 1.75rem;
    }
`;

const B = styled.b`
    position: absolute;
    font-size: var(--subtitle-16-bold-size);
    line-height: 150%;
    color: var(--grey-900);
    @media (max-width: 768px) {
        font-size: var(--subtitle-14-bold-size);
    }
`;

const OrdinalUniv = styled.div`
    position: relative;
    width: 10rem;
    height: 3.06rem;
    margin-top: 1.5rem;
    @media (max-width: 768px) {
        width: 20rem; 
        height: 3.5rem;
    }

`;
const Calender = styled.div`
    position: absolute;
    top: 1.75rem;
    line-height: 150%;
    font-weight: 500;
`;

const CalenderParent = styled.div`
    position: relative;
    width: 15.75rem;
    height: 3.06rem;
    @media (max-width: 768px) {
        width: 20rem;
        height: 3.5rem;
    }
`;

const B2 = styled.b`
    position: absolute;
    line-height: 150%;
`;
const B5 = styled.div`
    position: absolute;
    top: 1.75rem;
    font-size: var(--body-14-medium-size);
    line-height: 150%;
    font-weight: 500;
    color: var(--grey-800);
`;
const Tech = styled.div`
    position: relative;
    width: 15rem;
    height: 3.06rem;
    font-size: var(--subtitle-16-bold-size);
    color: var(--grey-900);
    @media (max-width: 768px) {
        width: 10rem;
    }
`;

const UnivTechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--white);
    gap: var(--gap-base);
    @media (max-width: 768px) {
        gap: var(--gap-small);
        margin-top: 5rem;
    }
`;

const FrameWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
`;

const B3 = styled.b`
    position: relative;
    line-height: 150%;
    margin-top: 2.75rem;
`;
const Span = styled.span`
    display: block; 
    color: var(--grey-900);
    margin-top: 0.3rem;
`;
const Span4 = styled.div`
    display: inline-block;
    padding: 0.05rem 0.8rem;
    margin: 0.25rem 0.25rem;
    border: 1px solid #DCDFE3;
    border-radius: 1rem;
    line-height: 180%;
    font-weight: 500;
    color: var(--grey-800);
    background-color: white;
`;

const P = styled.p`
`;

const Members = styled.div`
    position: relative;
    font-size: var(--body-14-medium-size);
    line-height: 180%;
    font-weight: 500;
    width: 100%;
    color: var(--grey-800);
    padding-left: 0;
`;
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    background-color: var(--white);
    gap: var(--gap-base);
    margin-left: 0;
    padding-left: 3.6rem; 
    width: 100%;
    @media (max-width: 1024px) {
        padding-left: 1.2rem; 
    }
    @media (max-width: 768px) {
        gap: var(--gap-small);
        margin-bottom: 3rem;
        padding-left: 0rem; 
    }
`;

const ParentRoot = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 1rem;
    gap: 25%;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 3rem;
    }
`;

interface ProjectData {
    id: number;
    activity: string;
    outPut: string;
    serviceName: string;
    ordinal: number;
    univ: string;
    startDate: string;
    endDate: string;
    description: string;
    content: string;
    productionUrl: string;
    projectTech: string[];
    imageUrl: string[];
    members: { userId: number, name: string }[];
}
interface UserDetail {
    userId: number;
    name: string;
    profileImage: string | null;
    universityName: string;
    ordinal: number;
    part: string;
}

interface ProjectMember {
    userId: number;
    name: string;
}

// 역할별로 이름을 저장하는 객체 타입 정의
interface RoleMapping {
    [key: string]: string[];
    기획: string[];
    디자인: string[];
    프론트: string[];
    백: string[];
}

const DeveloperInfo: FunctionComponent = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [membersData, setMembersData] = useState<ProjectMember[]>([]);
    const [userDetails, setUserDetails] = useState<UserDetail[]>([]);

    useEffect(() => {
        fetch('https://stag.likelionuniv.com/api/v1/project/1')
            .then(response => response.json())
            .then(data => setProjectData(data.data))
            .catch(error => console.error('Fetching error:', error));
    }, []);

    // 프로젝트 API에서 멤버 데이터 불러오기
    useEffect(() => {
        fetch('https://stag.likelionuniv.com/api/v1/project/1')
            .then(response => response.json())
            .then(data => setMembersData(data.data.members))
            .catch(error => console.error('Error fetching project members:', error));
    }, []);

    // 사용자 상세 정보 API에서 데이터 불러오기
    useEffect(() => {
        fetch('https://stag.likelionuniv.com/api/v1/user/search?page=0&size=4')
            .then(response => response.json())
            .then(data => setUserDetails(data.data.data))
            .catch(error => console.error('Error fetching user details:', error));
    }, []);

    // 각 역할별 멤버 매핑
    const mappedMembers = useMemo(() => {
        // 초기화 시 모든 키에 대해 빈 배열 할당
        const roleMapping: RoleMapping = {
          기획: [],
          디자인: [],
          프론트: [],
          백: []
        };
      
        userDetails.forEach(user => {
            switch (user.part) {
              case "기획":
                roleMapping.기획.push(user.name);
                break;
              case "디자인":
                roleMapping.디자인.push(user.name);
                break;
              case "프론트엔드":
                roleMapping.프론트.push(user.name);
                break;
              case "백엔드":
                roleMapping.백.push(user.name);
                break;
            }
          });
      
        return roleMapping;
      }, [userDetails]);

    return (
        <ParentRoot>
            <LeftWrapper>
                <FrameWrapper>
                    <UnivTechContainer>
                        <OrdinalUniv>
                            <Div>{projectData?.ordinal}기 〡{projectData?.univ}</Div>
                            <B>기수</B>
                        </OrdinalUniv>
                        <CalenderParent>
                            <Calender>{projectData?.startDate} – {projectData?.endDate}</Calender>
                            <B>기간</B>
                        </CalenderParent>
                        <Tech>
                            <B2>기술 스택</B2>
                            <B5>{projectData?.projectTech.join(', ')}</B5>
                        </Tech>
                    </UnivTechContainer>
                </FrameWrapper>
            </LeftWrapper>
            <RightWrapper>
                <B3>팀원 소개</B3>
                <Members>
                {Object.keys(mappedMembers).map(part => (
                    mappedMembers[part].length > 0 && (
                        <P key={part}>
                            <Span>{part}</Span>
                            {mappedMembers[part].map(name => <Span4 key={name}>{name}</Span4>)}
                        </P>
                    )
                ))}
                </Members>
            </RightWrapper>
        </ParentRoot>
    );
};

export default DeveloperInfo;
