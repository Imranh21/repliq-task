import React, { useCallback, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ProductCard = ({
  product: { title, imageUrl, price, discountPrice, unit, isAvailable },
}: any) => {
  const [toggleState, setToggleState] = useState<boolean>(true);

  const handleToggle = useCallback(() => {
    setToggleState((prev) => !prev);
  }, [toggleState]);

  return (
    <div className="p-[10px] w-[280px] bg-white">
      <div className="flex items-center relative">
        <div className="w-[80px] h-[80px] overflow-hidden rounded-[5px]">
          <img className="w-[100%] h-[100%]" src={imageUrl} alt="" />
        </div>
        <div className="absolute top-0 right-0">
          <BiDotsVerticalRounded />
        </div>
        <div className="ml-[10px] flex-1">
          <div>
            <h3>{title}</h3>
            <p>{unit} units</p>

            <div className="flex">
              <p className="">{discountPrice}</p>
              <p className="ml-[10px] line-through text-gray-400">{price}</p>
            </div>
          </div>
          <div className="flex justify-between">
            {isAvailable && <p className="text-green-600">In stock</p>}

            <div
              onClick={handleToggle}
              className={`w-[60px] flex h-[30px] cursor-pointer rounded-[50px] ${
                toggleState ? "bg-blue-600" : "bg-gray-200"
              } p-[5px]`}
            >
              <div
                className={`w-[20px] ${
                  toggleState && "ml-[auto]"
                } h-[20px] bg-white rounded-full`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-200 mt-[6px]" />
      <div className="grid place-items-center">
        <div className="flex items-center mt-[6px] cursor-pointer">
          <FiShare2 />
          <h3 className="ml-[10px]">Share product</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
