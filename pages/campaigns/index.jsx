import React, { useState } from "react";
import { content } from "../../context";

const index = () => {
  const [showMore, setShowMore] = useState(false);
  const excerpt = content.slice(0, 300);
  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <div className="h-full p-5 md:p-auto">
      {/* left */}
      <div>
        <h1>Help Ahmed and Peter pay their tuition fees at UNILAG</h1>
      </div>
      {/* right */}
      <div>
        

        <p>{showMore ? content : `${excerpt}...`}</p>
        <button onClick={toggleShowMore}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default index;
