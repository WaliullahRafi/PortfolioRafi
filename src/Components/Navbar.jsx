import React from "react";

function Navbar() {
  const navLinks = (
    <>
      <li>Home</li>
      <li>Projects</li>
    </>
  );

  return (
    <div className="bg-[#222222] fixed w-full">
      <div className="flex items-center justify-between max-w-5xl mx-auto py-12 px-2 text-white">
        <div>
          <h2 className="text-2xl font-semibold text-[#FF8660]">Portfolio</h2>
        </div>

        <div>
          <ul className="flex gap-8 text-sm text-white">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
