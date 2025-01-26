import { useState } from "react";
import "./customerdetails.css"; // Import the CSS file

const CustomerDetails = () => {
    const [details, setDetails] = useState({
        name: "",
        doorNo: "",
        streetName: "",
        areaName: "",
        pincode: "",
        phoneNumber: "",
    });

    const [retrievedDetails, setRetrievedDetails] = useState(null);

    // Save details to local storage
    const saveDetailsToLocalStorage = () => {
        if (
            !details.name ||
            !details.doorNo ||
            !details.streetName ||
            !details.areaName ||
            !details.pincode ||
            !details.phoneNumber
        ) {
            alert("Please fill in all the fields.");
            return;
        }
        localStorage.setItem("customerDetails", JSON.stringify(details));
        alert("Details saved successfully!");
    };

    // Retrieve details from local storage
    const getDetailsFromLocalStorage = () => {
        const savedDetails = localStorage.getItem("customerDetails");
        if (savedDetails) {
            setRetrievedDetails(JSON.parse(savedDetails));
        } else {
            alert("No details found. Please save your details first.");
        }
    };

    const deleteDetailsFromLocalStorage = () => {
        localStorage.removeItem("customerDetails");
        setRetrievedDetails(null);
        alert("Details deleted successfully!");
    };
    return (
        <div className="form-container">
            <h2 className="form-heading">Customer Address Details</h2>

            {/* Input Fields */}
            <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Door No:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.doorNo}
                    onChange={(e) => setDetails({ ...details, doorNo: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Street Name:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.streetName}
                    onChange={(e) =>
                        setDetails({ ...details, streetName: e.target.value })
                    }
                />
            </div>
            <div className="form-group">
                <label className="form-label">Area Name:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.areaName}
                    onChange={(e) => setDetails({ ...details, areaName: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Pincode:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.pincode}
                    onChange={(e) => setDetails({ ...details, pincode: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Phone Number:</label>
                <input
                    type="text"
                    className="form-input"
                    value={details.phoneNumber}
                    onChange={(e) =>
                        setDetails({ ...details, phoneNumber: e.target.value })
                    }
                />
            </div>

            {/* Buttons */}
            <button className="form-button save-button" onClick={saveDetailsToLocalStorage}>
                Save Details
            </button>
            <button className="form-button checkout-button" onClick={getDetailsFromLocalStorage}>
                Checkout
            </button>

            {/* Display Retrieved Details */}
            {retrievedDetails && (
                <div className="retrieved-details">
                    <h3 className="retrieved-heading">Saved Address Details:</h3>
                    <p>
                        <strong>Name:</strong> {retrievedDetails.name}
                    </p>
                    <p>
                        <strong>Door No:</strong> {retrievedDetails.doorNo}
                    </p>
                    <p>
                        <strong>Street Name:</strong> {retrievedDetails.streetName}
                    </p>
                    <p>
                        <strong>Area Name:</strong> {retrievedDetails.areaName}
                    </p>
                    <p>
                        <strong>Pincode:</strong> {retrievedDetails.pincode}
                    </p>
                    <p>
                        <strong>Phone Number:</strong> {retrievedDetails.phoneNumber}
                    </p>
                    <button className="form-button delete-button" onClick={deleteDetailsFromLocalStorage}>
                        Delete Details
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomerDetails;
