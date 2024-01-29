import React from 'react';
import styled from 'styled-components';
import { useSelectedUsers } from './SelectedUserContext';
import OrderDropDown from './OrderDropDown';

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
                    <Table className="check">
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                    </Table>
                    <Table className="name">이름</Table>
                    <Table className="major">전공</Table>
                    <Table className="ordinal">기수</Table>
                    <Table className="part">파트</Table>
                    <Table className="role">역할</Table>
                    <Table className="email">이메일</Table>
                </HeadTable>
                <Divider />
            </Wrapper>
        </>
    );
}

export default TableHead;

const Wrapper = styled.div``;

const HeadTable = styled.div`
    display: flex;
    font-weight: 700;
    justify-content: start;
    align-items: center;

    .check {
        margin: 0 10px 0 0;
        height: 24px;
        accent-color: #ff7710;
        color: #ffffff;
    }

    .name {
        min-width: 120px;
    }

    .major {
        min-width: 145px;
    }

    .ordinal {
        min-width: 60px;
    }

    .part {
        min-width: 125px;
    }

    .role {
        min-width: 110px;
    }
    .email {
        min-width: 30px;
    }
`;

const Table = styled.div`
    padding: 16px 4px;
    height: 24px;
    text-align: start;
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 15px;
`;
