import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Coupon from "./coupon";

export default function Banner() {
    return (
        <Box
            component="button"
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding="10px 100px"
            mt="5px"
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
                <Coupon/>
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
    );
}