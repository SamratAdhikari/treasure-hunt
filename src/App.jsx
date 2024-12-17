import { Box } from "@mui/material";
import Login from "./pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();
    return (
        <Box className="flex justify-center items-center w-full h-auto bg-primary">
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Navigate to="/" /> : <Login />}
                />
                <Route path="/signup" />
            </Routes>
            <Toaster />
        </Box>
    );
}

export default App;
