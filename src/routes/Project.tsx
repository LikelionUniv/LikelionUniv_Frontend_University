import { Outlet } from 'react-router-dom';
import '../components/LoadScript'

const Project = () => {
    return (
        <div className="pDiv">
            <Outlet />
        </div>
    );
};

export default Project;
