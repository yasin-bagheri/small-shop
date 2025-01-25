import React, { useCallback, useEffect, useState } from "react";
import { UseHeader } from "../../../context/header-provider.tsx";
import { Button, Pagination } from "antd";
import agent from "../../../api/agent.ts";
import Loading from "../../../components/loading/loading.tsx";
import CategoryItem from "../category-item.tsx";
import CategoryNewEditForm from "../category-new-edit-form.tsx";

export default function CategoryListView() {
  const { setHeader } = UseHeader();
  const [loading, setLoading] = useState<boolean>(false);

  const [createModal, setCreateModal] = useState<boolean>(false);

  useEffect(() => {
    setHeader({
      content: (
        <React.Fragment>
          <div className="text-2xl font-bold flex items-center justify-between w-full">
            <span>Category</span>
            <Button
              variant="solid"
              color="primary"
              onClick={() => setCreateModal(true)}
            >
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
    setLoading(true);
    var response = await agent.Category.list();
    console.log(response);
    setLoading(false);
    setCategories(response?.categories?.data || []);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex w-full h-full pb-10">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loading loading={true} />
        </div>
      ) : (
        <>
          {categories?.length > 0 && (
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-h-[calc(100vh-250px)] overflow-y-auto">
                {categories?.map((category, index) => {
                  return (
                    <CategoryItem
                      key={`category-${category?.id}`}
                      category={category}
                      onUpdate={() => getData()}
                      onDeleteCategory={() => getData()}
                    />
                  );
                })}
              </div>

              <Pagination
                align="center"
                className="absolute bottom-0 right-0 left-0 bg-white p-5 w-full"
                defaultCurrent={1}
                total={50}
                nextIcon={
                  <Button className="absolute right-5">
                    Next
                    <img src="/icons/arrow-right.svg" width={15} alt="" />
                  </Button>
                }
                prevIcon={
                  <Button className="absolute left-5">
                    <img
                      src="/icons/arrow-right.svg"
                      className="rotate-180"
                      width={15}
                      alt=""
                    />
                    Prev
                  </Button>
                }
              />
            </div>
          )}
          {categories?.length < 1 && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
              <img src="/icons/no-category.svg" alt="" />
              <span className="font-bold">No Category Found</span>
              <Button
                variant="solid"
                color="primary"
                onClick={() => setCreateModal(true)}
              >
                + Add Category
              </Button>
            </div>
          )}
        </>
      )}

      <CategoryNewEditForm
        formType="new"
        open={createModal}
        onClose={() => setCreateModal(false)}
        onUpdate={() => {
          setCreateModal(false);
          getData();
        }}
      />
    </div>
  );
}
