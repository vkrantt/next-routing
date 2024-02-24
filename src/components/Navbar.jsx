import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-center">
      <ul className="flex m-10 gap-10">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/clientside">
          <li>Client Side</li>
        </Link>
        <Link href="/clientsidehoc">
          <li>Client Side HOC</li>
        </Link>
        <Link href="/serverside">
          <li>Server side</li>
        </Link>
        <Link href="/middleware">
          <li>Middleware</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
