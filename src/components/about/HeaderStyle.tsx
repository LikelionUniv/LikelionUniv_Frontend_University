import { styled, css } from 'styled-components';



const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        width: 950px;
    }

    @media screen and (max-width: 768px) {
        width: 688px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    
    width: 1200px;
    ${responsiveWidth}
`;

export const T1 = styled.div`
    margin-top: 80px;
    
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 

    .link {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: var(--Grey-900, #212224);
        
    }
`
export const T2 = styled.div`
    margin: 40px 0 16px 2px;

    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
`
export const T3 = styled.div`
    margin: 0 0 64px 2px;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
`