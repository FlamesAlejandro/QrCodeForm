import React from 'react'

export const ImagenEscaner = () => {
    return (
        <div>
            <Button className={diseno.btn} variant="contained" color="secondary" onClick={onScannedFile}>Scan Qr Code</Button>
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
