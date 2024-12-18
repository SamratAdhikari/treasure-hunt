import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);

        try {
            // Create FormData object
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const res = await fetch("http://192.168.123.144:8000/auth/login", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error("Invalid credentials!");
            }

            localStorage.setItem(
                "access-token",
                JSON.stringify(data.access_token)
            );
            setAuthUser(username);

            toast.success("Login successful!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;
