import { ReactNode } from 'react';
import styled from 'styled-components';

interface ITextContentProps {
    children?: ReactNode;
    size?: string;
    weight?: string;
    color?: string;
    margin?: string;
}

const StyledText = styled.div.withConfig({
    shouldForwardProp: prop =>
        !['size', 'weight', 'color', 'margin'].includes(prop),
})<ITextContentProps>`
    font-size: ${({ size }) => size || '1rem'};
    font-weight: ${({ weight }) => weight || 'normal'};
    color: ${({ color }) => color || 'inherit'};
    margin: ${({ margin }) => margin || '0'};
`;

const Typography = ({
    children,
    size,
    weight,
    color,
    margin,
    ...rest
}: ITextContentProps) => {
    return (
        <StyledText
            size={size}
            weight={weight}
            color={color}
            margin={margin}
            {...rest} // 다른 props도 필요한 경우 모두 전달
        >
            {children}
        </StyledText>
    );
};

export default Typography;
