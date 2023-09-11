const main_url = "https://triptix-backend.onrender.com";
const get_ticket_history_url = main_url + "/api/user/ticketHistory";

import axios from "axios";
import { TicketHistoryData } from "@public/context/profile";

export async function getTicketHistory(): Promise<TicketHistoryData> {
    const user_id = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("access_token");
    try {
        const response = await axios.post(
            get_ticket_history_url,
            {
                userId: user_id,
            },
            {
                headers: {
                    token: token,
                },
            }
        );
        console.log(JSON.stringify(response.data, null, 4));
        return {
            busTicketInfo: response.data.busTicketInfo || [],
            busQueueTicketInfo: response.data.busQueueTicketInfo || [],
            trainTicketInfo: response.data.trainTicketInfo || [],
            trainQueueTicketInfo: response.data.trainQueueTicketInfo || [],
            airTicketInfo: response.data.airTicketInfo || [],
            airQueueTicketInfo: response.data.airQueueTicketInfo || [], 
        }
    } catch (error) {
        console.log(error);
        return {
            busTicketInfo: [],
            busQueueTicketInfo: [],
            trainTicketInfo: [],
            trainQueueTicketInfo: [],
            airTicketInfo: [],
            airQueueTicketInfo: [],
        };
    }
}
