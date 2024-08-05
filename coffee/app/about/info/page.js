import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div>
      <h1 className="text-2xl text-green-500">This is the Info Section</h1>
      <Link
        href="/"
        className="border-2 rounded-md text-3xl bg-gray-500 text-white px-3 py-2 mt-3"
      >
        Go Home Page
      </Link>
    </div>
  );
};

export default Info;
