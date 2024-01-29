import React from 'react';
import styled from 'styled-components';
import { useSelectedUsers } from './SelectedUserContext';

function TableHead() {
    const { selectAll, setSelectAll } = useSelectedUsers();

    const handleSelectAllChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSelectAll(event.target.checked);
    };

    return (
        <>
            <Wrapper>
                <HeadTable>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {' '}
                        <Table className="check">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </Table>
                        <Table className="email">이메일</Table>
                    </div>
                    <Table className="date">알림 신청 날짜</Table>{' '}
                </HeadTable>
                <Divider />
            </Wrapper>
        </>
    );
}

export default TableHead;

const Wrapper = styled.div`
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    max-height: 1660px;

    .check {
        margin: 0 10px 0 0;
        height: 24px;
        accent-color: #ff7710;
        color: #ffffff;
    }

    .email {
        min-width: 100px;
        margin-left: 10px;
    }

    .date {
        min-width: 100px;
        margin-right: 20px;
    }
`;
const HeadTable = styled.div`
    text-align: left;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    align-items: center;
`;

const Table = styled.div`
    padding: 16px 4px;
    height: 24px;
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 15px;
`;
