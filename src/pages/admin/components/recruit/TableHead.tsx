import React from 'react';
import styled from 'styled-components';
import { useSelectedUsers } from '../SelectedUserContext';

function TableHead() {
    const { selectAll, setSelectAll } = useSelectedUsers();
    const handleSelectAllChange = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
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
                        <Table className="ordinal">기수</Table>
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
`;
