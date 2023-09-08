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
    const fakeData = {
        user: {
            user_id: 1,
            username: "test",
            full_name: "Test User",
            national_id: 1234567890123,
            birth_certificate: 1234567890123,
            email: "test@gmail.com",
            mobile: 1234567890,
        },
        accessToken: "1234567890",
        hasError: false,
        errorMessage: "",
    };

    console.log({
        message: "Login API called",
        received: {
            username,
            password,
        },
        sent: fakeData,
    });
    return fakeData;
};
