import { Button, Form, FormProps, Input } from "antd";
import React from "react";
import { Link } from "react-router";

type FieldType = {
  email?: string;
  password?: string;
};

export default function RegisterView() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
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
      style={{ maxWidth: 400 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 className="text-2xl text-center font-bold my-4">Register</h2>

      <div className="my-4">
        have an account?{" "}
        <Link to="/auth/login" className="text-primary">
          login
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
        <span className="text-[#002991] font-bold">terms</span> and{" "}
        <span className="text-[#002991] font-bold">conditions</span> of use of
        Apin and its privacy policy.
      </span>

      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-4 bg-[#004eeb]"
          disabled
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
