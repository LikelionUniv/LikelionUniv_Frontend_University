import { css, styled } from 'styled-components';

function DeveloperNav({
    aboutTh,
    setAboutTh,
}: {
    aboutTh: 1 | 2;
    setAboutTh: React.Dispatch<React.SetStateAction<1 | 2>>;
}) {
    const handleClickYear = (year: 1 | 2) => {
        setAboutTh(year);
    };
    return (
        <Wrapper>
            <div className="year">
                <YearTh
                    $props={aboutTh === 1}
                    onClick={() => handleClickYear(1)}
                >
                    1기
                </YearTh>
                <YearTh
                    $props={aboutTh === 2}
                    onClick={() => handleClickYear(2)}
                >
                    2기
                </YearTh>
            </div>
        </Wrapper>
    );
}
export default DeveloperNav;
const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        max-width: 950px;
    }

    @media screen and (max-width: 768px) {
        max-width: 680px;
        padding: 5%;
    }

    @media screen and (max-width: 480px) {
        //max-width: 360px;
        padding: 5%;
    }
`;
export const Wrapper = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    font-family: Pretendard;

    width: 100%;
    max-width: 1200px;
    padding: 1rem;

    ${responsiveWidth}
    .year {
        border-bottom: 1px solid #eaecee;
        width: 100%;
        position: relative;
        margin-bottom: 39.5px;
        display: flex;
    }
`;
const YearTh = styled.p<{ $props: boolean }>`
    color: ${({ $props }) => ($props ? '#212224' : '#EAECEE')};
    width: fit-content;
    margin: 0 5px;
    border-bottom: 3px solid ${({ $props }) => ($props ? '#212224' : 'none')};
    text-align: left;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    padding: 5px 0;
    cursor: pointer;
    /* background-color: red; */
`;
