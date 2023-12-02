import React, { useState } from 'react';
import * as B from './EachBox.style';
import { ProjectEach } from './register/ProjectRegister';
import useInnerWidth from '../../hooks/useInnerWidth';

interface IEachBox {
    project: ProjectEach;
}

function EachBox({ project }: IEachBox) {
    const [clicked, setClicked] = useState(false);
    const { innerWidth } = useInnerWidth();

    return (
        <B.Box onClick={() => setClicked(true)}>
            <div style={{ position: 'relative' }}>
                <B.SubBox width={innerWidth}>
                    <B.BlackBox
                        clicked={clicked}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        {project.outPut}
                    </B.BlackBox>
                </B.SubBox>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <B.SmallBox1 clicked={clicked}>
                    {project.serviceName}
                </B.SmallBox1>
                <B.SmallBox2 clicked={clicked}>
                    {project.description}
                    <br />
                    {project.content}
                </B.SmallBox2>
                <B.SmallBox3>
                    {project.ordinal}기 {project.univ} {project.activity}
                </B.SmallBox3>
            </div>
        </B.Box>
    );
}

export default EachBox;
