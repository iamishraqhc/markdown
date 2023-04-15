// pages/index.tsx

import React, { useState } from "react";
import Layout from "../components/Layout";
import Editor from "../components/Editor";

const IndexPage = () => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (value: string) => {
    setMarkdown(value);
  };

  return (
    <Layout title="Markdown Editor">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Editor onChange={handleMarkdownChange} initialValue={markdown} />
      </div>
    </Layout>
  );
};

export default IndexPage;
