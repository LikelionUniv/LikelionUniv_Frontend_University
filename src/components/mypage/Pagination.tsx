import React from 'react';

interface PaginationProp {
    totalPage: Array<number>;
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = (props: PaginationProp) => {
    const page = props.totalPage;
    return (
        <div>
            {page.map(el => {
                return (
                    <button
                        onClick={() => {
                            props.setPageNum(el);
                        }}
                    >
                        {el}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
