import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MLoginComplete from './mobile/MLoginComplete';
import WLoginComplete from './WLoginComplete';

export const LoginComplete = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <WLoginComplete navigate={navigate}/>
            <MLoginComplete navigate={navigate}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-sizing: border-box;
    width : 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px){
        padding: 0 40px;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px
    }
`;


