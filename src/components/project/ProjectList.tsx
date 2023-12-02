import Header from './Header';
import Projectbox from './Projectbox';
import * as P from './ProjectList.style';

function ProjectList() {
    return (
        <P.Container>
            <Header />
            <Projectbox />
        </P.Container>
    );
}

export default ProjectList;
