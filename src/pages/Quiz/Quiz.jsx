import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Quiz = () => {
    const [qrResult, setQrResult] = useState(null); // State to store QR scan result
    const { authUser } = useAuthContext();

    console.log(authUser);

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
        <div className="w-full h-full">
            <h1>Quiz Page</h1>

            {/* QR Scanner Section */}
            <div className="qr-scanner-container">
                <h2>Scan QR Code</h2>

                {/* qr */}
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
