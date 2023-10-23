// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 px-[5rem] py-[1rem] w-full bg-[#1D1E20] xs:px-[0.50rem] xs:py-[0.5rem]">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-[1.5rem] font-semibold">
          <Link href="/">Joadison MS Portfolio</Link>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <h1>Joadison Macedo Silva</h1><div className="none">/</div><h1>Dev Junior</h1>
          </div>
        </div>
        <Link
          href="/"
          className="bg-[#FFCC1A] text-[#1D1E20] py-[0.5rem] px-[1rem] rounded-md text-[1rem] text-[600] transition-all duration-500 ease-in-out cursor-pointer inline-block hover:bg-[#DADADB]"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
