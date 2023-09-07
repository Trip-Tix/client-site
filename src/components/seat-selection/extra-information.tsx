import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Legend from "@/components/seat-selection/legends";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckIcon from "@mui/icons-material/Check";

export default function ExtraInformation() {
    return (
        <Paper sx={{ flexGrow: 1, height: "100%", padding: "1rem" }}>
            <Stack
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                spacing={5}
            >
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    spacing={2}
                >
                    <Typography
                        variant={"h4"}
                        sx={{
                            fontWeight: "light",
                        }}
                    >
                        Legends:
                    </Typography>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#008080",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Icon>
                                <CheckIcon  />
                            </Icon>
                        </Box>
                        <Typography variant="caption">Available</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "green",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Icon>
                                <BookmarkIcon />
                            </Icon>
                        </Box>
                        <Typography variant="caption">Selected</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#C8C8C8",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Icon>
                                <CloseIcon />
                            </Icon>
                        </Box>
                        <Typography variant="caption">Temporary Booked</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#888888",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Icon>
                                <CloseIcon />
                            </Icon>
                        </Box>
                        <Typography variant="caption">Booked</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#888888",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant={"h6"}>M</Typography>
                        </Box>
                        <Typography variant="caption">Male</Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1} alignItems={"center"}>
                        <Box
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#888888",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant={"h6"}>F</Typography>
                        </Box>
                        <Typography variant="caption">Female</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
}
