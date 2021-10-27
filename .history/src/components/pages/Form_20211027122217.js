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
import { camioneros } from '../data/DataCamioneros';
import { empresaCamion } from '../data/DataEmpresaCamion';

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

        if (camioneros.find( chofer => chofer.rut === value)){

            const newdata = camioneros.filter( chofer => chofer.rut === value);

            // const { id, rut, nombre, correo, telefono } = newdata;
            // console.log(id);
            console.log(newdata);
            console.log(formulario);
            console.log(newdata[0].nombre);

        
            setFormulario({
                ...formulario,
                rutChofer: newdata[0].rut,
                nombreChofer: newdata[0].nombre,
                correoChofer: newdata[0].correo,
                telefonoChofer: newdata[0].telefono,
            });
            console.log(newdata);
            console.log(formulario.nombreChofer);
            console.log(formulario);

        }
        
                

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

    const onSubmit = (e) => {
    
        e.preventDefault();

        console.log(formulario);
    }


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

                <form onSubmit={onSubmit} sx={{ mt: 3, width: '100%', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="nombreChofer" name="nombreChofer" value={nombreChofer} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="rutChofer" name="rutChofer" value={rutChofer} onChange={handleChange} onBlur={handleChofer} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="correoChofer" name="correoChofer" value={correoChofer} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="telefonoChofer" name="telefonoChofer" value={telefonoChofer} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="nombreEmpresa" name="nombreEmpresa" value={nombreEmpresa} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="rutEmpresa" name="rutEmpresa" value={rutEmpresa} onChange={handleChange} onBlur={} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="patenteCamion" name="patenteCamion" value={patenteCamion} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="marcaCamion" name="marcaCamion" value={marcaCamion} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="modeloCamion" name="modeloCamion" value={modeloCamion} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="annoCamion" name="annoCamion" value={annoCamion} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="rutEmpresaDestino" name="rutEmpresaDestino" value={rutEmpresaDestino} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="nombreEmpresaDestino" name="nombreEmpresaDestino" value={nombreEmpresaDestino} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="direccionDestino" name="direccionDestino" value={direccionDestino} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="ciudadDestino" name="ciudadDestino" value={ciudadDestino} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="potrero" name="potrero" value={potrero} onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="patenteCarro" name="patenteCarro" value={patenteCarro} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="tipoTraslado" name="tipoTraslado" value={tipoTraslado} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="seguroCarga" name="seguroCarga" value={seguroCarga} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="tipoCarga" name="tipoCarga" value={tipoCarga} onChange={handleChange}  />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="rutEmpresa" name="rutEmpresa" value={rutEmpresa} onChange={handleChange}  />
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
