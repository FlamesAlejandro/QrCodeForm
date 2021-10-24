import React from 'react'

import Typography from '@mui/material/Typography';

export const Home = () => {
    return (
        <div>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Funcionalidades
                <hr />1° Form: Llenar el formulario con los datos que requiera para transformarlo en un codigo QR.
                <hr />2° Upload QR Code: Puede subir un codigo qr como una imagen para escanearlo. 
                <hr />3° Web Cam Scanner: Se puede escanear un codigo a traves de la camara del PC.
            </Typography>
        </div>
    )
}
