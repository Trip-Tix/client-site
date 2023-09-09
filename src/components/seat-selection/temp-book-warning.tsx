import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import WarningIcon from '@mui/icons-material/Warning';

export default function TempBookWarning() {
    return (
        <Paper
            sx={{
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}
            spacing={2}>
                <Icon
                    sx = {{
                        width: "5rem",
                        height: "5rem",
                    }}
                >
                    <WarningIcon 
                        sx = {{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Icon>
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    spacing={1}
                >
                    <Typography variant={"h6"}>
                        You have a temporary booking
                    </Typography>
                    <Typography variant={"caption"}>
                        Temporary Booked tickets will be available to purchase
                        when the ticket has been freed
                    </Typography>
                    <Typography variant={"caption"}>
                        You will be notified when the ticket is freed
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
