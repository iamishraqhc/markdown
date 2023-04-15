// lib/markdown.ts

import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}

export function createMarkdownPreview(markdown: string): string {
  marked.setOptions({ sanitize: true });
  return sanitizeHtml(marked(markdown));
}
