import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../../axios/client";
import ProductCard from "./ProductCard";

const ProductsComponent = () => {
  const [allProducts, setAllProducts] = useState<[]>([]);

  const getAllProducts = useCallback(async () => {
    try {
      const { data } = await client.get("/products");
      setAllProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="">
      <div className="flex bg-gray-100 px-[4rem] py-[1rem] gap-[20px]">
        {allProducts.map((product: any) => (
          <ProductCard key={product?.id} {...{ product }} />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
