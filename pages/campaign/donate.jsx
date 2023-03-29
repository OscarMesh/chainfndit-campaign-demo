import React, { useState } from "react";
import DonateForm from "../../components/DonateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const donate = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="p-6 md:p-20 bg-white border rounded-md w-full  mx-auto mt-20px shadow-sm">
      {step === 1 && (
        <div className="rounded-md bg-white border shadow-sm max-w-[600px] mx-auto">
          <div className="p-3 bg-[#eeeeee] rounded-t-md">
            <h3 className=" text-center">Donate here</h3>
          </div>
          <div className="p-3 flex items-center flex-col ">
            <p className="mb-3 mt-3">How much would you like to donate?</p>
            <p className="mb-3 mt-3 text-center">
              You are supporting Ahmed and Peter's " Help Ahmed and Peter pay
              their tuition fees at UNILAG".
            </p>
            <p className="mb-3 mt-3">Thank you for your generosity!</p>
            <button
              onClick={() => setStep(2)}
              className="p-3 border rounded-md font-bold hover:text-white mt-5 hover:bg-[#104901] border-[#104901]"
            >
              continue
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="rounded-md bg-white border shadow-sm max-w-[600px] mx-auto">
          <div className="p-3 relative bg-[#eeeeee] rounded-t-md">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="absolute cursor-pointer"
              onClick={() => {
                setStep(1);
              }}
            />
            <h3 className=" text-center">Details here</h3>
          </div>
          <div className="p-3 flex  flex-col ">
            <DonateForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default donate;
