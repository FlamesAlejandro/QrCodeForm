import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import QRCode from 'qrcode';
import { useForm } from "react-hook-form";
import { camioneros } from '../data/camioneros';

export const Form = () => {
    
    const [imgUrl, setImgUrl] = useState('');

    
    // console.log(errors);

    const [formulario, setFormulario] = useState({
        nombreChofer: '',
        rutChofer: '',
        correoChofer: '',
        telefonoChofer: '',
        nombreEmpresa: '',
        rutEmpresa: '',
        patenteCamion: '',
        marcaCamion: '',
        modeloCamion: '',
        annoCamion: '',
        rutEmpresaDestino: '',
        nombreEmpresaDestino: '',
        direccionDestino: '',
        ciudadDestino: '',
        potrero: '',
        patenteCarro: '',
        tipoTraslado: '',
        seguroCarga: '',
        tipoCarga: '',
        variedadCarga: '',
        TaraCamion: '',
        codigoMOP: '',
    });

    const { nombreChofer, rutChofer, correoChofer, telefonoChofer, nombreEmpresa, rutEmpresa,
    patenteCamion,
    marcaCamion,
    modeloCamion,
    annoCamion,
    rutEmpresaDestino,
    nombreEmpresaDestino,
    direccionDestino,
    ciudadDestino,
    potrero,
    patenteCarro,
    tipoTraslado,
    seguroCarga,
    tipoCarga,
    variedadCarga,
    TaraCamion,
    codigoMOP} = formulario;


    const  handleChofer = ( { target }) => {
        const { name , value } = target;
        console.log('este es el name'+name, 'este es el value'+value);

        const newdata = camioneros.filter( chofer => chofer.rut === value);

        // const { id, rut, nombre, correo, telefono } = newdata;
        // console.log(id);
        console.log(newdata);
        console.log(formulario);
        console.log(newdata[0].nombre);

        
            setFormulario({
                ...formulario,
                rutChofer: newdata.rut),
                nombreChofer: JSON.stringify(newdata.nombre),
                correoChofer: JSON.stringify(newdata.correo),
                telefonoChofer: JSON.stringify(newdata.telefono),
            });
            console.log(newdata);
            console.log(formulario);
                

    }

    const handleChange = ( { target }) => {

        const { name , value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });

    }

    const generarQrCode = async(data) => {
        try {
            const response = await QRCode.toDataURL(JSON.stringify(data));
            setImgUrl(response); 
    
        } catch (error) {
          console.log(error); 
        }
    }

    // const onSubmit = (e) => {
    
    // }


    return (
        <>
            <Container component="main">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
                >
                <Typography component="h1" variant="h4">
                    Formulario
                </Typography>

                <hr />

                <form onSubmit={generarQrCode} sx={{ mt: 3, width: '100%', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="nombreChofer" value={nombreChofer}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="rutChofer" onChange={handleChange} name="RutChofer" onBlur={handleChofer} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="EmpresaCamion"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="RutEmpresaCamion"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="PatenteCamion" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="PatenteCarro" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="ModeloCamion"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="SeguroCarga" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TaraCamion"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="CorreoChofer"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TipoTraslado"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="Telefono"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TipoCarga"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="VariedadCarga" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="DestinoCiudad" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="EmpresaDestino"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="RutEmpresaDestino"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="DireccionDestinatario"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="Potrero"  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="CodigoMop"  />
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
                </form>
                </Box>
                {imgUrl ? (
                    <a href={imgUrl} download>
                        <img src={imgUrl} alt="img" />
                    </a>) 
                : null}
            </Container>
        </>
    )
}
