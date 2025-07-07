import React from "react";

const Shop = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Shop</h1>
      <p className="text-center">Welcome to the shop! Browse our products below.</p>
      <div className="row">
        {/* Product cards will go here */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Product Name</h5>
              <p className="card-text">$19.99</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;