import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../axios/client";
import OrderCard from "./OrderCard";

const AllOrdersComponent = () => {
  const [allOrders, setAllOrders] = useState<[]>([]);

  const getAllOrders = useCallback(async () => {
    try {
      const { data } = await client.get("/allOrders");
      setAllOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="">
      <div className="d-flex bg-blue-600 text-gray-50  px-[4rem] py-[1rem]">
        <div>
          <div></div>
          <h2 className="my-[20px] text-2xl">All Orders</h2>
        </div>

        <div>
          <input
            className="px-[20px] py-[12px] w-[100%] rounded-[5px]"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex bg-gray-100 px-[4rem] py-[1rem] gap-[20px]">
        {allOrders.map((order: any) => (
          <OrderCard key={order?.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default AllOrdersComponent;
