import { FunctionComponent, useState, useEffect, useMemo } from 'react';
import * as D from './DeveloperInfo.style';

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
    members: { userId: number; name: string }[];
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
    풀스텍: string[];
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
            .catch(error =>
                console.error('Error fetching project members:', error),
            );
    }, []);

    // 사용자 상세 정보 API에서 데이터 불러오기
    useEffect(() => {
        fetch('https://stag.likelionuniv.com/api/v1/user/search?page=0&size=4')
            .then(response => response.json())
            .then(data => setUserDetails(data.data.data))
            .catch(error =>
                console.error('Error fetching user details:', error),
            );
    }, []);

    // 각 역할별 멤버 매핑
    const mappedMembers = useMemo(() => {
        // 초기화 시 모든 키에 대해 빈 배열 할당
        const roleMapping: RoleMapping = {
            기획: [],
            디자인: [],
            프론트: [],
            백: [],
            풀스텍: [],
        };

        userDetails.forEach(user => {
            switch (user.part) {
                case '기획':
                    roleMapping.기획.push(user.name);
                    break;
                case '디자인':
                    roleMapping.디자인.push(user.name);
                    break;
                case '프론트엔드':
                    roleMapping.프론트.push(user.name);
                    break;
                case '백엔드':
                    roleMapping.백.push(user.name);
                    break;
                case '풀스텍':
                    roleMapping.풀스텍.push(user.name);
                    break;
            }
        });

        return roleMapping;
    }, [userDetails]);

    return (
        <D.ParentRoot>
            <D.LeftWrapper>
                <D.Element>
                    <D.Label>기수</D.Label>
                    <D.Text>
                        {projectData?.ordinal}기 〡{projectData?.univ}
                    </D.Text>
                </D.Element>
                <D.Element>
                    <D.Label>기간</D.Label>
                    <D.Text>{`${projectData?.startDate} - ${projectData?.endDate}`}</D.Text>
                </D.Element>
                <D.Element>
                    <D.Label>기술 스택</D.Label>
                    <D.Text>{projectData?.projectTech.join(', ')}</D.Text>
                </D.Element>
            </D.LeftWrapper>
            <D.RightWrapper>
                <D.Label>팀원 소개</D.Label>
                <D.Members>
                    {Object.keys(mappedMembers).map(
                        part =>
                            mappedMembers[part].length > 0 && (
                                <p key={part}>
                                    <D.Span>{part}</D.Span>
                                    {mappedMembers[part].map(name => (
                                        <D.Span4 key={name}>{name}</D.Span4>
                                    ))}
                                </p>
                            ),
                    )}
                </D.Members>
            </D.RightWrapper>
        </D.ParentRoot>
    );
};

export default DeveloperInfo;
