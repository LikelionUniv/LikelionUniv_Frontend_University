import React from 'react';
import * as S from './BoxSkeleton.style';

interface EachBoxProps {
    innerWidth: number;
}

function EachBox({ innerWidth }: EachBoxProps) {
    return (
        <S.Box>
            <S.SubBox width={innerWidth} />
            <S.SmallBox1 />
            <S.SmallBox2 />
            <S.SmallBox3 />
        </S.Box>
    );
}

export default EachBox;
