// Projectbox.js
import React, { useState } from 'react';
import * as B from './ProjectBoxStyle';

function Projectbox() {
    const [clicked, setClicked] = useState(false);

    return (
        <B.Container onClick={() => setClicked(true)}>
            {[...Array(12)].map((_, i) => (
                <B.Box key={i}>
                    <div style={{ position: 'relative' }}>
                        <B.SubBox style={{ position: 'relative' }}>
                            <B.BlackBox
                                clicked={clicked}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                }}
                            >
                                WEB
                            </B.BlackBox>
                        </B.SubBox>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <B.SmallBox1 clicked={clicked}>서비스 이름</B.SmallBox1>
                        <B.SmallBox2 clicked={clicked}>
                            서비스(프로젝트)에 대한 소개
                            <br />
                            두줄까지 표시되고, 넘치면 궁시렁 콩시렁
                        </B.SmallBox2>
                        <B.SmallBox3>11기 중앙대학교 아이디어톤</B.SmallBox3>
                    </div>
                </B.Box>
            ))}
        </B.Container>
    );
}

export default Projectbox;
