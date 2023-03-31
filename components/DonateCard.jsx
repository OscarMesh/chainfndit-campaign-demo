import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment/moment";
import { calculateBarPercentage } from "../utils";
import DonatorsModal from "./DonatorsModal";

const DonateCard = ({ donations }) => {
  const goal = 1000000;
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");
  const [filteredDonations, setFilteredDonations] = useState([]);

  const convertToCurrency = (goal, currency) => {
    if (currency === "NGN") {
      return goal;
    } else if (currency === "GBP") {
      return goal / 550;
    } else if (currency === "EUR") {
      return goal / 650;
    } else {
      return goal / 410;
    }
  };

  const raisedInCurrency = donations
    .reduce((total, donation) => {
      if (donation.currency === currency) {
        return total + donation.amount / 1;
      } else if (donation.currency === "GBP") {
        return total + donation.amount / 550;
      } else if (donation.currency === "EUR") {
        return total + donation.amount / 650;
      } else if (donation.currency === "USD") {
        return total + donation.amount / 400;
      } else {
        return total;
      }
    }, 0)
    .toFixed(0);

  const goalInCurrency = convertToCurrency(goal, currency).toFixed(0);
  const numDonationsInCurrency = donations.filter(
    (donation) => donation.currency === currency
  ).length;

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    if (event.target.value === "NGN") {
      setSymbol("₦");
      setFilteredDonations(
        donations.filter((donation) => donation.currency === "NGN")
      );
    } else if (event.target.value === "GBP") {
      setSymbol("£");
      setFilteredDonations(
        donations.filter((donation) => donation.currency === "GBP")
      );
    } else if (event.target.value === "EUR") {
      setSymbol("€");
      setFilteredDonations(
        donations.filter((donation) => donation.currency === "EUR")
      );
    } else {
      setSymbol("$");
      setFilteredDonations(
        donations.filter((donation) => donation.currency === "USD")
      );
    }
  };

  useEffect(() => {
    setFilteredDonations(
      donations.filter((donation) => donation.currency === "NGN")
    );
  }, [donations]);
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
                    goalInCurrency,
                    raisedInCurrency
                  )}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Goal</p>
              <h3 className="font-medium text-[18px]">
                {symbol}
                {goalInCurrency}
              </h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Donations</p>
              <h3 className="font-medium text-[18px]">
                {numDonationsInCurrency} in {symbol}
              </h3>
            </div>
            <hr className="w-[1px] h-[40px] bg-gray-400" />
            <div className="flex flex-col gap-1 items-center">
              <p className="text-gray-400">Raised</p>
              <h3 className="font-medium text-[18px]">
                {symbol} {raisedInCurrency}
              </h3>
            </div>
          </div>
        </div>
        {/* donators */}

        {filteredDonations.slice(0, 2).map((donation) => (
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
              <h3 className="font-bold text-[#104901]">
                {symbol}
                {donation.amount}
              </h3>
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

          <select
            value={currency}
            name={symbol}
            className="p-3 border rounded-md font-md hover:text-white mt-5 hover:bg-[#104901] border-[#104901] cursor-pointer"
            onChange={handleCurrencyChange}
          >
            <option name="₦" value="NGN">
              NGN
            </option>
            <option name="£" value="GBP">
              GBP
            </option>
            <option name="€" value="EUR">
              EUR
            </option>
            <option name="$" value="USD">
              USD
            </option>
          </select>

          <button
            onClick={() => setOpen(true)}
            className="p-3 border rounded-md font-bold hover:text-white mt-5 hover:bg-[#104901] border-[#104901]"
          >
            View All
          </button>
        </div>
      </div>
      {open && (
        <DonatorsModal
          setOpen={setOpen}
          donations={filteredDonations}
          symbol={symbol}
        />
      )}
    </div>
  );
};

export default DonateCard;
