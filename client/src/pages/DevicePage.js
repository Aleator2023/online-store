import React from "react";

const DevicePage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Device Details</h1>
      <p className="text-center">Here you can view details about the selected device.</p>
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/300" alt="Device" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Device Name</h2>
          <p>Description of the device goes here. It includes features, specifications, and other relevant information.</p>
          <p><strong>Price:</strong> $199.99</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;