import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const MainNavbar = () => {
    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{  }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <Link
                            variant="button"
                            href="/home"
                        >QR CODE Escaner
                    </Link>
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/form"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                    Formulario
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/imagen"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                    Escaner Imagen
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/camara"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                    Escaner Camara
                    </Link>
                </nav>
                <Button href="/home" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
