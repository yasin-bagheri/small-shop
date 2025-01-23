import { Button } from "antd";
import React from "react";

interface CategoryItemProps {
  category: any;
}
export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex items-center justify-between p-5 rounded-lg bg-white h-[70px]">
      <span className="font-[600]">{category?.title}</span>
      <div>
        <Button className="px-1.5">
          <img src="/icons/pen.svg" alt="" />
        </Button>

        <Button className="px-1.5 ml-2" variant="filled" color="red">
          <img src="/icons/trash.svg" alt="" />
        </Button>
      </div>
    </div>
  );
}
