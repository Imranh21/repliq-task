import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import OrderStatus from "../core/OrderStatus";
import PaymentStatus from "../core/PaymentStatus";

const OrderCard = ({
  order: {
    orderId,
    timeStamps,
    paymentStatus,
    orderStatus,
    price,
    imageUrl,
    isNew,
    totalItems,
  },
}: any) => {
  return (
    <div className="px-[20px] py-[16px] w-[260px] bg-white">
      <div className="flex justify-between">
        <h3>Order {orderId}</h3>
        <h3 className="text-[14px] text-gray-400">{timeStamps}</h3>
      </div>
      <div className="flex justify-between items-center my-[10px] ">
        <div className="w-[50px] h-[50px]">
          <img src={imageUrl} />
        </div>
        <div className="flex flex-1 ml-[10px] items-center">
          <div className="">
            <h3 className="text-[14px]">{totalItems} ITEMS</h3>
            <h3 className="text-blue-700 text-[15px]">{price}</h3>
          </div>
          <div className="ml-auto">
            <PaymentStatus {...{ paymentStatus }} />
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-gray-200 h-[1px]" />
      <div className="flex justify-between mt-[10px]">
        <OrderStatus {...{ orderStatus }} />
        <div className="flex items-center py-[4px] px-[8px] rounded-[5px] text-[14px] border-solid border-[1px] border-gray-200">
          <p className="mr-[5px]">Details</p>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
