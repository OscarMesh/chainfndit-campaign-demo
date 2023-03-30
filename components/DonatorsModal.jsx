import React from "react";
import moment from "moment";
const DonatorsModal = ({ donations, setOpen, symbol }) => {
  return (
    <div
      className="flex flex-col h-full fixed top-0 left-0 w-full bg-gray-400 bg-opacity-[0.8]"
      onClick={() => setOpen(false)}
    >
      <div
        className="flex flex-col gap-3 bg-white w-[400px] h-[500px] m-auto mt-[100px] rounded-md shadow-md  overflow-y-scroll"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-row justify-between items-center p-3">
          <h3 className="font-medium text-[18px]">Donators</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[#104901] font-bold p-2 rounded-md hover:bg-gray-200"
          >
            close
          </button>
        </div>
        <div className="flex flex-col gap-3 p-3">
          {donations.map((donation) => (
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
        </div>
      </div>
    </div>
  );
};

export default DonatorsModal;
