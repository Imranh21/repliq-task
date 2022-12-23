import React from "react";

const ProductsComponent = () => {
  return (
    <div className="">
      <div className="d-flex bg-blue-600 text-gray-50  px-[4rem] py-[1rem]">
        <div>
          <div></div>
          <h2 className="my-[20px] text-2xl">Products</h2>
        </div>

        <div>
          <input
            className="px-[20px] py-[12px] w-[100%] rounded-[5px]"
            placeholder="Search"
          />
        </div>
      </div>

      {/* <div className="flex bg-gray-100 px-[4rem] py-[1rem] gap-[20px]">
        {allOrders.map((order: any) => (
          <OrderCard key={order?.id} order={order} />
        ))}
      </div> */}
    </div>
  );
};

export default ProductsComponent;
