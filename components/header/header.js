"use client";
import { Box, Button, Icon, IconButton, InputBase, Paper, Typography } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import { useState } from "react";
import AccountMenu from "./account-menu";
import ProductMenu from "./product-menu";

export default function Header() {
    const router = useRouter();
    const [productMenuAnchorEl, setProductMenuAnchorEl] = useState(null)
    const [openProductMenu, setOpenProductMenu] = useState(false)
    const [accountAnchorEl, setAccountAnchorEl] = useState(null)
    const [openAccountMenu, setOpenAccountMenu] = useState(false)

    const handleOpenProductMenu = (event) => {
        setProductMenuAnchorEl(event.currentTarget);
        setOpenProductMenu(true);
    }

    const handleCloseProductMenu = () => {
        setProductMenuAnchorEl(null);
        setOpenProductMenu(false);
    }

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
            sx={{
                background: "linear-gradient(to left, #608BC1, #133E87)"
            }}
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
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: "monospace"
                    }}
                >
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
                    borderRadius: "16px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)"
                }}
            >
                <Box
                    onMouseOver={handleOpenProductMenu}
                    onMouseLeave={handleCloseProductMenu}
                >
                    <MenuIcon />
                    <ProductMenu
                        anchorEl={productMenuAnchorEl}
                        open={openProductMenu}
                        onClose={handleCloseProductMenu}
                    />
                </Box>
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
            >
                <IconButton
                    color="warning"
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
                    <AccountCircleOutlinedIcon fontSize="large" color="secondary" />
                    <AccountMenu
                        anchorEl={accountAnchorEl}
                        open={openAccountMenu}
                        onClose={handleCloseAccountMenu}
                    />
                </Box>
            </Box>
        </Box>
    );
}