import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { DestinationContext } from "@public/context/destination";
import { Button } from "@mui/material";
import { useState } from "react";
import { transport_list_url, register_url } from "@public/pagelinks";
import { Height } from "@mui/icons-material";
import { ColorContext } from "@public/context/global";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { ProcessLogin } from "@public/api-call/login";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function Submit() {
    const { source, destination, date, returnDate, hasReturn, transport, hasError, sourceId, destinationId } =
        useContext(DestinationContext);

    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const [startLogin, setStartLogin] = useState(false);

    const handleClick = () => {
        sessionStorage.setItem("source", source);
        sessionStorage.setItem("destination", destination);
        sessionStorage.setItem("sourceId", sourceId.toString());
        sessionStorage.setItem("destinationId", destinationId.toString());
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("returnDate", returnDate);
        sessionStorage.setItem("hasReturn", hasReturn.toString());
        sessionStorage.setItem("transport", transport.toString());
        sessionStorage.setItem("processingReturn", "false");
        const username = sessionStorage.getItem("username");
        if (username === null) {
            //open modal
            setOpen(true);
        } else {
            //directly go to transport list
            router.push(transport_list_url);
        }
    };

    const { mode } = useContext(ColorContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        if (username === "" || password === "") return;
        setStartLogin(true);
    };

    useEffect(() => {
        if (!startLogin) return;
        if (username === "" || password === "") return;
        setLoading(true);
        ProcessLogin(username, password)
            .then((res) => {
                console.log(res);
                if (!res.hasError) {
                    setError(false);
                    console.log("login Successful");
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("access_token", res.accessToken);
                    sessionStorage.setItem(
                        "user_id",
                        res.user.user_id.toString()
                    );
                    sessionStorage.setItem("user_email", res.user.email);
                    router.push(transport_list_url);
                } else {
                    console.log("login failed");
                    setError(true);
                    setErrorMessage(res.errorMessage);
                }
            })
            .finally(() => {
                setStartLogin(false);
                setLoading(false);
            });
    }, [startLogin]);

    return (
        <>
            <Button
                color="primary"
                variant="contained"
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor:
                        mode === "dark"
                            ? "rgb(255,255,255,0.05)"
                            : "rgb(255,255,255,1)",
                    color: "#008080",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    padding: "1rem",
                    marginBottom: "2rem",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                    ":hover": {
                        backgroundColor: "#008080",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    },
                }}
                onClick={handleClick}
                disabled={
                    source === "" ||
                    destination === "" ||
                    date === "" ||
                    transport === null || 
                    hasError
                }
            >
                Search Ticket
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Stack
                            spacing={2}
                            direction="column"
                            color={mode === "dark" ? "#FFFFFF" : "#000000"}
                        >
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Please Log In to Continue
                            </Typography>
                            {error && (
                                <Typography
                                    variant="body1"
                                    color="error"
                                    sx={{ textAlign: "center" }}
                                >
                                    {errorMessage}
                                </Typography>
                            )}
                            <FormControl>
                                <TextField
                                    id="username"
                                    label="Username"
                                    variant="standard"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="standard"
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </FormControl>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={handleLogin}
                                disabled={
                                    username === "" ||
                                    password === "" ||
                                    loading
                                }
                            >
                                Log In
                            </Button>
                            <Box sx={{ width: "100%" }}>
                                {loading && <LinearProgress />}
                            </Box>
                            <Typography variant="body1">
                                {`Don't have an account?`}
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => {
                                        router.push(register_url);
                                    }}
                                >
                                    Register
                                </Button>
                            </Typography>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
