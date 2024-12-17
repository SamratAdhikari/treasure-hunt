import {
    Box,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
    return (
        <Box className="flex flex-col justify-center items-center bg-white rounded-md">
            {/* title */}
            <Typography
                variant="h3"
                gutterBottom
                className="text-gray-800 font-semibold"
            >
                Login |
                <Typography component={"span"} className="text-primary ml-2">
                    TreasureHunt
                </Typography>
            </Typography>

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
                            className="flex justify-center flex-col gap-2"
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
                                    label="Username"
                                    {...formik.getFieldProps("username")}
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
    );
};

export default LoginForm;
