import React, { useCallback, useEffect, useState } from "react";
import { UseHeader } from "../../context/header-provider.tsx";
import { Button } from "antd";
import agent from "../../api/agent.ts";

export default function CategoryListView() {
  const { setHeader } = UseHeader();
  useEffect(() => {
    setHeader({
      content: (
        <React.Fragment>
          <div className="text-2xl font-bold flex items-center justify-between w-full">
            <span>Category</span>
            <Button variant="solid" color="primary">
              + Add Category
            </Button>
          </div>

          <div className="text-[#475467] h-[40px] flex items-center">
            Manage the list of category and subcategory in this section.
          </div>
        </React.Fragment>
      ),
      breadCrumbs: [
        {
          href: "",
          title: <span className="text-primary">Category</span>,
        },
      ],
    });
  }, [setHeader]);

  const [categories, setCategories] = useState<any[]>([]);

  const getData = useCallback(async () => {
    var response = await agent.Category.list();
    console.log(response);
    setCategories(response || []);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
      <img src="/icons/no-category.svg" alt="" />
      <span className="font-bold">No Category Found</span>
      <Button variant="solid" color="primary">
        + Add Category
      </Button>
    </div>
  );
}
