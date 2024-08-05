import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is the route for mine</h1>
      <Link href="/">
        <button className="px-3 py-1 border-2 rounded-md bg-orange-500 text-2xl text-white">
          Go back Home
        </button>
      </Link>
    </div>
  );
};

export default page;
