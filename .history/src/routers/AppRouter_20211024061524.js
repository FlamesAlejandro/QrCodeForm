import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { MainNavbar } from '../components/ui/MainNavbar';
import { MainFooter } from '../components/ui/MainFooter';
import { Form } from '../components/pages/Form';
import { ImagenEscaner } from '../components/pages/ImagenEscaner';
import { CamaraEscaner } from '../components/pages/CamaraEscaner';
import { Home } from '../components/pages/Home';

export const AppRouter = () => {
    return (
        <>
        <Router>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />

                <MainNavbar />
                
                {/* Hero unit */}
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    >
                    Instrucciones
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Funcionalidades
                    1° Form: Llenar el formulario con los datos que requiera para transformarlo en un codigo QR.
                    2° Upload QR Code: Puede subir un codigo qr como una imagen para escanearlo. 
                    3° Web Cam Scanner: Se puede escanear un codigo a traves de la camara del PC.
                    </Typography>
                </Container>

                {/* Contenido */}
                <Container maxWidth="md" component="main">

                    <Switch>
                        <Route exact path="/form" component={ Form } />
                        <Route exact path="/imagen" component={ ImagenEscaner } />
                        <Route exact path="/inteligencia" component={ CamaraEscaner } />
                        <Route exact path="/home" component={ Home } />
                        <Redirect to="/home" />
                    </Switch>
                    
                </Container>

                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                    }}
                >
                    <MainFooter />

                </Container>
                {/* End footer */}
            </Router>
        </>
    )
}
