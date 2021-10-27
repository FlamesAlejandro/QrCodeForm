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

export const Form = () => {
    
    const [imgUrl, setImgUrl] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => generarQrCode(data);
    // console.log(errors);

    const handleChange = ({ target }) => {

        const { name , value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });

    }

    const  handleChofer = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        const { name , value } = target;

        const [newdata] = camioneros.filter( chofer => chofer.id === value) || [];

        // const { id, rut, nombre, correo, telefono } = newdata;

        if(newdata){
            setFormulario({
                ...formulario,
                rutChofer: newdata.rut,
                nombreChofer: newdata.nombre,
                correoChofer: newdata.correo,
                telefonoChofer: newdata.telefono,
            });
            console.log(newdata);
            console.log(formulario);
        }        

    }

    const generarQrCode = async(data) => {
        try {
            const response = await QRCode.toDataURL(JSON.stringify(data));
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
                    width: '100%',
                }}
                >
                <Typography component="h1" variant="h4">
                    Formulario
                </Typography>

                <hr />

                <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3, width: '100%', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="NombreChofer" onChange {...register("NombreChofer", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="RutChofer" {...register("RutChofer", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="EmpresaCamion" {...register("EmpresaCamion", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="RutEmpresaCamion" {...register("RutEmpresaCamion", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="PatenteCamion" {...register("PatenteCamion", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="PatenteCarro" {...register("PatenteCarro", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="ModeloCamion" {...register("ModeloCamion", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="SeguroCarga" {...register("SeguroCarga", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TaraCamion" {...register("TaraCamion", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="CorreoChofer" {...register("CorreoChofer", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TipoTraslado" {...register("TipoTraslado", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="Telefono" {...register("Telefono", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="TipoCarga" {...register("TipoCarga", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="VariedadCarga" {...register("VariedadCarga", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="DestinoCiudad" {...register("DestinoCiudad", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="EmpresaDestino" {...register("EmpresaDestino", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="RutEmpresaDestino" {...register("RutEmpresaDestino", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="DireccionDestinatario" {...register("DireccionDestinatario", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="Potrero" {...register("Potrero", {})} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type="text" placeholder="CodigoMop" {...register("CodigoMop", {})} />
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
