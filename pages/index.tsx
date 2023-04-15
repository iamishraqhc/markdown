// pages/index.tsx

import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Editor from "../components/Editor";
import { marked } from "marked";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <Head>
        <title>Markdown Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 px-2">
            <Editor initialValue={markdown} onChange={setMarkdown} />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div
              className="markdown-preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
