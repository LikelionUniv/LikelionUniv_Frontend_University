import Header from './Header';
import Projectbox from './Projectbox';

function ProjectList() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Header />
            <Projectbox />
        </div>
    );
}

export default ProjectList;
