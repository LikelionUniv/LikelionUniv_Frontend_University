import { FunctionComponent, useState, useEffect, useMemo, useCallback } from 'react';
import * as D from './DeveloperInfo.style';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../utils/axios';

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
    part: string;
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

    const { userinfo } = useAuth();

    // 현재 URL에서 projectId 추출
    const path = window.location.pathname;
    const pathParts = path.split('/');
    const projectId = pathParts[pathParts.length - 1];

    // 프로젝트 데이터 불러오기
    useEffect(() => {
        axiosInstance.get(`/api/v1/project/${projectId}`)
            .then(response => {
                setProjectData(response.data.data);
                setMembersData(response.data.data.members);
            })
            .catch(error => console.error('Fetching error:', error));
    }, [projectId]);

    // 사용자 상세 정보 API에서 데이터 불러오기
    useEffect(() => {
        axiosInstance.get('/api/v1/user/search?page=0&size=4')
            .then(response => setUserDetails(response.data.data.data))
            .catch(error => console.error('Error fetching user details:', error));
    }, []);

    const navigate = useNavigate(); // useNavigate 사용

    const goToUserProfile = useCallback((userId: number) => {
        // 로그인 상태일 때만 프로필 페이지로 이동
        if (userinfo.isLogin) {
            navigate(`/userpage/${userId}`);
        }
    }, [userinfo, navigate]);

    // 각 역할별 멤버 매핑
    const mappedMembers = useMemo(() => {
        // 초기화 시 모든 키에 대해 빈 배열 할당
        const roleMapping: RoleMapping = {
            기획: [],
            디자인: [],
            프론트: [],
            백: [],
            풀스텍: [],
            팀원: [], //트랙 미기재
        };
        membersData.forEach(member => {
            switch (member.part) {
                case 'PM':
                    roleMapping.기획.push(member.name);
                    break;
                case 'DESIGNER':
                    roleMapping.디자인.push(member.name);
                    break;
                case 'FRONTEND':
                    roleMapping.프론트.push(member.name);
                    break;
                case 'BACKEND':
                    roleMapping.백.push(member.name);
                    break;
                case 'FULL_STACK':
                    roleMapping.풀스텍.push(member.name);
                    break;
                case 'NO_PART':
                    roleMapping.팀원.push(member.name);
                    break;
            }
        });

        return roleMapping;
    }, [membersData]);

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
                                    {mappedMembers[part].map(name => {
                                        // 해당 사용자의 상세 정보 찾기
                                        const user = userDetails.find(u => u.name === name);
                                        return (
                                            <D.Span4 isLoggedIn={userinfo.isLogin} key={name} onClick={() => user && goToUserProfile(user.userId)}>
                                                {name}
                                            </D.Span4>
                                        );
                                    })}
                                </p>
                            ),
                    )}
                </D.Members>
            </D.RightWrapper>
        </D.ParentRoot>
    );
};

export default DeveloperInfo;
