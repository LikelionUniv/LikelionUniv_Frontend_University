import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

interface GoBackButtonType {
  icon24PixelArrowLeft?: string;
  GoBackButtonCursor?: Property.Cursor;
  GoBackButtonBorder?: Property.Border;
  GoBackButtonPadding?: Property.Padding;
  GoBackButtonBackgroundColor?: Property.BackgroundColor;
  GoBackButtonPosition?: Property.Position;
  GoBackButtonTop?: Property.Top;
  GoBackButtonLeft?: Property.Left;
  icon24PixelArrowLeftWidth?: Property.Width;
  icon24PixelArrowLeftHeight?: Property.Height;
  bDisplay?: Property.Display;
  marginTop?: Property.MarginTop;
  onClick?: () => void;
}

const Icon24pixelarrowLeft = styled.img<{
  icon24PixelArrowLeftWidth?: Property.Width;
  icon24PixelArrowLeftHeight?: Property.Height;
}>`
  position: relative;
  width: 20px;
  height: 20px;
  ${(p) =>
    p.icon24PixelArrowLeftWidth
      ? `width: ${p.icon24PixelArrowLeftWidth};`
      : ""}
  ${(p) =>
    p.icon24PixelArrowLeftHeight
      ? `height: ${p.icon24PixelArrowLeftHeight};`
      : ""}
`;

const B = styled.b<{ bDisplay?: Property.Display }>`
  position: relative;
  line-height: 150%;
  display: ${(p) => p.bDisplay};
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
  cursor: ${(p) => p.GoBackButtonCursor};
  border: ${(p) => p.GoBackButtonBorder};
  padding: ${(p) => p.GoBackButtonPadding};
  background-color: ${(p) => p.GoBackButtonBackgroundColor};
  position: ${(p) => p.GoBackButtonPosition};
  top: ${(p) => p.GoBackButtonTop};
  left: ${(p) => p.GoBackButtonLeft};
  margin-top: ${(p) => p.marginTop};
  ${(p) =>
    p.onClick
      ? `cursor: pointer;`
      : ""}
`;

const GoBackButton: FunctionComponent<GoBackButtonType> = ({
  icon24PixelArrowLeft,
  GoBackButtonCursor,
  GoBackButtonBorder,
  GoBackButtonPadding,
  GoBackButtonBackgroundColor,
  GoBackButtonPosition,
  GoBackButtonTop,
  GoBackButtonLeft,
  icon24PixelArrowLeftWidth,
  icon24PixelArrowLeftHeight,
  bDisplay,
  marginTop,
  onClick,
}) => {
  return (
    <GoBackButtonRoot
      GoBackButtonCursor={GoBackButtonCursor}
      GoBackButtonBorder={GoBackButtonBorder}
      GoBackButtonPadding={GoBackButtonPadding}
      GoBackButtonBackgroundColor={
        GoBackButtonBackgroundColor
      }
      GoBackButtonPosition={GoBackButtonPosition}
      GoBackButtonTop={GoBackButtonTop}
      GoBackButtonLeft={GoBackButtonLeft}
      marginTop={marginTop}
      onClick={onClick}
    >
      <Icon24pixelarrowLeft
        alt=""
        src={icon24PixelArrowLeft}
        icon24PixelArrowLeftWidth={icon24PixelArrowLeftWidth}
        icon24PixelArrowLeftHeight={icon24PixelArrowLeftHeight}
      />
      <B bDisplay={bDisplay}>목록으로 돌아가기</B>
    </GoBackButtonRoot>
  );
};

export default GoBackButton;
