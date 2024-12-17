import { Box, FormControl, FormHelperText, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
    return (
        <Box className="h-screen w-full flex flex-col justify-center items-center">
            <Box className="flex flex-col justify-center items-center bg-white rounded-md p-8 w-[60%] sm:w-[70%] md:w-[40%] gap-4 h-[30%]">
                {/* title */}
                <h4 className="font-semibold text-2xl text-gray-700">
                    Login |{" "}
                    <span className="text-primary font-semibold text-2xl">
                        TreasureHunt
                    </span>
                </h4>

                {/* Form */}
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
                    })}
                    onSubmit={(values) => {
                        console.log(values);
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
                                        {...formik.getFieldProps("username")}
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
                                        {...formik.getFieldProps("password")}
                                        color="info"
                                    />
                                    {formik.touched.password &&
                                    formik.errors.password ? (
                                        <FormHelperText error>
                                            {formik.errors.password}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>
                            </form>
                        );
                    }}
                </Formik>
            </Box>
        </Box>
    );
};

export default Login;
