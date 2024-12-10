"use client";
import { Box, Button, Card, CardContent, IconButton, InputBase, Link, List, ListItem, Paper, Typography } from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Checkbox from '@mui/material/Checkbox';

const testItems = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        productUrl: "",
        photoUrl: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-16pm/deserttitanium/landscape-front.png",
        quantity: 2,
        price: 2147,
        checked: true
    },
    {
        id: 2,
        name: "Apple TV",
        productUrl: "",
        photoUrl: "https://www.apple.com/newsroom/images/product/tv/standard/Apple_unveils-the-next-gen-of-AppleTV4K_042021.jpg.landing-big_2x.jpg",
        quantity: 1,
        price: 599,
        checked: true
    },
    {
        id: 3,
        name: "Meta Wayfarer",
        productUrl: "",
        photoUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1p0Aa-I5HWqDucBwNTqHdovbkRM-BiMvel85192eMp13jcWP5oFaYHEyGMi3rfKltf4Nf_HOGeYKRyfbNni6V-NzD0SlLZo4uqp-Pfhid&usqp=CAc",
        quantity: 1,
        price: 449,
        checked: true
    }
];

const cardStyle = {
    border: "1px solid #000",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
};

export default function ShoppingCart() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState(testItems);

    const handleCheck = (id) => {
        setCartItems(prev => prev.map(
            item => item.id === id ? { ...item, checked: !item.checked } : item
        ));
    }

    const handleRemoveItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleIncreaseQuantity = (id) => {
        setCartItems(prev => prev.map(
            item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems(prev => prev.map(
            item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    };

    const calTotalAmount = () => {
        return cartItems.filter(
            item => item.checked
        ).reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    };

    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
        >
            {/* Cart */}
            <Card
                sx={{ width: "60%", ...cardStyle }}
            >
                <CardContent
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start"
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" textAlign="start">
                        Cart({cartItems.length})
                    </Typography>
                    {cartItems.length > 0 && (
                        <List
                            sx={{
                                width: "100%",
                                maxHeight: "80vh",
                                overflow: "scroll"
                            }}
                        >
                            {cartItems.map(item => (
                                <ListItem
                                    key={item.id}
                                    sx={{
                                        height: "12rem",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        border: "1px solid #ddd",
                                        borderRadius: "16px",
                                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                                        mb: 2,
                                        padding: 2
                                    }}
                                >
                                    {/* Checkbox */}
                                    <Checkbox
                                        checked={item.checked}
                                        onChange={() => handleCheck(item.id)}
                                        sx={{ mr: 2 }}
                                    />

                                    {/* Product Image */}
                                    <Button
                                    // onClick={() => { window.open(item.productUrl, "_blank") }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.photoUrl}
                                            alt={item.name}
                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                borderRadius: "16px",
                                                objectFit: "cover"
                                            }}
                                        />
                                    </Button>

                                    {/* Product Details */}
                                    <Box
                                        height="80%"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="start"
                                        justifyContent="space-between"
                                    >
                                        <Link>{item.name}</Link>
                                        <Typography variant="h6" fontWeight="bold">
                                            AU$ {item.price}
                                        </Typography>
                                    </Box>

                                    {/* Quantity Controls */}
                                    <Box
                                        height="70%"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        sx={{
                                            position: "absolute",
                                            right: "5%",
                                            transform: "translateX(5%)"
                                        }}
                                    >
                                        <IconButton onClick={() => { handleRemoveItem(item.id) }}>
                                            <DeleteForeverIcon color="error" fontSize="large" />
                                        </IconButton>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "0.5px solid #ccc",
                                                borderRadius: "16px"
                                            }}
                                        >
                                            <IconButton
                                                onClick={() => { handleDecreaseQuantity(item.id) }}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            <Typography textAlign="center">
                                                {item.quantity}
                                            </Typography>
                                            <IconButton
                                                onClick={() => { handleIncreaseQuantity(item.id) }}
                                            >
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    )}
                    {cartItems.length === 0 && (
                        <Box
                            width="100%"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="space-around"
                            gap={3}
                        >
                            <ProductionQuantityLimitsIcon fontSize="large" sx={{ transform: "scale(2)" }} />
                            <Typography variant="h5">
                                The cart is empty
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>

            {/* Summary */}
            <Card
                sx={{ width: "30%", ...cardStyle }}
            >
                <CardContent
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Typography
                        width="100%"
                        variant="h5"
                        fontWeight="bold"
                        textAlign="start"
                    >
                        Summary
                    </Typography>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant="h6" fontWeight="bold">Total</Typography>
                        <Typography variant="body1" fontWeight="bold">AU$ {calTotalAmount()}</Typography>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="warning"
                        sx={{
                            borderRadius: "16px",
                            textTransform: "none",
                            fontSize: "large"
                        }}
                    >
                        Check out
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}