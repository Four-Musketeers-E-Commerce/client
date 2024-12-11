import { Box, Divider, Typography } from "@mui/material";

const coupons = [
    {
        id: 1,
        discount: 200,
        limit: 1000,
        code: "TB200"
    },
    {
        id: 2,
        discount: 100,
        limit: 500,
        code: "TB100"
    },
    {
        id: 3,
        discount: 50,
        limit: 200,
        code: "TB050"
    }
];

export default function Coupon() {
    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding={1}
            sx={{
                backgroundColor: "#A8CD89"
            }}
        >
            {coupons.map((item, index) => (
                <>
                    {index > 0 &&
                        <Divider
                            orientation="vertical"
                        />
                    }
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                        key={item.id}
                        padding={1}
                        sx={{
                            backgroundColor: "#eee",
                            borderRadius: "16px"
                        }}
                    >
                        <Typography variant="h6" color="">
                            AU${item.discount} OFF
                        </Typography>
                        <Typography variant="body1">
                            orders AU${item.limit}+
                        </Typography>
                        <Typography variant="body1">
                            Code:{item.code}
                        </Typography>
                    </Box>
                </>
            ))}
        </Box>
    );
}