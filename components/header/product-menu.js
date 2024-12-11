"use client";
import { Box, Icon, MenuItem, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import ListIcon from '@mui/icons-material/List';
import { useRouter } from 'next/navigation';

const categories = [
    {
        id: 1,
        category: "Clothing"
    },
    {
        id: 2,
        category: "Electronics"
    },
    {
        id: 3,
        category: "Home Appliances"
    },
    {
        id: 4,
        category: "Toys & Games"
    },
    {
        id: 5,
        category: "Education"
    },
    {
        id: 6,
        category: "Jewelry"
    },
];

export default function ProductMenu({ anchorEl, open, onClose }) {
    // const router = useRouter();

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            onClick={onClose}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        width: "15rem",
                        height: "20rem",
                        overflow: 'visible',
                        borderRadius: "16px",
                        padding: 2,
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 150,
                            height: 200,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                },
            }}
            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <Box
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={1}
                mb={1}
            >
                <ListIcon fontSize='large' />
                <Typography
                    variant="h5"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    All Categories
                </Typography>
            </Box>
            {categories.map(item => (
                <MenuItem key={item.id} width="100%">
                    <Typography variant='body1'>
                        {item.category}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    );
}