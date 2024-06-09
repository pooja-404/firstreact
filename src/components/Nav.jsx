import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="container bg-[#8ff3f3] px-3 mx-auto py-2">
        <ul className="flex justify-between items-center ">
          <li className="bg-black px-5 py-3 rounded-md w-[170px] text-center">
            <Link to="/Add" className="text-white text-base font-semibold">
              Add Todo 
            </Link>
          </li>
          <li className="bg-black px-5 py-3 rounded-md w-[170px] text-center">
            <Link to="/Todo" className="text-white text-lg font-semibold">
             All Todo
            </Link>
          </li>
          <li className="bg-black px-5 py-3 rounded-md w-[170px] text-center">
            <Link to="/Completedtodo" className="text-white text-base font-semibold">
              Completed Todo
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
