import { TransportEntry, TransportType } from "@public/interface/transport";
import { SeatDetailsFormProps } from "@public/context/seat-selection";
import { Gender } from "@public/context/seat-selection";
import { ticketObject } from "@public/api-call/select-seat";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { payment_url, select_destination_url } from "@public/pagelinks";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const main_url = "https://triptix-backend.onrender.com";
const bus_book_api = main_url + "/api/temporaryBookTicket";
const train_book_api = main_url + "/api/temporaryBookTrainTicket";
const air_book_api = main_url + "/api/temporaryBookAirTicket";

interface bus_ticket_request_object {
    busSeatId: number;
    passengerName: string;
    passengerGender: string;
    passengerMobile: string;
    passengerDob: string;
    passengerNid: number | null;
    passengerBirthCertficate: number | null;
    isTemp: boolean;
}

interface bus_booking_request_object {
    busScheduleId: number;
    passengerInfo: bus_ticket_request_object[];
    source: string;
    destination: string;
}

interface train_ticket_request_object {
    trainSeatId: number;
    passengerName: string;
    passengerGender: string;
    passengerMobile: string;
    passengerDob: string;
    passengerNid: number | null;
    passengerBirthCertficate: number | null;
    isTemp: boolean;
}

interface train_booking_request_object {
    trainScheduleId: number;
    passengerInfo: train_ticket_request_object[];
    source: number;
    destination: number;
    coachId: number;
    trainFare: number;
}

interface air_ticket_request_object {
    airSeatId: number;
    passengerName: string;
    passengerGender: string;
    passengerMobile: string;
    passengerDob: string;
    passengerNid: number | null;
    passengerBirthCertficate: number | null;
    isTemp: boolean;
}

interface air_booking_request_object {
    airScheduleId: number;
    passengerInfo: air_ticket_request_object[];
    source: number;
    destination: number;
    classId: number;
    airFare: number;
}

const processPayment = async (): Promise<boolean> => {
    const forwardTicket: ticketObject = JSON.parse(
        sessionStorage.getItem("forwardTicket") || "{}"
    );
    const returnTicket: ticketObject = JSON.parse(
        sessionStorage.getItem("returnTicket") || "{}"
    );
    const transportType = sessionStorage.getItem("transport") as TransportType;
    const hasReturn = sessionStorage.getItem("hasReturn") === "true";

    if (transportType === TransportType.Bus) {
        const forwardObject: bus_booking_request_object = {
            busScheduleId: forwardTicket.scheduleId,
            passengerInfo: forwardTicket.seatDetails.map((seatDetail) => {
                return {
                    busSeatId: seatDetail.seatID,
                    passengerName: seatDetail.name,
                    passengerGender:
                        seatDetail.Gender === Gender.Male ? "Male" : "Female",
                    passengerMobile: seatDetail.phoneNumber,
                    passengerDob: seatDetail.dateOfBirth,
                    passengerNid:
                        seatDetail.NIDNumber === 0
                            ? null
                            : seatDetail.NIDNumber,
                    passengerBirthCertficate:
                        seatDetail.birthCertificateNumber === 0
                            ? null
                            : seatDetail.birthCertificateNumber,
                    isTemp: seatDetail.isTempBooked,
                };
            }),
            source: sessionStorage.getItem("source") as string,
            destination: sessionStorage.getItem("destination") as string,
        };
        const returnObject: bus_booking_request_object = hasReturn
            ? {
                  busScheduleId: returnTicket.scheduleId,
                  passengerInfo: returnTicket.seatDetails.map((seatDetail) => {
                      return {
                          busSeatId: seatDetail.seatID,
                          passengerName: seatDetail.name,
                          passengerGender:
                              seatDetail.Gender === Gender.Male
                                  ? "Male"
                                  : "Female",
                          passengerMobile: seatDetail.phoneNumber,
                          passengerDob: seatDetail.dateOfBirth,
                          passengerNid:
                              seatDetail.NIDNumber === 0
                                  ? null
                                  : seatDetail.NIDNumber,
                          passengerBirthCertficate:
                              seatDetail.birthCertificateNumber === 0
                                  ? null
                                  : seatDetail.birthCertificateNumber,
                          isTemp: seatDetail.isTempBooked,
                      };
                  }),
                  source: sessionStorage.getItem("destination") as string,
                  destination: sessionStorage.getItem("source") as string,
              }
            : {
                  busScheduleId: 0,
                  passengerInfo: [],
                  source: "",
                  destination: "",
              };

        const request = {
            ticketInfo: [forwardObject],
            userId: sessionStorage.getItem("user_id"),
            source: sessionStorage.getItem("source"),
            destination: sessionStorage.getItem("destination"),
        };
        if (hasReturn) {
            request.ticketInfo.push(returnObject);
        }

        console.log(
            JSON.stringify(
                {
                    body: request,
                    headers: {
                        token: sessionStorage.getItem("access_token"),
                    },
                },
                null,
                2
            )
        );

        try {
            const response = await axios.post(bus_book_api, request, {
                headers: {
                    token: sessionStorage.getItem("access_token"),
                },
            });

            if (response.status === 200) {
                console.log("Successfully booked");
                const token = sessionStorage.getItem("access_token") as string;
                const userId = sessionStorage.getItem("user_id") as string;
                const username = sessionStorage.getItem("username") as string;
                sessionStorage.setItem(
                    "book_response",
                    JSON.stringify(response.data)
                );
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

        return true;
    } else if (transportType === TransportType.Train) {
        const forwardObject: train_booking_request_object = {
            trainScheduleId: forwardTicket.scheduleId,
            passengerInfo: forwardTicket.seatDetails.map((seatDetail) => {
                return {
                    trainSeatId: seatDetail.seatID,
                    passengerName: seatDetail.name,
                    passengerGender:
                        seatDetail.Gender === Gender.Male ? "Male" : "Female",
                    passengerMobile: seatDetail.phoneNumber,
                    passengerDob: seatDetail.dateOfBirth,
                    passengerNid:
                        seatDetail.NIDNumber === 0
                            ? null
                            : seatDetail.NIDNumber,
                    passengerBirthCertficate:
                        seatDetail.birthCertificateNumber === 0
                            ? null
                            : seatDetail.birthCertificateNumber,
                    isTemp: seatDetail.isTempBooked,
                };
            }),
            source: parseInt(sessionStorage.getItem("sourceId") || "0"),
            destination: parseInt(
                sessionStorage.getItem("destinationId") || "0"
            ),
            coachId: parseInt(sessionStorage.getItem("coachId") || "0"),
            trainFare: parseInt(
                sessionStorage.getItem("transportPrice") || "0"
            ),
        };
        const returnObject: train_booking_request_object = hasReturn
            ? {
                  trainScheduleId: returnTicket.scheduleId,
                  passengerInfo: returnTicket.seatDetails.map((seatDetail) => {
                      return {
                          trainSeatId: seatDetail.seatID,
                          passengerName: seatDetail.name,
                          passengerGender:
                              seatDetail.Gender === Gender.Male
                                  ? "Male"
                                  : "Female",
                          passengerMobile: seatDetail.phoneNumber,
                          passengerDob: seatDetail.dateOfBirth,
                          passengerNid:
                              seatDetail.NIDNumber === 0
                                  ? null
                                  : seatDetail.NIDNumber,
                          passengerBirthCertficate:
                              seatDetail.birthCertificateNumber === 0
                                  ? null
                                  : seatDetail.birthCertificateNumber,
                          isTemp: seatDetail.isTempBooked,
                      };
                  }),
                  source: parseInt(
                      sessionStorage.getItem("destinationId") || "0"
                  ),
                  destination: parseInt(
                      sessionStorage.getItem("sourceId") || "0"
                  ),
                  coachId: parseInt(sessionStorage.getItem("coachId") || "0"),
                  trainFare: parseInt(
                      sessionStorage.getItem("transportPrice") || "0"
                  ),
              }
            : {
                  trainScheduleId: 0,
                  passengerInfo: [],
                  source: 0,
                  destination: 0,
                  coachId: 0,
                  trainFare: 0,
              };

        const request = {
            ticketInfo: [forwardObject],
            userId: sessionStorage.getItem("user_id"),
            source: sessionStorage.getItem("source"),
            destination: sessionStorage.getItem("destination"),
        };
        if (hasReturn) {
            request.ticketInfo.push(returnObject);
        }

        console.log(
            JSON.stringify(
                {
                    body: request,
                    headers: {
                        token: sessionStorage.getItem("access_token"),
                    },
                },
                null,
                2
            )
        );

        try {
            const response = await axios.post(train_book_api, request, {
                headers: {
                    token: sessionStorage.getItem("access_token"),
                },
            });

            if (response.status === 200) {
                console.log("Successfully booked");
                const token = sessionStorage.getItem("access_token") as string;
                const userId = sessionStorage.getItem("user_id") as string;
                const username = sessionStorage.getItem("username") as string;
                sessionStorage.setItem(
                    "book_response",
                    JSON.stringify(response.data)
                );
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    } else if (transportType === TransportType.Flight) {
        const forwardObject: air_booking_request_object = {
            airScheduleId: forwardTicket.scheduleId,
            passengerInfo: forwardTicket.seatDetails.map((seatDetail) => {
                return {
                    airSeatId: seatDetail.seatID,
                    passengerName: seatDetail.name,
                    passengerGender:
                        seatDetail.Gender === Gender.Male ? "Male" : "Female",
                    passengerMobile: seatDetail.phoneNumber,
                    passengerDob: seatDetail.dateOfBirth,
                    passengerNid:
                        seatDetail.NIDNumber === 0
                            ? null
                            : seatDetail.NIDNumber,
                    passengerBirthCertficate:
                        seatDetail.birthCertificateNumber === 0
                            ? null
                            : seatDetail.birthCertificateNumber,
                    isTemp: seatDetail.isTempBooked,
                };
            }),
            source: parseInt(sessionStorage.getItem("sourceId") || "0"),
            destination: parseInt(
                sessionStorage.getItem("destinationId") || "0"
            ),
            classId: parseInt(sessionStorage.getItem("coachId") || "0"),
            airFare: parseInt(sessionStorage.getItem("transportPrice") || "0"),
        };
        const returnObject: air_booking_request_object = hasReturn
            ? {
                  airScheduleId: returnTicket.scheduleId,
                  passengerInfo: returnTicket.seatDetails.map((seatDetail) => {
                      return {
                          airSeatId: seatDetail.seatID,
                          passengerName: seatDetail.name,
                          passengerGender:
                              seatDetail.Gender === Gender.Male
                                  ? "Male"
                                  : "Female",
                          passengerMobile: seatDetail.phoneNumber,
                          passengerDob: seatDetail.dateOfBirth,
                          passengerNid:
                              seatDetail.NIDNumber === 0
                                  ? null
                                  : seatDetail.NIDNumber,
                          passengerBirthCertficate:
                              seatDetail.birthCertificateNumber === 0
                                  ? null
                                  : seatDetail.birthCertificateNumber,
                          isTemp: seatDetail.isTempBooked,
                      };
                  }),
                  source: parseInt(
                      sessionStorage.getItem("destinationId") || "0"
                  ),
                  destination: parseInt(
                      sessionStorage.getItem("sourceId") || "0"
                  ),
                  classId: parseInt(sessionStorage.getItem("coachId") || "0"),
                  airFare: parseInt(
                      sessionStorage.getItem("transportPrice") || "0"
                  ),
              }
            : {
                  airScheduleId: 0,
                  passengerInfo: [],
                  source: 0,
                  destination: 0,
                  classId: 0,
                  airFare: 0,
              };

        const request = {
            ticketInfo: [forwardObject],
            userId: sessionStorage.getItem("user_id"),
            source: sessionStorage.getItem("source"),
            destination: sessionStorage.getItem("destination"),
        };
        if (hasReturn) {
            request.ticketInfo.push(returnObject);
        }

        console.log(
            JSON.stringify(
                {
                    body: request,
                    headers: {
                        token: sessionStorage.getItem("access_token"),
                    },
                },
                null,
                2
            )
        );

        try {
            const response = await axios.post(air_book_api, request, {
                headers: {
                    token: sessionStorage.getItem("access_token"),
                },
            });

            if (response.status === 200) {
                console.log("Successfully booked");
                const token = sessionStorage.getItem("access_token") as string;
                const userId = sessionStorage.getItem("user_id") as string;
                const username = sessionStorage.getItem("username") as string;
                const user_email = sessionStorage.getItem("user_email") as string;
                const mobile = sessionStorage.getItem("mobile") as string;                
                sessionStorage.setItem(
                    "book_response",
                    JSON.stringify(response.data)
                );
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    } else {
        return false;
    }
};

export default function Payment() {
    const [isProcessing, setIsProcessing] = useState(true);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [triggerPageChange, setTriggerPageChange] = useState(false);
    const [triggerApiCall, setTriggerApiCall] = useState(false);

    useEffect(() => {
        setTriggerApiCall(true);
    }, []);

    const router = useRouter();
    useEffect(() => {
        if (!triggerApiCall) return;
        setIsProcessing(true);
        processPayment()
            .then((result) => {
                if (result) {
                    console.log("Successfully booked");
                    setMessage("Successfully booked");
                    setSuccess(true);
                } else {
                    console.log("Failed to book");
                    setMessage("Failed to book");
                    setSuccess(false);
                }
            })
            .finally(() => {
                setIsProcessing(false);
                setTriggerPageChange(true);
            });
    }, [triggerApiCall]);

    useEffect(() => {
        if (triggerPageChange) {
            setTimeout(() => {
                if (success) {
                    router.push(payment_url);
                } else {
                    router.push(select_destination_url);
                }
            }, 2000);
        }
    }, [triggerPageChange]);

    return (
        <Stack spacing={2} alignContent={"center"} direction={"column"}>
            {isProcessing ? (
                <>
                    <Typography variant="h2">
                        Please wait while we process your booking
                    </Typography>
                    <CircularProgress />
                </>
            ) : (
                <>
                    <Typography variant="h2">{message}</Typography>
                    <Typography variant="h3">Redirecting You</Typography>
                    <CircularProgress />
                </>
            )}
        </Stack>
    );
}
