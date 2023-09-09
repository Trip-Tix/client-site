import axios from "axios";
import { useState } from "react";
const main_url = "https://triptix-backend.onrender.com";
const login_api = main_url + "/api/user/login";

interface LoginResponse {
    user: {
        user_id: number;
        username: string;
        full_name: string;
        national_id: number;
        birth_certificate: number;
        email: string;
        mobile: number;
    };
    accessToken: string;
    hasError: boolean;
    errorMessage: string;
}


export const ProcessLogin = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const res = await axios.post(login_api, {
            username: username,
            password: password,
        });

        const returningResponse: LoginResponse = {
            user: {
                user_id: 0,
                username: "",
                full_name: "",
                national_id: 0,
                birth_certificate: 0,
                email: "",
                mobile: 0,
            },
            accessToken: "",
            hasError: true,
            errorMessage: "",
        };

        if(res.status === 200){
            returningResponse.hasError = false;
            returningResponse.user.birth_certificate = res.data.user.birth_certificate;
            returningResponse.user.email = res.data.user.email;
            returningResponse.user.full_name = res.data.user.full_name;
            returningResponse.user.mobile = res.data.user.mobile;
            returningResponse.user.national_id = res.data.user.national_id;
            returningResponse.user.username = res.data.user.username;
            returningResponse.user.user_id = res.data.user.user_id;
            returningResponse.accessToken = res.data.accessToken;
        } else {
            returningResponse.hasError = true;
            returningResponse.errorMessage = res.data.message;
        }
        return returningResponse;
    } catch (err: any) {
        console.log(err);
        const returningResponse: LoginResponse = {
            user: {
                user_id: 0,
                username: "",
                full_name: "",
                national_id: 0,
                birth_certificate: 0,
                email: "",
                mobile: 0,
            },
            accessToken: "",
            hasError: true,
            errorMessage: err.response.data.message,
        };

        return returningResponse;
        
    }
};
