import { styled } from 'styled-components';
import { SelectedUsersProvider } from '../../SelectedUserContext';
import TableHead from '../../user/TableHead';
import TableBottom from '../../user/TableBottom';
import TableHackathonList from './TableUserList';

function HackathonList() {
    const users = [
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
        {
            id: 1,
            name: 'test',
            email: 'test',
            major: 'test',
            part: 'test',
            ordinal: 1,
            role: 'test',
            univName: 'test',
        },
    ];
    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHead />
                    {users.map(e => (
                        <TableHackathonList
                            id={e.id}
                            name={e.name}
                            email={e.email}
                            major={e.major}
                            part={e.part}
                            ordinal={e.ordinal}
                            role={e.role}
                            univName={e.univName}
                        />
                    ))}
                    <TableBottom />
                </Wrapper>
            </SelectedUsersProvider>
        </>
    );
}
export default HackathonList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
