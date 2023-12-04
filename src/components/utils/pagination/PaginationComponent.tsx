import React from 'react';
import Pagination from 'react-js-pagination';
import './Pagination.css';

import LeftArrow from '../../../img/mypage/leftArrow.svg';
import RightArrow from '../../../img/mypage/rightArrow.svg';

interface PaginationProps {
    page: number;
    pageSize: number;
    count: number;
    setPage: (page: number) => void;
}

function PaginationComponent({
    page,
    pageSize,
    count,
    setPage,
}: PaginationProps) {
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={pageSize}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={<img src={LeftArrow} alt='left' />}
            nextPageText={<img src={RightArrow} alt='left' />}
            hideFirstLastPages={true}
            linkClassNext="next-button"
            linkClassLast="last-button"
            onChange={setPage}
        />
    );
}

export default PaginationComponent;
