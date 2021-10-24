import React from 'react'
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';



export const ImagenEscaner = () => {

    const qrRef = useRef(null);

    const handleErrorFile = (error) => {
        console.log(error);
      }
                      
      const handleScanFile = (result) => {
        if (result){
          setScanResultFile(result);
        }
      }
    
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={onScannedFile}>Scan Qr Code</Button>
            <QrReader
                ref={qrRef}
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            />
            <h3>Scanned Code: {scanResultFile}</h3>
        </div>
    )
}
