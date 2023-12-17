import { FunctionComponent,useCallback } from 'react';
import { Property } from 'csstype';
import styled from 'styled-components';



interface GoBackButtonType {
    ArrowLeft?: string;
    GoBackButtonCursor?: Property.Cursor;
    GoBackButtonBorder?: Property.Border;
    GoBackButtonPadding?: Property.Padding;
    GoBackButtonBackgroundColor?: Property.BackgroundColor;
    GoBackButtonPosition?: Property.Position;
    GoBackButtonTop?: Property.Top;
    GoBackButtonLeft?: Property.Left;
    ArrowLeftWidth?: Property.Width;
    ArrowLeftHeight?: Property.Height;
    bDisplay?: Property.Display;
    marginTop?: Property.MarginTop;
    onClick?: () => void;
}

const ArrowLeftImg = styled.img<{
    ArrowLeftWidth?: Property.Width;
    ArrowLeftHeight?: Property.Height;
}>`
    position: relative;
    width: 20px;
    height: 20px;
    ${p =>
        p.ArrowLeftWidth
            ? `width: ${p.ArrowLeftWidth};`
            : ''}
    ${p =>
        p.ArrowLeftHeight
            ? `height: ${p.ArrowLeftHeight};`
            : ''}
`;

const B = styled.b<{ bDisplay?: Property.Display }>`
    position: relative;
    line-height: 150%;
    display: ${p => p.bDisplay};
`;

const GoBackButtonRoot = styled.div<GoBackButtonType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    text-align: center;
    font-size: var(--subtitle-20-bold-size);
    color: var(--grey-900);
    font-family: var(--subtitle-20-bold);
    cursor: ${p => p.GoBackButtonCursor};
    border: ${p => p.GoBackButtonBorder};
    padding: ${p => p.GoBackButtonPadding};
    background-color: ${p => p.GoBackButtonBackgroundColor};
    position: ${p => p.GoBackButtonPosition};
    top: ${p => p.GoBackButtonTop};
    left: ${p => p.GoBackButtonLeft};
    margin-top: ${p => p.marginTop};
    margin-bottom: 2%;
    ${p => (p.onClick ? `cursor: pointer;` : '')}
    @media (max-width: 768px) {
        display: none;
    }
`;

const GoBackButton: FunctionComponent<GoBackButtonType> = ({
    ArrowLeft,
    GoBackButtonCursor,
    GoBackButtonBorder,
    GoBackButtonPadding,
    GoBackButtonBackgroundColor,
    GoBackButtonPosition,
    GoBackButtonTop,
    GoBackButtonLeft,
    ArrowLeftWidth,
    ArrowLeftHeight,
    bDisplay,
    marginTop,
    onClick,
}) => {
    const onButtonClick = useCallback(() => {
        window.location.href = '/project';
    }, []);
    return (
        <GoBackButtonRoot
            GoBackButtonCursor={GoBackButtonCursor}
            GoBackButtonBorder={GoBackButtonBorder}
            GoBackButtonPadding={GoBackButtonPadding}
            GoBackButtonBackgroundColor={GoBackButtonBackgroundColor}
            GoBackButtonPosition={GoBackButtonPosition}
            GoBackButtonTop={GoBackButtonTop}
            GoBackButtonLeft={GoBackButtonLeft}
            marginTop={marginTop}
            onClick={onButtonClick}
        >
            <ArrowLeftImg
                alt=""
                src={ArrowLeft}
                ArrowLeftWidth={ArrowLeftWidth}
                ArrowLeftHeight={ArrowLeftHeight}
            />
            <B bDisplay={bDisplay}>목록으로 돌아가기</B>
        </GoBackButtonRoot>
    );
};

export default GoBackButton;
