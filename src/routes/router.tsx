import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "../layouts/auth/auth-layout.tsx";
import Login from "../pages/auth/login.tsx";
import Register from "../pages/auth/register.tsx";
import DashboardLayout from "../layouts/dashboard/dashboard-layout.tsx";
import AuthGuard from "../auth/auth-guard.tsx";
import GuestGuard from "../auth/guest-guard.tsx";

const CategoryList = lazy(
  () => import("../sections/category/view/category-list-view.tsx")
);

export default function Router() {
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <GuestGuard>
            <AuthLayout />
          </GuestGuard>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        }
      >
        <Route path="category">
          <Route path="list" element={<CategoryList />} />
          <Route
            path=""
            element={<Navigate to="/dashboard/category/list" replace />}
          />
        </Route>

        <Route path="order">
          <Route path="list" index element={<div>order</div>} />
          <Route
            path=""
            element={<Navigate to="/dashboard/order/list" replace />}
          />
        </Route>

        <Route path="product">
          <Route path="list" index element={<div>product</div>} />
          <Route
            path=""
            element={<Navigate to="/dashboard/product/list" replace />}
          />
        </Route>

        <Route
          path=""
          element={<Navigate to="/dashboard/category/list" replace />}
        />
      </Route>
    </Routes>
  );
}
