import { Outlet } from "react-router-dom";
import ToggleSelectionBar from "../components/ToggleSelectionBar/ToggleSelectionBar";

const RootLayout = () => {
    return (
        <div>
            <main>
                <ToggleSelectionBar />
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
