import React, { useState } from "react";
import { content } from "../../context";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DonateCard from "../../components/DonateCard";

const index = () => {
  const [showMore, setShowMore] = useState(false);
  const excerpt = content.slice(0, 300);
  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <div className="h-full p-5 md:p-auto mt-5">
      <div className="flex flex-col items-center mb-3 md:flex-row justify-between">
        {/* left */}
        <div>
          <h1 className="font-bold text-[22px]">
            Help Ahmed and Peter pay their tuition fees at UNILAG
          </h1>
          <Image
            src="https://www.midsouthfcu.org/wp-content/uploads/2019/07/male-student.jpeg"
            alt="ahmed-peter"
            width={600}
            height={400}
            className="object-cover rounded-lg mt-3"
          />
          <div className="flex flex-row items-center p-3 border-b border-t mt-3 mb-3 w-fit gap-4">
            <h3>ORGANISED BY:</h3>
            <span className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              <p className="font-bold">Ahmed and Peter</p>
            </span>
            <span className="flex flex-row items-center gap-3">
              <h3>CATEGORY:</h3>
              <p className="font-bold">Education</p>
            </span>
          </div>
        </div>

        <div className="">
          <DonateCard />
        </div>
      </div>
      <div className="max-w-[600px]">
        <p>{showMore ? content : `${excerpt}...`}</p>
        <button
          onClick={toggleShowMore}
          className="p-2 border font-bold hover:text-white mt-5 hover:bg-[#104901] border-[#104901]"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default index;
