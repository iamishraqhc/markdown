// components/Layout.tsx

import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
