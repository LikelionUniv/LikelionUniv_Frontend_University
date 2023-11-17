import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../img/landing/pixel_arrow_white.svg';

import { ReactComponent as HackathonImg } from '../../img/landing/hackathon.svg';

interface TitleProps {
    name: any;
}

const ActivityBox: React.FC<TitleProps> = props => {
    return (
        <>
            <Box>
                <div className="title">
                    <div className="name">{props.name}</div>
                    <Arrow className="hover-hide" />
                </div>
                <HackathonImg className="img-hide" />
            </Box>
        </>
    );
};

export default ActivityBox;

export const Box = styled.div`
    //max-width: 588px;
    display: flex;
    justify-content: space-between;
    background: var(--Grey-900, #212224);
    border-radius: 8px;
    padding: 24px;
    max-height: 240px;

    @media (max-width: 1280px) {
        flex-direction: column;
    }
    @media (max-width: 500px) {
        padding: 10px 18px 18px 18px;
    }

    .img-hide {
        @media (max-width: 1280px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-top: 16px;
        }
        @media (max-width: 500px) {
            margin-top: 8px;
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
            color: #fff;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;

            @media (max-width: 1280px) {
                align-items: center;
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
            }
            @media (max-width: 500px) {
                font-size: 3.8vw;
            }
        }

        @media (max-width: 1280px) {
            flex-direction: row;
        }
        @media (max-width: 500px) {
            align-items: center;
        }
    }
`;
