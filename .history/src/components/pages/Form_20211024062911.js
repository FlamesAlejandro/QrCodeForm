import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import QRCode from 'qrcode';

export const Form = () => {
    
    const [text, setText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const generarQrCode = async( ) => {
        try {
    
          const response = await QRCode.toDataURL(text);
          setImgUrl(response); 
    
        } catch (error) {
          console.log(error); 
        }
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="NombreChofer"
                        name="NombreChofer"
                        required
                        fullWidth
                        id="NombreChofer"
                        label="NombreChofer"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="RutChofer"
                        label="RutChofer"
                        name="RutChofer"
                        autoComplete="RutChofer"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="EmpresaCamion"
                        name="EmpresaCamion"
                        required
                        fullWidth
                        id="EmpresaCamion"
                        label="EmpresaCamion"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="RutEmpresaCamion"
                        label="RutEmpresaCamion"
                        name="RutEmpresaCamion"
                        autoComplete="RutEmpresaCamion"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="PatenteCamion"
                        name="PatenteCamion"
                        required
                        fullWidth
                        id="PatenteCamion"
                        label="PatenteCamion"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="PatenteCarro"
                        label="PatenteCarro"
                        name="PatenteCarro"
                        autoComplete="PatenteCarro"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="ModeloCamion"
                        name="ModeloCamion"
                        required
                        fullWidth
                        id="ModeloCamion"
                        label="ModeloCamion"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="SeguroCarga"
                        label="SeguroCarga"
                        name="SeguroCarga"
                        autoComplete="SeguroCarga"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="TaraCamion"
                        name="TaraCamion"
                        required
                        fullWidth
                        id="TaraCamion"
                        label="TaraCamion"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="CorreoChofer"
                        label="CorreoChofer"
                        name="CorreoChofer"
                        autoComplete="CorreoChofer"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="TipoTraslado"
                        name="TipoTraslado"
                        required
                        fullWidth
                        id="TipoTraslado"
                        label="TipoTraslado"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="Telefono"
                        label="Telefono"
                        name="Telefono"
                        autoComplete="Telefono"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="TipoCarga"
                        name="TipoCarga"
                        required
                        fullWidth
                        id="TipoCarga"
                        label="TipoCarga"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="VariedadCarga"
                        label="VariedadCarga"
                        name="VariedadCarga"
                        autoComplete="VariedadCarga"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="DestinoCiudad"
                        name="DestinoCiudad"
                        required
                        fullWidth
                        id="DestinoCiudad"
                        label="DestinoCiudad"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="EmpresaDestino"
                        label="EmpresaDestino"
                        name="EmpresaDestino"
                        autoComplete="EmpresaDestino"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="RutEmpresaDestino"
                        name="RutEmpresaDestino"
                        required
                        fullWidth
                        id="RutEmpresaDestino"
                        label="RutEmpresaDestino"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="DireccionDestinatario"
                        label="DireccionDestinatario"
                        name="DireccionDestinatario"
                        autoComplete="DireccionDestinatario"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="Potrero"
                        name="Potrero"
                        required
                        fullWidth
                        id="Potrero"
                        label="Potrero"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="CodigoMop"
                        label="CodigoMop"
                        name="CodigoMop"
                        autoComplete="CodigoMop"
                        />
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Convertir a QR CODE
                    </Button>
                </Box>
                </Box>
            </Container>
        </>
    )
}
