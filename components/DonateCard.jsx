import React, { useState } from "react";
import Link from "next/link";
import moment from "moment/moment";
import { calculateBarPercentage } from "../utils";
import DonatorsModal from "./DonatorsModal";

const DonateCard = ({ donations }) => {
  const [open, setOpen] = useState(false);
  console.log(donations.donations);
  const totalDonationsAmount = donations.donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);

  const totalDonators = donations.donations.length;

  const goal = 1000000;
  const goalUSD = goal / 500;
  const goalGBP = goal / 700;
  const goalEUR = goal / 600;

  const toggleCurrency = (currency) => {
    if (currency === "USD") {
      return goalUSD;
    } else if (currency === "GBP") {
      return goalGBP;
    } else if (currency === "EUR") {
      return goalEUR;
    } else {
      return goal;
    }
  };

  return (
    <div>
      <div className="p-5 flex flex-col gap-3 bg-[#f5f5f5] rounded-md shadow-md w-[400px]">
        <div className="flex flex-col gap-2 border shadow-md  rounded-lg">
          <div className="bg-white p-3 rounded-t-md ">
            <div className="relative w-full h-[7px] bg-[#f5f5f5]">
              <div
                className="absolute rounded-md h-full bg-[#104901]"
                style={{
                  width: `${calculateBarPercentage(
                    goal,
                    totalDonationsAmount
                  )}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Goal</p>
              <h3 className="font-medium text-[18px]">₦{goal}</h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Donations</p>
              <h3 className="font-medium text-[18px]">{totalDonators}</h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Raised</p>
              <h3 className="font-medium text-[18px]">
                ₦{totalDonationsAmount}
              </h3>
            </div>
          </div>
        </div>
        {/* donators */}

        {donations.donations.slice(0, 2).map((donation) => (
          <div
            className="rounded-md flex flex-col gap-2 p-3 shadow-md hover:shadow-lg bg-white"
            key={donation._id}
          >
            <div className="flex flex-row justify-between">
              <h3 className="font-bold text-[#104901]">
                {donation.isAnonymous === true ? "Anonymous" : donation.name}
              </h3>
              <p className="text-[14px] text-gray-400">
                {moment(donation.date).format("MMM Do YYYY")}
              </p>
            </div>
            <div className="flex flex-row justify-between  ">
              <p>Amount Donated</p>
              <h3 className="font-bold text-[#104901]">₦{donation.amount}</h3>
            </div>
          </div>
        ))}
        {/* donate button */}
        {/* view all */}
        <div className="flex flex-row justify-between">
          <Link href="/campaign/donate">
            <button className="p-3 border bg-[#ffc135] rounded-md font-bold  mt-5 hover:bg-[#FFF] border-[#104901] ">
              Donate
            </button>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="p-3 border rounded-md font-bold hover:text-white mt-5 hover:bg-[#104901] border-[#104901]"
          >
            View All
          </button>
        </div>
      </div>
      {open && (
        <DonatorsModal setOpen={setOpen} donations={donations.donations} />
      )}
    </div>
  );
};

export default DonateCard;
