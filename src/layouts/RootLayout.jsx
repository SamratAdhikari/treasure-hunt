import { Outlet } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";

const RootLayout = () => {
    return (
        <div>
            <main>
                <ToggleSwitch />
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
