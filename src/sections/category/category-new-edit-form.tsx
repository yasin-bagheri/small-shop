import { useCallback, useEffect, useState } from "react";
import agent from "../../api/agent.ts";
import React from "react";
import { Button, Form, FormProps, Input, message, Modal } from "antd";

// ----------------------------------------------------------------------

type FieldType = {
  title?: string;
};

type Props = {
  formType: "new" | "edit";
  open: boolean;
  id?: number;
  title?: string;
  onClose: VoidFunction;
  onUpdate: VoidFunction;
};

export default function CategoryNewEditForm({
  id,
  title,
  open,
  onClose,
  onUpdate,
  formType,
}: Props) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState<boolean>(false);

  const post = useCallback(
    async (values: FieldType) => {
      setLoading(true);
      await agent.Category.create({
        title: values?.title || "",
      })
        .then(() => {
          // console.log(response);
          messageApi.success("category added");
          onUpdate();
        })
        .catch((error) => {
          console.error(error);
          messageApi.error(error?.message || "something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [messageApi, onUpdate]
  );

  const update = useCallback(
    async (values: FieldType) => {
      setLoading(true);
      await agent.Category.update(id || 0, {
        title: values?.title || "",
      })
        .then(() => {
          // console.log(response);
          messageApi.success("category updated");
          onUpdate();
        })
        .catch((error) => {
          console.error(error);
          messageApi.error(error?.message || "something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [id, messageApi, onUpdate]
  );

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    // console.log("success:", values);
    try {
      if (formType === "new") await post(values);
      else await update(values);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    // console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (open) {
      if (formType === "edit") form.setFieldValue("title", title);
    } else {
      form.resetFields();
    }
  }, [form, formType, id, open, title]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={formType === "new" ? "New Category" : "Update Category"}
      okText="Confirm"
      footer={[]}
      className="max-w-[350px]"
      classNames={{
        content: "!p-0",
        header: "!px-5 !py-4",
      }}
    >
      {contextHolder}
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col">
          <div className="border-t px-5 pt-3">
            <Form.Item<FieldType>
              label="Category Name"
              name="title"
              required={false}
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input size="large" placeholder="Type Here..." />
            </Form.Item>
          </div>

          {/* footer */}
          <div className="w-full grid grid-cols-2 gap-2 border-t p-5">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              color="primary"
              htmlType="submit"
              loading={loading}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
