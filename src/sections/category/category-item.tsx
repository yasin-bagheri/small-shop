import { Button } from "antd";
import React, { useState } from "react";
import ConfirmModal from "../../components/confirm/confirm-modal.tsx";
import agent from "../../api/agent.ts";
import CategoryNewEditForm from "./category-new-edit-form.tsx";

interface CategoryItemProps {
  category: any;
  onUpdate: VoidFunction;
  onDeleteCategory: VoidFunction;
}
export default function CategoryItem({
  category,
  onUpdate,
  onDeleteCategory,
}: CategoryItemProps) {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const onDelete = () => {
    setLoading(true);
    agent.Category.delete(category?.id)
      .then((response) => onDeleteCategory())
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-between p-5 rounded-lg bg-white h-[70px]">
      <span className="font-[600]">{category?.title}</span>
      <div>
        <Button
          className="px-1.5"
          onClick={() => {
            setEdit(true);
          }}
        >
          <img src="/icons/pen.svg" alt="" />
        </Button>

        <Button
          className="px-1.5 ml-2"
          variant="filled"
          color="red"
          onClick={() => {
            setConfirm(true);
          }}
        >
          <img src="/icons/trash.svg" alt="" />
        </Button>
      </div>

      <CategoryNewEditForm
        formType="edit"
        open={edit}
        id={category?.id}
        title={category?.title}
        onClose={() => setEdit(false)}
        onUpdate={() => {
          setEdit(false);
          onUpdate();
        }}
      />

      <ConfirmModal
        open={confirm}
        onClose={() => {
          setConfirm(false);
        }}
        onSubmit={onDelete}
        loading={loading}
        title={category?.title || ""}
        content="Are you sure you want to delete this category? all subcategory of this
          category will deleted !"
      />
    </div>
  );
}
