import React from "react";

const colors = ["#00B600", "#FCB522", "#FF6A00"];

enum STATUS {
  PENDING = "Pending",
  SHIPPED = "Shipped",
  ACCEPTED = "Accepted",
}

const OrderStatus = ({ orderStatus }: { orderStatus: string }) => {
  const orderStatusIndicator =
    orderStatus === STATUS.ACCEPTED
      ? colors[0]
      : orderStatus === STATUS.PENDING
      ? colors[1]
      : colors[2];

  return (
    <div className="flex items-center">
      <div
        style={{
          backgroundColor: orderStatusIndicator,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      />
      <div className="ml-[5px] text-[16px]">{orderStatus}</div>
    </div>
  );
};

export default OrderStatus;
