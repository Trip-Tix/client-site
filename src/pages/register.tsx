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
import { home_url, login_url } from "@public/pagelinks";

interface RegisterProps {
    username: string;
    password: string;
    fullName: string;
    email: string;
    mobile: string;
    nationalId: number;
    birthCertificate: number;
}

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [nationalId, setNationalId] = useState("");
    const [birthCertificate, setBirthCertificate] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [fullNameError, setFullNameError] = useState(false);
    const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [mobileError, setMobileError] = useState(false);
    const [mobileErrorMessage, setMobileErrorMessage] = useState("");
    const [nationalIdError, setNationalIdError] = useState(false);
    const [nationalIdErrorMessage, setNationalIdErrorMessage] = useState("");
    const [birthCertificateError, setBirthCertificateError] = useState(false);
    const [birthCertificateErrorMessage, setBirthCertificateErrorMessage] =
        useState("");
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState("");
    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleRegister = () => {
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
        if (fullName === "") {
            setFullNameError(true);
            setFullNameErrorMessage("Full Name cannot be empty");
        } else {
            setFullNameError(false);
            setFullNameErrorMessage("");
        }
        if (email === "") {
            setEmailError(true);
            setEmailErrorMessage("Email cannot be empty");
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }
        if (mobile === "") {
            setMobileError(true);
            setMobileErrorMessage("Mobile cannot be empty");
        }
        if (nationalId === "") {
            setNationalIdError(true);
            setNationalIdErrorMessage("National ID cannot be empty");
        }
        if (birthCertificate === "") {
            setBirthCertificateError(true);
            setBirthCertificateErrorMessage(
                "Birth Certificate cannot be empty"
            );
        }
        if (
            username !== "" &&
            password !== "" &&
            fullName !== "" &&
            email !== "" &&
            mobile !== "" &&
            nationalId !== "" &&
            birthCertificate !== ""
        ) {
            console.log("Lemme Cook");
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

    useEffect(() => {
        if (fullName !== "") {
            setFullNameError(false);
            setFullNameErrorMessage("");
        }
    }, [fullName]);

    useEffect(() => {
        if (email !== "") {
            setEmailError(false);
            setEmailErrorMessage("");
        }
    }, [email]);

    useEffect(() => {
        if (mobile !== "") {
            setMobileError(false);
            setMobileErrorMessage("");
        }
    }, [mobile]);

    useEffect(() => {
        if (nationalId !== "") {
            setNationalIdError(false);
            setNationalIdErrorMessage("");
        }
    }, [nationalId]);

    useEffect(() => {
        if (birthCertificate !== "") {
            setBirthCertificateError(false);
            setBirthCertificateErrorMessage("");
        }
    }, [birthCertificate]);

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            spacing={2}
            sx={{
                width: "100%",
                height: "100vh",
            }}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent={"center"}
                spacing={2}
                sx={{
                    width: "50%",
                    height: "100%",
                }}
            >
                <Image
                    src="/images/undraw_Login_re_4vu2.svg"
                    alt="Login"
                    width={500}
                    height={500}
                />
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent={"center"}
                spacing={2}
                sx={{
                    width: "50%",
                    height: "100%",
                }}
            >
                <Typography variant="h4">Register</Typography>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={usernameError}
                >
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={usernameError}
                    />
                    <FormHelperText>{usernameErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={passwordError}
                >
                    <FormLabel htmlFor="outlined-adornment-password">
                        Password
                    </FormLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
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
                    />
                    <FormHelperText>{passwordErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={fullNameError}
                >
                    <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        error={fullNameError}
                    />
                    <FormHelperText>{fullNameErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={emailError}
                >
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                    />
                    <FormHelperText>{emailErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={mobileError}
                >
                    <TextField
                        id="outlined-basic"
                        label="Mobile"
                        variant="outlined"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        error={mobileError}
                    />
                    <FormHelperText>{mobileErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={nationalIdError}
                >
                    <TextField
                        id="outlined-basic"
                        label="National ID"
                        variant="outlined"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        error={nationalIdError}
                    />
                    <FormHelperText>{nationalIdErrorMessage}</FormHelperText>
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                    error={birthCertificateError}
                >
                    <TextField
                        id="outlined-basic"
                        label="Birth Certificate"
                        variant="outlined"
                        value={birthCertificate}
                        onChange={(e) => setBirthCertificate(e.target.value)}
                        error={birthCertificateError}
                    />
                    <FormHelperText>
                        {birthCertificateErrorMessage}
                    </FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        width: "25rem",
                    }}
                    onClick={handleRegister}
                >
                    Register
                </Button>

                <Stack direction="column" spacing={0} alignItems={"center"}>
                    <Typography variant="body1">
                        {`Already have an account?`}
                        <Button
                            variant="text"
                            onClick={() => router.push(login_url)}
                        >
                            {`Login`}
                        </Button>
                    </Typography>

                    <Typography variant="body1">
                        Contact us
                        <Button variant="text" color="primary">
                            {`Here`}
                        </Button>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
