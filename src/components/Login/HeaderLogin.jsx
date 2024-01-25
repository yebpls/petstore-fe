import React from "react";
import { Link } from "react-router-dom";
function HeaderLogin() {
  return (
    <div className="py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 border-gray-200">
      <span className="text-2xl font-semibold text-sky-400">
        <Link to="/" className="inline-block ml-20">
          QS Pet Store
        </Link>
      </span>
    </div>
  );
}

export default HeaderLogin;
