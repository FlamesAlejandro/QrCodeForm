import React from 'react'
import QrReader from 'react-qr-reader';

export const CamaraEscaner = () => {


    
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
                    
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }

    return (
        <div>
            <h3>Escanear Codigo Qr desde Web Cam</h3>
            <QrReader
            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
            />
            <h3>Scanned by Web Cam: {scanResultWebCam}</h3>
        </div>
    )
}
