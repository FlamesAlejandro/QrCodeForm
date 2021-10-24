import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Form = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        });
    };

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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
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
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete=""
                        name=""
                        required
                        fullWidth
                        id=""
                        label=""
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id=""
                        label=""
                        name=""
                        autoComplete=""
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
