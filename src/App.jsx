import { Box } from "@mui/material";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Quiz from "./pages/Quiz/Quiz";
import { Leaderboard } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Box className="flex justify-center items-center w-screen h-auto bg-primary">
                            {!authUser ? <Login /> : <RootLayout />}
                        </Box>
                    }
                />

                <Route element={<RootLayout />}>
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
