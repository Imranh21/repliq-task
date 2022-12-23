import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../axios/client";
import { Customer } from "../../interfaces";
import CustomerCard from "./CustomerCard";

const AllCustomersComponent = () => {
  const [allCustomers, setAllCustomers] = useState<[]>([]);

  const getAllCustomers = useCallback(async () => {
    try {
      const { data } = await client.get("/customers");
      setAllCustomers(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAllCustomers();
  }, []);
  return (
    <div className="">
      <div className="d-flex bg-blue-600 text-gray-50  px-[4rem] py-[1rem] ">
        <div>
          <div></div>
          <h2 className="my-[20px] text-2xl">My custmers</h2>
        </div>

        <div>
          <input
            className="px-[20px] py-[12px] w-[100%] rounded-[5px]"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="maxW-[600px] bg-gray-100 px-[4rem] py-[1rem] overflow-scroll">
        {allCustomers.map((customer: Customer) => (
          <CustomerCard key={customer?.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default AllCustomersComponent;
