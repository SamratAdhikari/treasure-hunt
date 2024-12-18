import { Box } from "@mui/material";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Quiz from "./pages/Quiz/Quiz";
<<<<<<< HEAD
import { Leaderboard } from "@mui/icons-material";
function App() {
  return (
    <>
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
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard/>}/>
          </Route>
        </Routes>
    </>
  );
=======
import { usePageContext } from "./context/PageContext";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
    const { page } = usePageContext();
    console.log(page);

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
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Route>
        </Routes>
    );
>>>>>>> 18d908ba55fa9ef0e590afb25acf946cdd7a4f6f
}

export default App;
