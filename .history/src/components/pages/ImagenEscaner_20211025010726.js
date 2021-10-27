import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import QrReader from 'react-qr-reader';



export const ImagenEscaner = () => {

    const qrRef = useRef(null);
    const [scanResultFile, setScanResultFile] = useState('');

    const handleErrorFile = (error) => {
        console.log(error);
    }
                    
    const handleScanFile = (result) => {
    if (result){
        setScanResultFile(result);
    }
    }

    const onScannedFile = () => {
    qrRef.current.openImageDialog();
    }

    const { nombre, camion, empresa } = scanResultFile
    
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
