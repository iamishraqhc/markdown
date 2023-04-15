// components/Editor.tsx

import React, { useState, useEffect } from "react";
// import marked from "marked";
// import DOMPurify from "dompurify";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

interface EditorProps {
  onChange: (value: string) => void;
  initialValue: string;
}

const Editor = ({ onChange, initialValue }: EditorProps) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  // const html = marked(value);
  const html = marked(value);
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="editor" className="block font-medium text-gray-700 mb-2">
          Editor
        </label>
        <textarea
          id="editor"
          className="w-full h-80 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="preview" className="block font-medium text-gray-700 mb-2">
          Preview
        </label>
        <div
          id="preview"
          className="prose prose-indigo"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </div>
    </div>
  );
};

export default Editor;
