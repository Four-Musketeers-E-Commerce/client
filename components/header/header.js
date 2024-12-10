"use client";
import { Box, Button, Icon, IconButton, InputBase, Paper, Typography } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import { useState } from "react";
import AccountMenu from "./account-menu";

export default function Header() {
    const router = useRouter();
    const [accountAnchorEl, setAccountAnchorEl] = useState(null)
    const [openAccountMenu, setOpenAccountMenu] = useState(false)

    const handleOpenAccountMenu = (event) => {
        setAccountAnchorEl(event.currentTarget);
        setOpenAccountMenu(true);
    }

    const handleCloseAccountMenu = () => {
        setAccountAnchorEl(null);
        setOpenAccountMenu(false);
    }

    return (
        <Box
            display="flex"
            flexDirection="row"
            alignContent="center"
            justifyContent="space-between"
            padding="15px"
        >
            <Button
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    color: "#F87A53",
                    textTransform: "none",
                    gap: "10px",
                }}
                onClick={() => router.push("/")}
            >
                <Typography variant="h4">
                    Four Musketeers
                </Typography>
                <LocalFireDepartmentIcon fontSize="large" sx={{ rotate: "-35deg" }} />
            </Button>
            <Paper
                component="form"
                sx={{ 
                    p: '2px 4px', 
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'center', 
                    width: "500px",
                    borderRadius: "16px"
                }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Products"
                    inputProps={{ 'aria-label': 'search products' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                gap="15px"
            // sx={{
            //     position: "absolute",
            //     right: "3%",
            //     transform: "translateX(3%)"
            // }}
            >
                <IconButton
                    color="primary"
                    onClick={() => { router.push("/shopping-cart") }}
                >
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
                <Box
                    onMouseEnter={handleOpenAccountMenu}
                    onMouseLeave={handleCloseAccountMenu}
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1px",
                        zIndex: 0
                    }}
                >
                    <AccountCircleOutlinedIcon fontSize="large" />
                    {openAccountMenu ?
                        <KeyboardArrowUpOutlinedIcon fontSize="medium" /> :
                        <KeyboardArrowDownOutlinedIcon fontSize="medium" />
                    }
                    <AccountMenu
                        anchorEl={accountAnchorEl}
                        open={openAccountMenu}
                        handleCloseAccountMenu={handleCloseAccountMenu}
                    />
                </Box>
            </Box>
        </Box>
    );
}