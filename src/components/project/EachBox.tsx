import React, { useRef, useState } from 'react';
import * as B from './EachBox.style';
import useInnerWidth from '../../hooks/useInnerWidth';
import { Project } from './ProjectListInner';
import { useNavigate } from 'react-router-dom';
import useLayerPopup from '../../hooks/useLayerPopup';
import More from '../../img/project/More.svg';
import AdminPopup from './AdminPopup';

interface IEachBox {
    project: Project;
    isAdmin: boolean;
}

function EachBox({ project, isAdmin }: IEachBox) {
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

    const layerRef = useRef(null);
    const { popupOpen, openPopup } = useLayerPopup(layerRef);

    return (
        <B.Box onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
            <div style={{ position: 'relative' }}>
                <B.SubBox
                    width={innerWidth}
                    url={`https://${project.imageUrl}`}
                    onClick={() => onClick(project.id)}
                >
                    <B.BlackBox
                        hovered={hovered}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                        }}
                        onClick={() => onClick(project.id)}
                    >
                        {project.outPut}
                    </B.BlackBox>
                </B.SubBox>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <B.SmallBox1>
                    <B.ServiceName
                        hovered={hovered}
                        onClick={() => onClick(project.id)}
                    >
                        {project.serviceName}
                    </B.ServiceName>
                    <B.AdminBtn ref={layerRef} isAdmin={false}>
                        <B.MoreImage src={More} onClick={openPopup} />
                    </B.AdminBtn>
                </B.SmallBox1>
                {popupOpen && (
                    <div ref={layerRef} style={{ position: 'relative' }}>
                        <AdminPopup
                            id={project.id}
                            serviceName={project.serviceName}
                        />
                    </div>
                )}
                <B.SmallBox2
                    hovered={hovered}
                    onClick={() => onClick(project.id)}
                >
                    {project.description}
                </B.SmallBox2>
                <B.SmallBox3 onClick={() => onClick(project.id)}>
                    {project.ordinal}기 {project.univ} {project.activity}
                </B.SmallBox3>
            </div>
        </B.Box>
    );
}

export default EachBox;
