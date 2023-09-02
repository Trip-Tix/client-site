import { Paper, Typography } from "@mui/material";
import { TransportEntry } from "@public/context/list-transport";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

interface TransportCardProps {
    transport: TransportEntry;
}

export default function TransportCard({ transport }: TransportCardProps) {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Stack direction={"column"} spacing={1}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant="h6">
                            Company Name, Brand Name, Coach Type
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Nothing</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">
                            Time, Available Seats, Fare
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Button</Typography>
                    </Grid>
                </Grid>
                <Stack direction={"row"} spacing={1}>
                    <Typography variant="body1">Facilities:</Typography>
                    {transport.fasilites.map((facility) => (
                        <Typography variant="body1" key={facility}>
                            {facility}
                        </Typography>
                    ))}
                </Stack>
                <Stack direction={"row-reverse"} spacing={1}>
                    <Typography variant="body1">Details</Typography>
                    <Typography variant="body1">Price Details</Typography>
                    <Typography variant="body1">Refund Policy</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
