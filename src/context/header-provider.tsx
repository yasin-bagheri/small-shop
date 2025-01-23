import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import React from "react";
import { createContext, useContext, useState } from "react";

interface IHeader {
  content?: React.ReactNode;
  breadCrumbs: BreadcrumbItemType[];
}

export function createHeaderCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const headerCtx = createContext({
    header: defaultValue,
    setHeader: defaultUpdate,
  });

  function CHProvider(props: React.PropsWithChildren<{}>) {
    const [header, setHeader] = useState(defaultValue);
    return <headerCtx.Provider value={{ header, setHeader }} {...props} />;
  }
  return [headerCtx, CHProvider] as const;
}

const [headerCtx, HProvider] = createHeaderCtx<IHeader>({
  breadCrumbs: [],
  content: <></>,
});

export const headerContext = headerCtx;

export function HeaderProvider({ children }: any) {
  return <HProvider>{children}</HProvider>;
}

export function UseHeader() {
  return useContext(headerContext);
}
