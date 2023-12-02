// Projectbox.js
import React, { useEffect, useState } from 'react';
import * as B from './ProjectBoxStyle';
import { type ProjectEach } from './register/ProjectRegister';
import { projectData } from './projectDummy';
import useInnerWidth from '../../hooks/useInnerWidth';
import EachBox from './EachBox';

function Projectbox() {
    const data: ProjectEach[] = projectData;
    const [pageSize, setPageSize] = useState<number>(12);
    const { innerWidth } = useInnerWidth();

    // 1024부터는 페이지 사이즈는 6
    useEffect(() => {
        if (innerWidth < 1024) {
            setPageSize(6);
            return;
        }

        setPageSize(12);
    }, [innerWidth]);

    // api 연동되면 아래 코드를 사용할 예정
    // const {curPageItem, renderPaginationBtn} = useServerSidePagination<ProjectEach>({
    //     uri: '/api/v1/project',
    //     size: pageSize,
    // });

    return (
        <B.Container>
            {data.map((project, i) => (
                <EachBox key={i} project={project} />
            ))}
            {/* {renderPaginationBtn()} */}
        </B.Container>
    );
}

export default Projectbox;
