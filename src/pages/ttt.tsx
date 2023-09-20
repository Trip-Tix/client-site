import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Head from "next/head";

import { useState, useEffect } from "react";

export default function TTT() {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [turn, setTurn] = useState<"X" | "O">("X");

    const checkWinner = () => {
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] === board[i][1] &&
                board[i][1] === board[i][2] &&
                board[i][0] !== ""
            )
                return board[i][0];
            if (
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i] &&
                board[0][i] !== ""
            )
                return board[0][i];
        }
        if (
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] &&
            board[0][0] !== ""
        )
            return board[0][0];
        if (
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0] &&
            board[0][2] !== ""
        )
            return board[0][2];
        return "";
    };

    useEffect(() => {
        const winner = checkWinner();
        if (winner !== "") {
            alert(`${winner} won!`);
            setBoard([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]);
            setTurn("X");
        }
    }, [board]);

    return (
        <>
            <Head>
                <title>TTT</title>
            </Head>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",

                    paddingTop: "2rem",
                    width: "25vw",
                }}
            >
                <ArrowBackIcon
                    sx={{ fontSize: 50, cursor: "pointer" }}
                    onClick={() => window.history.back()}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "2rem",
                    width: "25vw",
                }}
            >
                {turn === "X" ? (
                    <CloseIcon sx={{ fontSize: 50 }} />
                ) : (
                    <RadioButtonUncheckedIcon sx={{ fontSize: 50 }} />
                )}
            </Box>
            <Box sx={{ padding: "6rem", height: "40vh", width: "30vw" }}>
                <Grid container spacing={1}>
                    {[0, 1, 2].map((row) => (
                        <div key={row} style={{ display: "flex" }}>
                            {[0, 1, 2].map((col) => (
                                <Grid key={col} xs={4}>
                                    <Box
                                        sx={{
                                            bgcolor: "primary.main",
                                            height: 100,
                                            width: 100,
                                            cursor:
                                                board[row][col] === ""
                                                    ? "pointer"
                                                    : "not-allowed",
                                        }}
                                        onClick={() => {
                                            const tempBoard = [...board];
                                            if (tempBoard[row][col] !== "")
                                                return;
                                            tempBoard[row][col] = turn;
                                            setBoard(tempBoard);
                                            setTurn(turn === "X" ? "O" : "X");
                                        }}
                                    >
                                        {board[row][col] === "X" ? (
                                            <CloseIcon sx={{ fontSize: 100 }} />
                                        ) : board[row][col] === "O" ? (
                                            <RadioButtonUncheckedIcon
                                                sx={{ fontSize: 100 }}
                                            />
                                        ) : null}
                                    </Box>
                                </Grid>
                            ))}
                        </div>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
