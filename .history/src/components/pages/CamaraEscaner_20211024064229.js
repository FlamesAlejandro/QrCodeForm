import React from 'react'

export const CamaraEscaner = () => {
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
