import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
function RegisterForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required("Please enter your name"),
    });

    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {};
    return (
        <div style={{ paddingTop: "16px" }}>
            <Avatar
                sx={{
                    margin: "0 auto",
                    backgroundColor: "#1976d2",
                }}
            >
                <LockOutlined sx={{}}></LockOutlined>
            </Avatar>

            <Typography
                component="h3"
                variant="h5"
                sx={{
                    textAlign: "center",
                    margin: "10px 0 20px 0",
                    fontSize: "32px",
                }}
            >
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField
                    name="confirmPassword"
                    label="Confirm Password"
                    form={form}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ margin: "12px 0" }}
                    fullWidth
                >
                    Create an Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
