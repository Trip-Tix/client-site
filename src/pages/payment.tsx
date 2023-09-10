import Navbar from "@/components/destination/navbar";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";
import { ColorContext } from "@public/context/global";
import {
    ResponseData,
    parseResponseDataFromStorage,
    handlePayment,
} from "@public/api-call/payment";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

import { useState, useEffect, useContext } from "react";
export default function Payment() {
    const [totalTicket, setTotalTicket] = useState(0);
    const [totalReturnTicket, setTotalReturnTicket] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [responseData, setResponseData] = useState<ResponseData>({
        userId: 0,
        grandTotalFare: 0,
        tempTotalFare: 0,
        ticketInfo: [],
        tempTicketInfo: [],
    });

    useEffect(() => {
        parseResponseDataFromStorage().then((res) => {
            setResponseData(res);
            setTotalTicket(
                res.ticketInfo.reduce((acc, cur) => {
                    return acc + cur.numberOfTickets;
                }, 0)
            );
            setTotalReturnTicket(
                res.tempTicketInfo.reduce((acc, cur) => {
                    return acc + cur.numberOfTickets;
                }, 0)
            );
        });
    }, []);

    const { mode } = useContext(ColorContext);
    const [startPayment, setStartPayment] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (startPayment) {
            setLoading(true);
            handlePayment().then((res) => {
                if (res) {
                    console.log(res);
                    router.push(res);
                } else {
                    alert("Payment Failed");
                }
                setLoading(false);
            }).catch((err) => {
                alert("Payment Failed");
                setLoading(false);
            });
        }
    }, [startPayment]);

    return (
        <>
            <Stack
                direction={"column"}
                spacing={2}
                sx={{
                    background: mode === "dark" ? "#121212" : "#fff",
                    color: mode === "dark" ? "#fff" : "#000",
                    minHeight: "100vh",
                }}
            >
                <Navbar />
                <Stack sx={{ padding: "2rem" }}>
                    <Typography variant={"h3"}>Payment Confirmation</Typography>
                    <Typography variant={"body1"}>
                        User ID: {responseData.userId}
                    </Typography>

                    {responseData.ticketInfo.length > 0 && (
                        <Paper sx={{ padding: "1rem" }}>
                            <Typography variant={"h6"}>
                                Confirm Ticket Info
                            </Typography>

                            <Typography variant={"body1"}>
                                Grand Total Fare: {responseData.grandTotalFare}
                            </Typography>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ticket ID</TableCell>
                                            <TableCell align="right">
                                                Bus Schedule ID
                                            </TableCell>
                                            <TableCell align="right">
                                                Total Fare
                                            </TableCell>
                                            <TableCell align="right">
                                                Number of Tickets
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {responseData.ticketInfo.map((row) => (
                                            <TableRow
                                                key={row.ticketId}
                                                sx={{
                                                    "&:last-child td, &:last-child th":
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.ticketId}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.busScheduleId}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.totalFare}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.numberOfTickets}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell />
                                            <TableCell align="right">
                                                Total:
                                            </TableCell>
                                            <TableCell align="right">
                                                {responseData.grandTotalFare}
                                            </TableCell>
                                            <TableCell align="right">
                                                {totalTicket}
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}

                    {responseData.tempTicketInfo.length > 0 && (
                        <Paper sx={{ padding: "1rem" }}>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                alignItems={"center"}
                            >
                                <Typography variant={"h6"}>
                                    Temp Ticket Info
                                </Typography>
                                <IconButton
                                    onClick={() => setShowDetails(!showDetails)}
                                    sx={{
                                        display: showDetails ? "none" : "block",
                                        color:
                                            mode === "dark"
                                                ? "yellow"
                                                : "#adb004",
                                    }}
                                >
                                    <WarningIcon />
                                </IconButton>
                            </Stack>
                            {showDetails && (
                                <Paper sx={{ padding: "1rem" }} elevation={3}>
                                    <Stack
                                        direction={"row"}
                                        alignItems={"flex-start"}
                                        justifyContent={"space-between"}
                                    >
                                        <Stack direction={"column"} spacing={0}>
                                            <Typography variant={"body1"}>
                                                Temporary Ticket Means someone
                                                also booked the ticket
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                You can not currently buy
                                                temporary booked tickets
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                If the temporary booked tickets
                                                are somehow freed, You will be
                                                notified
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                You can buy the ticket then
                                            </Typography>
                                        </Stack>
                                        <IconButton
                                            onClick={() =>
                                                setShowDetails(false)
                                            }
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Stack>
                                </Paper>
                            )}
                            <Typography variant={"body1"}>
                                Grand Total Fare: {responseData.tempTotalFare}
                            </Typography>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ticket ID</TableCell>
                                            <TableCell align="right">
                                                Bus Schedule ID
                                            </TableCell>
                                            <TableCell align="right">
                                                Total Fare
                                            </TableCell>
                                            <TableCell align="right">
                                                Number of Tickets
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {responseData.tempTicketInfo.map(
                                            (row) => (
                                                <TableRow
                                                    key={row.ticketId}
                                                    sx={{
                                                        "&:last-child td, &:last-child th":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                >
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        {row.ticketId}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.busScheduleId}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.totalFare}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.numberOfTickets}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell />
                                            <TableCell align="right">
                                                Total:
                                            </TableCell>
                                            <TableCell align="right">
                                                {responseData.tempTotalFare}
                                            </TableCell>
                                            <TableCell align="right">
                                                {totalReturnTicket}
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}

                    {responseData.ticketInfo.length > 0 ? (
                        <Button
                            variant="contained"
                            onClick={() => setStartPayment(true)}
                            disabled={loading}
                        >
                            Continue to payment page
                        </Button>
                    ) : (
                        <Button variant="contained" disabled>
                            Continue to Home Page
                        </Button>
                    )}
                    {loading && <LinearProgress sx={{ width: "100%" }} />}
                </Stack>
            </Stack>
        </>
    );
}
