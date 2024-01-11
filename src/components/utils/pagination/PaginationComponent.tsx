import React from 'react';
import Pagination from 'react-js-pagination';
import leftArrow from '../../../img/mypage/leftArrow.svg';
import rightArrow from '../../../img/mypage/rightArrow.svg';
import './Pagination.css';

interface PaginationProps {
    page: number;
    size: number;
    count: number;
    pageRange: number;
    setPage: (page: number) => void;
}

function PaginationComponent({
    page,
    size,
    count,
    pageRange,
    setPage,
}: PaginationProps) {
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={size}
            totalItemsCount={count}
            pageRangeDisplayed={pageRange}
            prevPageText={<img src={leftArrow} alt="left" />}
            nextPageText={<img src={rightArrow} alt="right" />}
            hideFirstLastPages={true}
            hideDisabled
            linkClassPrev="prev-button"
            linkClassNext="next-button"
            onChange={setPage}
        />
    );
}
export default PaginationComponent;
