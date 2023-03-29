import React from "react";
import Link from "next/link";
import { calculateBarPercentage } from "../utils";

const DonateCard = () => {
  return (
    <div>
      <div className="p-5 flex flex-col gap-3 bg-[#f5f5f5] rounded-md shadow-md w-[400px]">
        <div className="flex flex-col gap-2 border shadow-md  rounded-lg">
          <div className="bg-white p-3 rounded-t-md ">
            <div className="relative w-full h-[7px] bg-[#f5f5f5]">
              <div
                className="absolute rounded-md h-full bg-[#104901]"
                style={{
                  width: `${calculateBarPercentage(1000000, 100000)}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Goal</p>
              <h3 className="font-medium text-[18px]">₦1,000,000</h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Donations</p>
              <h3 className="font-medium text-[18px]">5</h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Raised</p>
              <h3 className="font-medium text-[18px]">₦100,000</h3>
            </div>
          </div>
        </div>
        {/* donators */}

        <div className="rounded-md flex flex-col gap-2 p-3 shadow-md hover:shadow-lg bg-white">
          <div className="flex flex-row justify-between">
            <h3>Oscar</h3>
            <p>March 1, 2023</p>
          </div>
          <div className="flex flex-row justify-between ">
            <p>Amount Donated</p>
            <h3>₦100,000</h3>
          </div>
        </div>

        <div className="rounded-md flex flex-col gap-2 p-3 shadow-md hover:shadow-lg bg-white">
          <div className="flex flex-row justify-between">
            <h3>Oscar</h3>
            <p>March 1, 2023</p>
          </div>
          <div className="flex flex-row justify-between  ">
            <p>Amount Donated</p>
            <h3>₦100,000</h3>
          </div>
        </div>
        {/* donate button */}
        {/* view all */}
        <div className="flex flex-row justify-between">
          <Link href="/campaign/donate">
            <button className="p-3 border bg-[#ffc135] rounded-md font-bold  mt-5 hover:bg-[#FFF] border-[#104901] ">
              Donate
            </button>
          </Link>
          <button className="p-3 border rounded-md font-bold hover:text-white mt-5 hover:bg-[#104901] border-[#104901]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
