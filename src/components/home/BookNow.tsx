import React from 'react';
import { Link } from 'react-router-dom';

function BookNow() {
  return (
    <div className="flex bg-slate-100 py-12 flex-col lg:flex-row items-center justify-center gap-4">
      <h2 className="text-center lg:text-xl font-semibold text-gray-700 px-4">
        VIEW OUR SERVICES AND BOOK YOUR NEED
      </h2>
      <Link
        to={'/services'}
        className="px-8 py-4 text-white bg-blue-400 font-semibold"
      >
        VIEW OUR SERVICES
      </Link>
    </div>
  );
}

export default BookNow;
