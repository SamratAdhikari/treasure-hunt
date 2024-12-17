import { Box } from "@mui/material";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Quiz from "./pages/Quiz/Quiz";
function App() {
  return (
    <>
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
