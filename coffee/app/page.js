import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl text-orange-500 space-x-1 uppercase mb-2">
        Simple Page one
      </h1>
      <br />
      <Link
        href="/about"
        className="px-3 py-1 border-2 rounded-md bg-orange-500 text-2xl text-white"
      >
        Go to Mine
      </Link>
    </div>
  );
};

export default page;
