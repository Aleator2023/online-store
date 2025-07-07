import React from "react";

const Admin = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Admin Dashboard</h1>
      <p className="text-center">Manage your store settings and view analytics here.</p>
      <div className="row">
        {/* Admin controls will go here */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Products</h5>
              <p className="card-text">Add, edit, or delete products in your store.</p>
              <button className="btn btn-primary">Go to Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;