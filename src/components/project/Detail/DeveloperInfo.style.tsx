import styled from 'styled-components';

export const ParentRoot = styled.div`
    display: flex;
    width: 100%;
    margin-top: 64px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const LeftWrapper = styled.div`
    flex: 2;
    width: 100%;
    padding: 24px 0;
    border-top: 1px solid var(--Grey-900, #212224);
    border-bottom: 1px solid var(--Grey-900, #212224);

    @media screen and (max-width: 767px) {
        flex: 1;
    }
`;

export const RightWrapper = styled.div`
    flex: 1;
    width: 100%;
    margin-left: 40px;
    padding: 24px 0;
    border-top: 1px solid var(--Grey-900, #212224);
    border-bottom: 1px solid var(--Grey-900, #212224);

    @media screen and (max-width: 767px) {
        flex: 1;
        margin: 0;
        border-top: none;
    }
`;

export const Element = styled.div`
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Label = styled.div`
    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Text = styled.div`
    margin-top: 4px;
    color: var(--Grey-800, #4d5359);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const Span = styled.span`
    display: block;
    color: var(--grey-900);
    margin-top: 0.3rem;
`;
export const Span4 = styled.div`
    display: inline-block;
    padding: 0.05rem 0.8rem;
    margin: 0.25rem 0.25rem;
    border: 1px solid #dcdfe3;
    border-radius: 1rem;
    line-height: 180%;
    font-weight: 500;
    color: var(--grey-800);
    background-color: white;
`;

export const Members = styled.div`
    position: relative;
    font-size: var(--body-14-medium-size);
    line-height: 180%;
    font-weight: 500;
    width: 100%;
    color: var(--grey-800);
    padding-left: 0;
`;
