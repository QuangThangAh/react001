import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={() => (
                <TextField
                    variant="outlined"
                    margin="normal"
                    label={label}
                    fullWidth
                />
            )}
            disabled={disabled}
        />
    );
}

export default PasswordField;
