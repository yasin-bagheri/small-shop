import { Button, Form, FormProps, Input, message } from "antd";
import React, { useCallback, useState } from "react";
import { Link } from "react-router";
import agent from "../../api/agent.ts";

type FieldType = {
  email?: string;
  password?: string;
};

export default function LoginView() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    async (values: FieldType) => {
      setLoading(true);
      await agent.Auth.login({
        email: values?.email || "",
        password: values?.password || "",
      })
        .then((response) => {
          console.log(response);
          sessionStorage.setItem("accessToken", response?.token);
          window.location.href = "/dashboard";
        })
        .catch((error) => {
          console.error(error);

          messageApi.error(error?.message || "something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [messageApi]
  );

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    // console.log("success:", values);
    try {
      await login(values);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      // style={{ maxWidth: 400 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="md:max-w-[400px] max-w-[70%] flex flex-col"
    >
      {contextHolder}
      <h2 className="text-2xl text-center font-bold my-4">Login</h2>

      <div className="my-4">
        Dont have an account?{" "}
        <Link to="/auth/register" className="text-primary">
          register
        </Link>
      </div>
      <Form.Item<FieldType>
        label="Email Address"
        name="email"
        required={false}
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          size="large"
          placeholder="Type Here..."
          prefix={<img src="/icons/email.svg" alt="" className="mr-1" />}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        required={false}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" placeholder="Type Here..." />
      </Form.Item>

      <span>
        By signing in or registering, I accept the{" "}
        <span className="text-primary font-bold">terms</span> and{" "}
        <span className="text-primary font-bold">conditions</span> of use of
        Apin and its privacy policy.
      </span>

      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full mt-10 bg-primary"
          size="large"
          loading={loading}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
