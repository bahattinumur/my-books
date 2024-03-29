import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="container py-6">
      <img
        className="img-fluid rounded"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
      />

      <p className="text-center fs-3 my-4">
        404 Page not found
      </p>

      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={'/'}>
          Main
        </Link>
      </div>

      {state && (
        <p className="fs-3 text-center my-4">
          Error Code
          <span className="badge bg-warning mx-4"> {state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
