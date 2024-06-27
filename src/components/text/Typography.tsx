import { ReactNode } from 'react';
import styled from 'styled-components';

interface ITextContentProps {
    children?: ReactNode;
    $size?: string;
    $weight?: string;
    $color?: string;
    $margin?: string;
}

const StyledText = styled.div<ITextContentProps>`
    font-size: ${({ $size }) => $size || '1rem'};
    font-weight: ${({ $weight }) => $weight || 'normal'};
    color: ${({ $color }) => $color || 'inherit'};
    margin: ${({ $margin }) => $margin || '0'};
`;

const Typography = ({
    children,
    $size,
    $weight,
    $color,
    $margin,
    ...rest
}: ITextContentProps) => {
    return (
        <StyledText
            $size={$size}
            $weight={$weight}
            $color={$color}
            $margin={$margin}
            {...rest}
        >
            {children}
        </StyledText>
    );
};

export default Typography;
