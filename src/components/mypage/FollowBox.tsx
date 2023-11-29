import styled , {css} from 'styled-components';
import { Avatar, Button, UserBox } from './Common';


interface IbuttonProps {
    delete: boolean;
}
interface IfollowProps {

}
//props로 팔로우 , 팔로잉 중인 사람 정보 내리기
// 이름 , 기수 , 파트 , 이미지 
export const FollowBox = () => {

    return (
        <Follow>
            <FollowInfo>
                <FollowAvatar/>
                <FollowProfile>
                    <p className='inner_name'>안녕</p>
                    <p className='inner_info'>11기 개발</p>
                </FollowProfile>
            </FollowInfo>
            <FollowBtn delete={false}>
                {/* 팔로우 , 언팔 여부에 따라 내부 텍스트 변경 코드 */}
                팔로우 
            </FollowBtn>
        </Follow>
    )
}


export const Follow = styled.div`
    /* width: 100%; // 줄어들어야함. */
    height: 64px;
    margin-top: 16px;
    padding: 0 24px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const FollowInfo = styled.div`
    width : 161px;
    height : 64px;
    display : flex;
`;

const FollowAvatar = styled(Avatar)`
    width: 64px;
    height: 64px;
`;

const FollowProfile = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 25px;

    & > .inner_name {
        color: var(--Grey-900, #212224);
        font-size: 16px;
        font-weight: 700;
    }
    & > .inner_info {
        color: var(--Grey-800, #4D5359);
        font-size: 14px;
        font-weight: 500;
    }

`;

export const FollowBtn = styled(Button)<IbuttonProps>`
    width: 91px;
    height: 32px;
    font-size: 14px;
    ${props =>
        props.delete &&
        css`
            background-color: #eaecee;
            color: #4d5359;
        `}
`; 