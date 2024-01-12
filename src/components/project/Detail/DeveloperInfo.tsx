import {
    FunctionComponent,
    useState,
    useEffect,
    useMemo,
    useCallback,
} from 'react';
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

interface ProjectMember {
    userId: number;
    name: string;
    part: string;
}

interface MemberDetail {
    name: string;
    userId: number;
}

interface RoleMapping {
    [key: string]: MemberDetail[];
    기획: MemberDetail[];
    디자인: MemberDetail[];
    프론트: MemberDetail[];
    백: MemberDetail[];
    풀스텍: MemberDetail[];
}

const DeveloperInfo: FunctionComponent = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [membersData, setMembersData] = useState<ProjectMember[]>([]);

    const { userinfo } = useAuth();

    // 현재 URL에서 projectId 추출
    const path = window.location.pathname;
    const pathParts = path.split('/');
    const projectId = pathParts[pathParts.length - 1];

    // 프로젝트 데이터 불러오기
    useEffect(() => {
        axiosInstance
            .get(`/api/v1/project/${projectId}`)
            .then(response => {
                setProjectData(response.data.data);
                setMembersData(response.data.data.members);
            })
            .catch(error => console.error('Fetching error:', error));
    }, [projectId]);

    const navigate = useNavigate(); // useNavigate 사용

    const goToUserProfile = useCallback(
        (userId: number) => {
            // 로그인 상태일 때만 프로필 페이지로 이동
            if (userinfo.isLogin) {
                navigate(`/userpage/${userId}`);
            }
        },
        [userinfo, navigate],
    );

    // 각 역할별 멤버 매핑
    const mappedMembers = useMemo(() => {
        const roleMapping: RoleMapping = {
            기획: [],
            디자인: [],
            프론트: [],
            백: [],
            풀스텍: [],
            팀원: [], //트랙 미기재
        };
        membersData.forEach(member => {
            const memberDetail = { name: member.name, userId: member.userId };
            // 각 팀원을 해당하는 역할별로 분류
            switch (member.part) {
                case 'PM':
                    roleMapping.기획.push(memberDetail);
                    break;
                case 'DESIGNER':
                    roleMapping.디자인.push(memberDetail);
                    break;
                case 'FRONTEND':
                    roleMapping.프론트.push(memberDetail);
                    break;
                case 'BACKEND':
                    roleMapping.백.push(memberDetail);
                    break;
                case 'FULL_STACK':
                    roleMapping.풀스텍.push(memberDetail);
                    break;
                case 'NO_PART':
                    roleMapping.팀원.push(memberDetail);
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
                                    {mappedMembers[part].map(member => (
                                        <D.Span4
                                            isLoggedIn={userinfo.isLogin}
                                            key={member.name}
                                            onClick={() =>
                                                goToUserProfile(member.userId)
                                            }
                                        >
                                            {member.name}
                                        </D.Span4>
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
