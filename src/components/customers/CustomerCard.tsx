import React from "react";
import { Customer } from "../../interfaces";
import { nameAbbr } from "../../utils/nameAbbr";

interface Props {
  customer: Customer;
}
const CustomerCard = ({ customer: { id, storeName, totalOrder } }: Props) => {
  return (
    <div className="p-[10px] flex bg-gray-50 mb-[20px] shadow-gray-800 items-center">
      <div className="w-[60px] text-uppercase h-[60px] font-black bg-gray-300 grid place-items-center ">
        {nameAbbr(storeName)}
      </div>
      <div className="pl-[20px]">
        <h2>{storeName}</h2>
        <h3 className="text-gray-400">{totalOrder} Orders</h3>
      </div>
    </div>
  );
};

export default CustomerCard;
