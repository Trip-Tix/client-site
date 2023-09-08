import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Image from "next/image";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { ProcessLogin } from "@public/api-call/login";
import { home_url, register_url } from "@public/pagelinks";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");
    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = () => {
        if (username === "") {
            setUsernameError(true);
            setUsernameErrorMessage("Username cannot be empty");
        } else {
            setUsernameError(false);
            setUsernameErrorMessage("");
        }
        if (password === "") {
            setPasswordError(true);
            setPasswordErrorMessage("Password cannot be empty");
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }
        if (username !== "" && password !== "") {
            setLoading(true);
            ProcessLogin(username, password).then((res) => {
                if (res.hasError) {
                    setLoginError(true);
                    setLoginErrorMessage(res.errorMessage);
                } else {
                    setLoginError(false);
                    setLoginErrorMessage("");
                    sessionStorage.setItem("username", res.user.username);
                    sessionStorage.setItem("userFullName", res.user.full_name);
                    sessionStorage.setItem("userEmail", res.user.email);
                    sessionStorage.setItem("accessToken", res.accessToken);
                    router.push(home_url);
                }
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        if (username !== "") {
            setUsernameError(false);
            setUsernameErrorMessage("");
        }
    }, [username]);

    useEffect(() => {
        if (password !== "") {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }
    }, [password]);

    return (
        <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100vh" }}
        >
            <Stack
                spacing={2}
                direction="column"
                sx={{
                    width: "50%",
                }}
            >
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </Stack>
            <Stack
                spacing={2}
                direction="column"
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    width: "50%",
                    padding: "2rem",
                }}
            >
                <Typography variant="h4">Login</Typography>
                {loginError && (
                    <Typography variant="body1" color="error">
                        {loginErrorMessage}
                    </Typography>
                )}
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <TextField
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        sx={{ width: "30rem" }}
                        error={usernameError}
                        helperText={usernameErrorMessage}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        sx={{ width: "30rem" }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
                    />
                    <FormHelperText error={passwordError}>
                        {passwordErrorMessage}
                    </FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        width: "30rem",
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Stack direction="column" spacing={0} alignItems={"center"}>
                    <Typography variant="body1">
                        {`Don't have an account?`}
                        <Button
                            variant="text"
                            color="primary"
                            onClick={() => router.push(register_url)}
                        >
                            {`Sign up`}
                        </Button>
                    </Typography>

                    <Typography variant="body1">
                        {`Forgot your password?`}
                        <Button variant="text" color="primary">
                            {`Reset password`}
                        </Button>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
