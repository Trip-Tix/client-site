import { useRouter } from "next/router";
import { useEffect } from "react";
import { home_url } from "@public/pagelinks";

export default function LogOut() {
    const router = useRouter();

    useEffect(() => {
        sessionStorage.clear();
        router.push(home_url);
    }, []);

    return <></>;
}
