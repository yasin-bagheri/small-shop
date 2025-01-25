import React, { useEffect } from "react";
import { UseHeader } from "../../../context/header-provider.tsx";

export default function ProductView() {
  const { setHeader } = UseHeader();

  useEffect(() => {
    setHeader({
      content: (
        <React.Fragment>
          <div className="text-2xl font-bold flex items-center justify-between w-full">
            <span>Products</span>
          </div>

          <div className="text-[#475467] h-[40px] flex items-center">
            Add product Manage the list of new products in this section.
          </div>
        </React.Fragment>
      ),
      breadCrumbs: [
        {
          href: "",
          title: <span className="text-primary">Product</span>,
        },
      ],
    });
  }, [setHeader]);

  return <div className="flex w-full"></div>;
}
