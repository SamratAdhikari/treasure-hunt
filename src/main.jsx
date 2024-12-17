import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { PageContextProvider } from "./context/PageContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <PageContextProvider>
                    <App />
                </PageContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </StrictMode>
);
