import { Spin } from "antd";
import React from "react";

interface Props {
  loading: boolean;
}

export default function Loading({ loading }: Props) {
  return (
    <>
      <Spin spinning={loading} size="large" />
    </>
  );
}
