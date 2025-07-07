import React from "react";

const Basket = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Your Basket</h1>
      <p className="text-center">Here you can view and manage the items in your basket.</p>
      <div className="row">
        {/* Basket items will go here */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basket is empty</h5>
              <p className="card-text">Add some products to your basket to see them here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;