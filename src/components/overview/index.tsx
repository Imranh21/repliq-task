import React, { useState, useCallback, useEffect } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { client } from "../../axios/client";
import { OverviewConstants } from "../../constants/overview";
import ProductCard from "../catalogue/products/ProductCard";
import OrderCard from "../orders/OrderCard";
import OverviewCard from "./OverviewCard";

const OverviewComponent = () => {
  const [allOrders, setAllOrders] = useState<[]>([]);
  const [allProducts, setAllProducts] = useState<[]>([]);
  const navigate = useNavigate();

  const getAllProducts = useCallback(async () => {
    try {
      const { data } = await client.get("/products");
      setAllProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getAllOrders = useCallback(async () => {
    try {
      const { data } = await client.get("/allOrders");
      setAllOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRoute = useCallback(
    (route: any) => {
      navigate(route);
    },
    [navigate]
  );

  useEffect(() => {
    getAllOrders();
    getAllProducts();
  }, []);

  return (
    <div className="bg-gray-100 px-[4rem] py-[1rem] ">
      <div className="d-flex"></div>

      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-[22px]">Overview</h3>
          <div className="flex items-center">
            <p className="mr-[6px]">Last week</p>
            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className="flex my-[20px] gap-[20px]">
          {OverviewConstants.map((overview) => (
            <OverviewCard key={overview?.id} {...{ overview }} />
          ))}
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[22px]">Active Orders</h3>
          <div className="flex items-center">
            <p
              onClick={() => handleRoute("/orders")}
              className="mr-[6px] cursor-pointer"
            >
              View all
            </p>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex my-[20px] gap-[20px]">
          {allOrders.map((order: any) => (
            <OrderCard key={order?.id} order={order} />
          ))}
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[22px]">Products</h3>
          <div className="flex items-center">
            <p
              onClick={() => handleRoute("/catalogues")}
              className="mr-[6px] cursor-pointer"
            >
              View all
            </p>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex my-[20px] gap-[20px]">
          {allProducts.map((product: any) => (
            <ProductCard key={product?.id} {...{ product }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
