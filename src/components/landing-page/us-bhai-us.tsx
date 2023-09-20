import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import Shamit from "@public/shamit.jpg";
import Zeeon from "@public/zeeon.jpg";
import Fahmid from "@public/fahmid.png";

import { motion } from "framer-motion";

export default function UsBhaiUs() {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{
                paddingTop: "2rem",
            }}
        >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Avatar
                    alt="Shamit"
                    src={Shamit.src}
                    sx={{ width: 100, height: 100 }}
                />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> 
                <Avatar
                    alt="Zeeon"
                    src={Zeeon.src}
                    sx={{ width: 100, height: 100 }}
                />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Avatar
                    alt="Fahmid"
                    src={Fahmid.src}
                    sx={{ width: 100, height: 100 }}
                />
            </motion.div>
        </Stack>
    );
}
