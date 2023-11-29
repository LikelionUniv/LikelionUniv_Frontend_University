import { Outlet } from "react-router-dom"

const MypageRoot = () => {
    return (
        <div className="pDiv">
            <Outlet />
        </div>
    );
};

export default MypageRoot;
