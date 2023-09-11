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
import { ProcessRegister } from "@public/api-call/register";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import { ProcessLogin } from "@public/api-call/login";
import { home_url, login_url } from "@public/pagelinks";

import LoginImage from "@public/LoginPageImage.png";
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
    const [nationalId, setNationalId] = useState(0);
    const [birthCertificate, setBirthCertificate] = useState(0);
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [registerStart, setRegisterStart] = useState(false);
    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleRegister = () => {
        if (
            username === "" ||
            password === "" ||
            fullName === "" ||
            email === "" ||
            mobile === "" ||
            nationalId === 0 ||
            birthCertificate === 0
        )
            return;
        setRegisterStart(true);
    };

    useEffect(() => {
        if (!registerStart) return;
        setLoading(true);
        ProcessRegister(
            username,
            password,
            fullName,
            email,
            mobile,
            nationalId,
            birthCertificate
        )
            .then((res) => {
                console.log(res);
                if (!res.hasError) {
                    router.push(login_url)
                } else {
                    console.log("register failed");
                    setRegisterError(true);
                    setRegisterErrorMessage(res.message);
                }
            })
            .finally(() => {
                setLoading(false);
                setRegisterStart(false);
            });
    }, [registerStart]);

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
                <Image src={LoginImage} width={950} alt="Login Image" />
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
                {registerError && (
                    <Typography variant="body1" color="error">
                        {registerErrorMessage}
                    </Typography>
                )}
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <FormLabel htmlFor="outlined-adornment-password">
                        Password
                    </FormLabel>
                    <OutlinedInput
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="Mobile"
                        variant="outlined"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="National ID"
                        variant="outlined"
                        value={nationalId}
                        onChange={(e) =>
                            setNationalId(
                                parseInt(
                                    e.target.value === "" ? "0" : e.target.value
                                )
                            )
                        }
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    sx={{
                        width: "25rem",
                    }}
                >
                    <TextField
                        label="Birth Certificate"
                        variant="outlined"
                        value={birthCertificate}
                        onChange={(e) =>
                            setBirthCertificate(
                                parseInt(
                                    e.target.value === "" ? "0" : e.target.value
                                )
                            )
                        }
                    />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        width: "25rem",
                    }}
                    onClick={handleRegister}
                    disabled={
                        loading ||
                        username === "" ||
                        password === "" ||
                        fullName === "" ||
                        email === "" ||
                        mobile === "" ||
                        nationalId === 0 ||
                        birthCertificate === 0
                    }
                >
                    Register
                </Button>
                <Box sx={{ width: "25rem" }}>
                    {loading && <LinearProgress />}
                </Box>

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
