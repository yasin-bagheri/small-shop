import React from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="flex flex-col space-y-4 items-center justify-center w-full h-[calc(100vh)] gap-2">
        <img src="/images/logo/logo.svg" className="max-w-[250px] mb-10" alt="logo" />
        <Outlet />
      </div>

      <div>
        <img src="/images/auth/bg.svg" className="w-full h-[100vh] object-cover" alt="" />
      </div>
    </div>
  );
}
