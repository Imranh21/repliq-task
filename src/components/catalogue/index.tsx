import React, { useCallback, useMemo, useState } from "react";
import CategoriesComponent from "./categories";
import ProductsComponent from "./products";

enum Tabs {
  PRODUCTS = "products",
  CATEGORIES = "categories",
}
const Components: any = {
  [Tabs.PRODUCTS]: ProductsComponent,
  [Tabs.CATEGORIES]: CategoriesComponent,
};

const CatalogueComponent = () => {
  const [activeComponent, setActiveComponent] = useState<string>(Tabs.PRODUCTS);

  const handleActiveComponent = useCallback((component: string) => {
    setActiveComponent(component);
  }, []);

  const ActiveComponent = useMemo(
    () => Components[activeComponent],
    [activeComponent]
  );

  return (
    <>
      <div className="d-flex bg-blue-600 text-gray-50 px-[4rem] pt-[20px]">
        <h2 className="text-2xl">Catelogues</h2>
        <div className="flex mt-[20px]">
          <h2
            onClick={() => handleActiveComponent(Tabs.PRODUCTS)}
            className={`text-xl p-[10px] cursor-pointer ${
              activeComponent === Tabs.PRODUCTS &&
              "border-solid border-white border-b-[4px]"
            }`}
          >
            Products
          </h2>
          <h2
            onClick={() => handleActiveComponent(Tabs.CATEGORIES)}
            className={`text-xl p-[10px] cursor-pointer ${
              activeComponent === Tabs.CATEGORIES &&
              "border-solid border-white border-b-[4px]"
            }`}
          >
            Categories
          </h2>
        </div>
      </div>
      <ActiveComponent {...{ handleActiveComponent }} />
    </>
  );
};

export default CatalogueComponent;
