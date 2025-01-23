import React from "react";
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate();

  const authenticated = sessionStorage?.getItem("accessToken") ?? null;

  // console.log(authenticated);

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      navigate("/auth/login", {
        replace: true,
      });
    } else {
      setChecked(true);
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
