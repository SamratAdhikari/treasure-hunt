import React, { useState } from "react";
import QrScanner from "react-qr-scanner"; // Import QR scanner package

const Quiz = () => {
    const [qrResult, setQrResult] = useState(null); // State to store QR scan result

    // Handle successful QR code scan
    const handleScan = (data) => {
        if (data) {
            setQrResult(data.text); // Store the scanned data
        }
    };

    // Handle any errors encountered while scanning
    const handleError = (err) => {
        console.error("Error scanning QR code:", err);
    };

    return (
        <div className="quiz-page">
            <h1>Quiz Page</h1>

            {/* QR Scanner Section */}
            <div className="qr-scanner-container">
                <h2>Scan QR Code</h2>
                {/* <QrScanner
              delay={300}  // Delay in milliseconds for the scanner
              style={{ width: '100%' }} // Make the scanner full width
              onScan={handleScan}  // Handle scan result
              onError={handleError}  // Handle errors
            /> */}
            </div>

            {/* Display QR Code Scan Result */}
            <div className="qr-result">
                {qrResult ? (
                    <p>Scanned QR Code Result: {qrResult}</p> // Show the result of the scan
                ) : (
                    <p>No QR code scanned yet.</p> // Default message if no QR is scanned
                )}
            </div>
        </div>
    );
};
export default Quiz;
