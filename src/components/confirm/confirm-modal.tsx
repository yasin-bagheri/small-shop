import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import agent from "../../api/agent";
import React from "react";
import { Button, Form, FormProps, Input, message, Modal } from "antd";

type Props = {
  title: string;
  content?: string | React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
};

export default function ConfirmModal({ open, title, content, onClose }: Props) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={
        <>
          <img src="/icons/danger.svg" alt="" />
        </>
      }
      okText="Confirm"
      footer={[]}
      className="max-w-[350px]"
      classNames={{
        content: "!p-0",
        header: "!px-5 !py-4",
      }}
    >
      <div className="flex flex-col px-5 pb-5">
        <span className="text-xl font-bold">Deleting {title}</span>
        <span className="mt-2">{content}</span>
      </div>

      {/* footer */}
      <div className="w-full grid grid-cols-2 gap-2 border-t p-5">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="solid"
          color="red"
          htmlType="submit"
          // loading={loading}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}
