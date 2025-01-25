import { Button } from "antd";
import React, { useState } from "react";
import ConfirmModal from "../../components/confirm/confirm-modal.tsx";

interface CategoryItemProps {
  category: any;
}
export default function CategoryItem({ category }: CategoryItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between p-5 rounded-lg bg-white h-[70px]">
      <span className="font-[600]">{category?.title}</span>
      <div>
        <Button className="px-1.5">
          <img src="/icons/pen.svg" alt="" />
        </Button>

        <Button
          className="px-1.5 ml-2"
          variant="filled"
          color="red"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src="/icons/trash.svg" alt="" />
        </Button>
      </div>

      <ConfirmModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title={category?.title || ""}
        content="Are you sure you want to delete this category? all subcategory of this
          category will deleted !"
      />
    </div>
  );
}
