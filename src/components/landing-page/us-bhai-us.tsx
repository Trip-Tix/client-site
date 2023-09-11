import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import Shamit from "@public/shamit.jpg";
import Zeeon from "@public/zeeon.jpg";
import Fahmid from "@public/fahmid.jpg";

export default function UsBhaiUs() {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{
            padding: "4rem",
        }}>
            <Avatar
                alt="Shamit"
                src={Shamit.src}
                sx={{ width: 100, height: 100 }}
            />
            <Avatar
                alt="Zeeon"
                src={Zeeon.src}
                sx={{ width: 100, height: 100 }}
            />
            <Avatar
                alt="Fahmid"
                src={Fahmid.src}
                sx={{ width: 100, height: 100 }}
            />
        </Stack>
    );
}
