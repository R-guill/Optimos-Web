import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mt-1 lg:mt-3 sm:pb-3 sm:py-2 py-1">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="text-black text-lime-900 font-mono text-7xl flex flex-col justify-between lg:flex-row items-center">
          <p>Optimos Web </p>
          <div className="text-black flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
          <Image src="/logos.png" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
