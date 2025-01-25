import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import agent from "../../api/agent";
import React from "react";
import { Button, Form, FormProps, Input, message, Modal } from "antd";

// ----------------------------------------------------------------------

type FieldType = {
  name?: string;
};

type Props = {
  formType: "new" | "edit";
  open: boolean;
  onClose: VoidFunction;
};

export default function CategoryNewEditForm({ open, onClose }: Props) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  // const getData = useCallback(() => {
  //   agent.Category.getAll()
  //     .then((c) => {
  //       // console.log(c);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  // const post = useCallback(
  //   async (data: IRecordItem, another?: boolean) => {
  //     data.swimmerId = data.swimmer?.id ?? 0;
  //     data.swimmer = null;
  //     await agent.Record.create(data)
  //       .then(() => {
  //         // console.log(response);
  //         enqueueSnackbar(t("successfully_submitted"), {
  //           variant: "success",
  //         });

  //         if (formType === "quickCreate" && onUpdate) onUpdate();

  //         if (another) reset();
  //         else if (formType !== "quickCreate")
  //           router.push(paths.dashboard.record.list);
  //       })
  //       .catch((err) => console.error(err))
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   },
  //   [enqueueSnackbar, formType, onUpdate, reset, router, t]
  // );

  // const update = useCallback(
  //   async (data: IRecordItem) => {
  //     data.swimmerId = data.swimmer?.id ?? 0;
  //     data.swimmer = null;
  //     await agent.Record.update(data)
  //       .then((response) => {
  //         // console.log(response);
  //         enqueueSnackbar(t("successfully_saved"), {
  //           variant: "success",
  //         });

  //         if (formType === "quickEdit" && onUpdate) onUpdate();
  //         else router.push(paths.dashboard.record.list);
  //       })
  //       .catch((err) => console.error(err))
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   },
  //   [enqueueSnackbar, formType, onUpdate, router, t]
  // );

  const onSubmit = useCallback(async (data: any) => {
    try {
      // if (formType === "new")
      // await post(data, false);
      // else await update(data);
      // console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // const onDelete = () => {
  //   setDLoading(true);
  //   agent.Record.delete({ id: record?.id ?? 0 })
  //     .then((response) => {
  //       enqueueSnackbar(t("successfully_deleted"), {
  //         variant: "success",
  //       });
  //       router.push(paths.dashboard.record.list);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setDLoading(false);
  //     });
  // };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    // console.log("success:", values);
    try {
      // await login(values);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (open) {
    } else {
      form.resetFields();
    }
  }, [form, open]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="New Category"
      okText="Confirm"
      footer={[]}
      className="max-w-[350px]"
      classNames={{
        content: "!p-0",
        header: "!px-5 !py-4",
      }}
    >
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
            {contextHolder}

            <Form.Item<FieldType>
              label="Category Name"
              name="name"
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
