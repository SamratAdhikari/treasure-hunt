import useLogin from "../../hooks/useLogin";
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
    const { loading, login } = useLogin()

    return (
        <Box className="h-screen flex justify-center items-center">
            <Box className="flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-lg">
                <Box className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-600 mb-8">
                        Login
                        <span className="text-primary"> TreasureHunt</span>
                    </h1>

                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required("Username is required.")
                                .trim()
                                .max(25, "Username must be 25 characters max"),
                            password: Yup.string()
                                .required("Password is required.")
                                .trim()
                                .max(25, "Password must be 25 characters max"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            // Call the login function from the hook
                            login(values.username, values.password);
                            setSubmitting(false);
                        }}
                    >
                        {(formik) => {
                            return (
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className="flex justify-center flex-col gap-4"
                                >
                                    <FormControl>
                                        <TextField
                                            label="Username"
                                            {...formik.getFieldProps(
                                                "username"
                                            )}
                                            color="info"
                                        />
                                        {formik.touched.username &&
                                        formik.errors.username ? (
                                            <FormHelperText error>
                                                {formik.errors.username}
                                            </FormHelperText>
                                        ) : null}
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            label="Password"
                                            type="password"
                                            {...formik.getFieldProps(
                                                "password"
                                            )}
                                            color="info"
                                        />
                                        {formik.touched.password &&
                                        formik.errors.password ? (
                                            <FormHelperText error>
                                                {formik.errors.password}
                                            </FormHelperText>
                                        ) : null}
                                    </FormControl>

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={loading}
                                        sx={{
                                            bgcolor: "#6A5AE0",
                                            textTransform: "none",
                                            paddingY: 1,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {loading ? (
                                            <CircularProgress
                                                color="inherit"
                                                size="2rem"
                                            />
                                        ) : (
                                            "Submit"
                                        )}
                                    </Button>
                                </form>
                            );
                        }}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
