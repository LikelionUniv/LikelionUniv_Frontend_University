import dot from '../../img/mypage/dot.svg';
import { styled } from 'styled-components';
import { ProjectCardProp } from './type';
import { ProjectBoxWrapper } from './PostCardStyle';

const ProjectCard = (props: ProjectCardProp) => {
    return (
        <ProjectBoxWrapper>
            <ProjectBox
                className="img"
                style={{
                    backgroundImage: `url(${props.img})`,
                }}
            >
                <Outputtag>WEB</Outputtag>
            </ProjectBox>
            <ProjectBox className="title">{props.title}</ProjectBox>
            <ProjectBox className="content">{props.content}</ProjectBox>
            <ProjectBox className="teaminfo">
                <div>{props.cardinal}</div>
                <div className="dot"></div>
                <div>{props.school}</div>
                <div className="dot"></div>
                <div>{props.activity}</div>
            </ProjectBox>
        </ProjectBoxWrapper>
    );
};

export default ProjectCard;

const ProjectBox = styled.div`
    width: 100%;
    line-height: 150%;
    font-weight: 500;
    position: relative;
    &.img {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-bottom: 16px;
        @media (max-width: 1920px) {
            height: 216px;
        }
        @media (max-width: 1280px) {
            height: 60%;
        }
        @media (max-width: 1024px) {
            height: 64%;
        }
        @media (max-width: 479px) {
            height: 247px;
        }
        @media (max-width: 360px) {
            height: 180px;
        }
    }
    &.title {
        font-size: 28px;
        font-weight: 700;
        line-height: 140%;
        @media (max-width: 767px) {
            font-size: 20px;
            line-height: 150%;
        }
    }
    &.content {
        font-size: 16px;
        line-height: 150%;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 6px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 150%;
        }
    }
    &.teaminfo {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
        line-height: 150%;
        color: var(--Grey-700, #868c94);
        .dot {
            width: 2px;
            height: 2px;
            background-repeat: no-repeat;
            background-image: url(${dot});
        }
    }
`;

const Outputtag = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    width: 55px;
    height: 29px;
    background-color: black;
    color: white;
    font-size: 14px;
    line-height: 150%;
`;
