import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Coupon from "./coupon";

const buttonStyle = {
    color: "#FF7F3E",
    textTransform: "none"
}

export default function Banner() {
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="5px"
        >
            <Box
                component="button"
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                padding="10px 100px"
                sx={{
                    backgroundImage: "linear-gradient(150deg, #FFCFEF, #0A97B0, #0A5EB0, #2A3335);"
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    gap={2}
                    color="#FA4032"
                >
                    <Typography
                        variant="h5"
                        fontFamily="cursive"
                        fontWeight="bold"
                    >
                        Sale Ends: Feb 28, 23:59 ACST
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                    >
                        <Typography variant="h4" fontWeight="bold">UP TO</Typography>
                        <Typography variant="h3" fontFamily="fantasy" fontWeight="bold" color="#FCF596">60%</Typography>
                        <Typography variant="h4" fontWeight="bold">OFF</Typography>
                        <ArrowCircleRightIcon fontSize="large" />
                    </Box>
                    <Coupon />
                </Box>
                <Box>
                    <Grid container rowSpacing={2} columns={16}>
                        {Array(12).fill(0).map((_el, index) => (
                            <Grid key={index} size={4}>
                                <CardGiftcardIcon
                                    fontSize="large"
                                    sx={{
                                        color: "#fff",
                                        transform: `rotate(30deg)`
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-evenly"
                sx={{
                    backgroundColor: "#eee"
                }}
            >
                <Button
                    startIcon={<LocalShippingIcon />}
                    sx={buttonStyle}
                >
                    <Typography>Free Shipping</Typography>
                </Button>
                <Button
                    startIcon={<WidgetsIcon />}
                    sx={buttonStyle}
                >
                    <Typography>Fast Delivery</Typography>
                </Button>
                <Button
                    startIcon={<AssignmentReturnIcon />}
                    sx={buttonStyle}
                >
                    <Typography>Free Return</Typography>
                </Button>
            </Box>
        </Box>
    );
}