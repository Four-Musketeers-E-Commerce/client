"use client";
import { Box, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useState } from "react";

const testItems = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        productUrl: "",
        photoUrl: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-16pm/deserttitanium/landscape-front.png",
        quantity: 2,
        price: 2147
    },
    {
        id: 2,
        name: "Apple TV",
        productUrl: "",
        photoUrl: "https://www.apple.com/newsroom/images/product/tv/standard/Apple_unveils-the-next-gen-of-AppleTV4K_042021.jpg.landing-big_2x.jpg",
        quantity: 1,
        price: 599
    },
    {
        id: 3,
        name: "Meta Wayfarer",
        productUrl: "",
        photoUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1p0Aa-I5HWqDucBwNTqHdovbkRM-BiMvel85192eMp13jcWP5oFaYHEyGMi3rfKltf4Nf_HOGeYKRyfbNni6V-NzD0SlLZo4uqp-Pfhid&usqp=CAc",
        quantity: 1,
        price: 449
    }
];

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState(testItems);

    return (
        <Card
            sx={{ width: "100%" }}
        >
            <CardContent
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {cartItems.length > 0 && (
                    <List
                        sx={{
                            width: "100%",
                            maxHeight: "80vh"
                        }}
                    >
                        {cartItems.map(item => (
                            <ListItem key={item.id}>
                                <Typography variant="body1">{item.name}</Typography>
                            </ListItem>
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
};