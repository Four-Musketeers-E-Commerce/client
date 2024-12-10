"use client";
import { Card, Button, TextField, Typography, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    return (
        <Card
            sx={{
                width: "80%",
                margin: "auto",
                borderRadius: "16px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15)"
            }}
        >
            <CardContent
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    gap: 2
                }}
            >
                <Typography variant="h5" textAlign="start" width="100%">
                    Welcome On Board!
                </Typography>
                <TextField label="User Name" autoComplete="username" fullWidth />
                <TextField label="Password" type="password" autoComplete="password" fullWidth />
                <TextField label="Confirm Your Password" type="password" autoComplete="password" fullWidth />
                <Button
                    variant="contained"
                    color="warning"
                    width="60%"
                    sx={{
                        borderRadius: "16px",
                        textTransform: "none",
                        fontSize: "large"
                    }}
                >
                    Register
                </Button>
                <Button
                    onClick={() => { router.push("/login") }}
                >
                    Already have an account?
                </Button>
            </CardContent>
        </Card>
    );
}