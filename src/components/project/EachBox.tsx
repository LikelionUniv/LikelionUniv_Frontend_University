import React, { useState } from 'react';
import * as B from './EachBox.style';
import useInnerWidth from '../../hooks/useInnerWidth';
import { Project } from './ProjectList';
import { useNavigate } from 'react-router-dom';

interface IEachBox {
    project: Project;
}

function EachBox({ project }: IEachBox) {
    const [hovered, setHovered] = useState(false);
    const { innerWidth } = useInnerWidth();

    const navigate = useNavigate();

    const onClick = (id: number): void => {
        navigate(`/project/${id}`);
    };

    const onMouseHover = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    return (
        <B.Box
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseLeave}
            onClick={() => onClick(project.id)}
        >
            <div style={{ position: 'relative' }}>
                <B.SubBox
                    width={innerWidth}
                    url={`https://${project.imageUrl[0]}`}
                >
                    <B.BlackBox
                        hovered={hovered}
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
                <B.SmallBox1 hovered={hovered}>
                    {project.serviceName}
                </B.SmallBox1>
                <B.SmallBox2 hovered={hovered}>
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
