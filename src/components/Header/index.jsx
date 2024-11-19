import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import Register from "../../features/Auth/components/Register";

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "backdropClick") {
            // Ngăn chặn đóng dialog khi nhấp vào backdrop
            return;
        }
        setOpen(false);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <MenuIcon sx={{ mr: 2 }} />

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                            >
                                MY REACT APP
                            </Link>
                        </Typography>

                        <Button color="inherit" onClick={handleClickOpen}>
                            REGISTER
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
