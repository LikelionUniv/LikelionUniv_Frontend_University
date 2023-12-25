import React from 'react';
import * as S from './BoxSkeleton.style';
import useInnerWidth from '../../../hooks/useInnerWidth';
import EachBox from './EachBox';

interface BoxSkeletonProps {
    pageSize: number;
}

function BoxSkeleton({ pageSize }: BoxSkeletonProps) {
    const { innerWidth } = useInnerWidth();

    return (
        <S.BoxContainer>
            {Array.from({ length: pageSize }).map(() => (
                <EachBox innerWidth={innerWidth} />
            ))}
        </S.BoxContainer>
    );
}

export default BoxSkeleton;
