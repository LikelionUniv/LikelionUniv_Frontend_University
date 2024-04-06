import React from 'react';
import * as NSR from './NoSearchResult.style';

interface INoSearchResult {
    keyword: string;
}

const message = {
    NO_RESULT: `으로 검색되는
  멋쟁이사자처럼 참여 학교가 없어요.`,
    APPLY_UNIV: '우리 학교에 아직 멋쟁이사자처럼이 없다면?',
    BTN: '참여 학교 신청하기',
};

function NoSearchResult({ keyword }: INoSearchResult) {
    const onClick = (): void => {
        window.open('https://forms.gle/j4CJ35VwWgePBEJX6');
    };

    return (
        <>
            <NSR.Container>
                <NSR.Content>
                    <NSR.Keyword>'{keyword}'</NSR.Keyword>
                    {message.NO_RESULT}
                </NSR.Content>
            </NSR.Container>
            <NSR.UnivRecruit>
                <NSR.Text>{message.APPLY_UNIV}</NSR.Text>
                <NSR.UnivBtn onClick={onClick}>{message.BTN}</NSR.UnivBtn>
            </NSR.UnivRecruit>
        </>
    );
}

export default NoSearchResult;
