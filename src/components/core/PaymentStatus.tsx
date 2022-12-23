import React from "react";

const PaymentStatus = ({ paymentStatus }: any) => {
  return (
    <>
      {paymentStatus === "OOD" ? (
        <div className="py-[4px] px-[8px] bg-[#FFE9DD] rounded-[5px]">
          <div className="text-[#F7BC98] text-[14px] font-black">
            {paymentStatus}
          </div>
        </div>
      ) : (
        <div className="py-[4px] px-[8px] bg-[#FFD9DD] rounded-[5px]">
          <div className="text-[#F18790] text-[14px] font-black ">
            {paymentStatus}
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentStatus;
