import React, { PropsWithChildren } from "react";

export type TestLayoutProps = PropsWithChildren<{

}>;

export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <div style={{ background: "wheat" }}>
      {children}
    </div>
  );
}
