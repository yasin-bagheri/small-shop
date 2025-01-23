import React from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const navigate = useNavigate();

  const authenticated = sessionStorage?.getItem("accessToken") ?? null;

  const check = useCallback(() => {
    if (authenticated) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
