import React from "react";

const Auth = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Authentication</h1>
      <p className="text-center">Please log in or register to continue.</p>
      <form className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default Auth;