"use client";
import { Box, Card, Button, TextField, Typography, CardContent } from "@mui/material";

export default function Login() {
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
                    Welcome Back!
                </Typography>
                <TextField label="User Name" autoComplete="username" fullWidth />
                <TextField label="Password" type="password" autoComplete="password" fullWidth />
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
                    Log In
                </Button>
                <Button
                    onClick={() => { }}
                >
                    Forgot Password?
                </Button>
            </CardContent>
        </Card>
    );
}