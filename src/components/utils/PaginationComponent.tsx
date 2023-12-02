import React from 'react';
import Pagination from 'react-js-pagination';
import './Pagination.css';

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
            prevPageText={'<'}
            nextPageText={'>'}
            linkClassFirst="first-button"
            linkClassPrev="prev-button"
            linkClassNext="next-button"
            linkClassLast="last-button"
            onChange={setPage}
        />
    );
}

export default PaginationComponent;
