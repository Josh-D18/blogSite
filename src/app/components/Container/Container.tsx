import React, { ReactNode } from "react";

const Container: ({
  children,
}: {
  children: ReactNode;
}) => React.JSX.Element = ({ children }: { children: ReactNode }) => {
  return <div className="h-full w-full">{children}</div>;
};

export default Container;
