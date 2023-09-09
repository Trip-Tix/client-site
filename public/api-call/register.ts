import axios from "axios";
const main_url = "https://triptix-backend.onrender.com";
const register_api = main_url + "/api/user/signup";

export interface RegisterProps {
    username: string;
    password: string;
    fullName: string;
    email: string;
    mobile: string;
    nationalId: number;
    birthCertificate: number;
}

/*
  "username": "zeeon",
  "password": "123456",
  "fullName": "Iftekhar Zeeon",
  "email": "mahbubzeeon@gmail.com",
  "mobile": "+8801947429553",
  "nationalId": "123456789",
  "birthCertificate": "1234567890123456789"
*/

interface RegisterResponse {
    message: string;
    hasError: boolean;
}

export const ProcessRegister = async (
    username: string,
    password: string,
    fullName: string,
    email: string,
    mobile: string,
    nationalId: number,
    birthCertificate: number
): Promise<RegisterResponse> => {
    try {
        const res = await axios.post(register_api, {
            username: username,
            password: password,
            fullName: fullName,
            email: email,
            mobile: mobile,
            nationalId: nationalId,
            birthCertificate: birthCertificate,
        });
        console.log(res);
        if (res.status === 204 || res.status === 200 || res.status === 201) {
            return {
                message: res.data.message,
                hasError: false,
            };
        } else {
            return {
                message: res.data.message,
                hasError: true,
            };
        }
    } catch (error: any) {
        return {
            message: error.response.data.message,
            hasError: true,
        };
    }
};
