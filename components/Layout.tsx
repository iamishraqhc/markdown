// components/Layout.tsx

import Head from "next/head";
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="bg-white shadow">
        <h1 className="text-3xl font-bold">Markdown Editor</h1>
      </header>
      <main className="container mx-auto py-6 px-5">{children}</main>
    </div>
  );
};

export default Layout;
