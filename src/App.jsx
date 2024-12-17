import { Box } from "@mui/material";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Quiz from "./pages/Quiz/Quiz";
import { usePageContext } from "./context/PageContext";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
    const { page } = usePageContext();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Box className="flex justify-center items-center w-screen h-auto bg-primary">
                        <Login />
                    </Box>
                }
            />

            <Route element={<RootLayout />}>
                {page === "quiz" ? (
                    <Route path="/quiz" element={<Quiz />} />
                ) : (
                    <Route path="/leaderboard" element={<Leaderboard />} />
                )}
            </Route>
        </Routes>
    );
}

export default App;
