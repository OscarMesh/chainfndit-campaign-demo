import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navabar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-5">
        <div className="flex items-start max-w-[200px]">
          <Image
            src="https://chainfundit.com/wp-content/uploads/2022/08/cropped-cropped-Chainfundit-logo-06.png"
            alt="logo"
            width={200}
            height={200}
            loading="lazy"
            className="object-cover"
          />
        </div>

        <ul className="flex flex-row gap-6">
          <li className="text-[16px] font-medium hover:text-[#104901]">
            <Link href="/campaigns">Campaigns</Link>
          </li>
          <li className="text-[16px] font-medium hover:text-[#104901]">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navabar;
