import React from "react";

const OverviewCard = ({ overview: { title, value } }: any) => {
  return (
    <div className="w-[260px] bg-white px-[20px] py-[16px]">
      <h3 className="text-gray-600 text-[20px]">{title}</h3>
      <h2 className="text-[24px] font-black">
        {value.toLocaleString("en-US")}
      </h2>
    </div>
  );
};

export default OverviewCard;
