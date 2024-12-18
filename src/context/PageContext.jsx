/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const PageContext = createContext();

export const usePageContext = () => {
    return useContext(PageContext);
};

export const PageContextProvider = ({ children }) => {
    const [page, setPage] = useState(
        JSON.parse(localStorage.getItem("page-info")) || 'quiz'
    );

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
};
