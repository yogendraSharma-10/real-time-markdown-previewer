import { marked } from 'marked';
import DOMPurify from 'dompurify'; // For robust HTML sanitization

/**
 * @file Utility for parsing Markdown text into HTML.
 * @module utils/markdownParser
 */

// Configure marked.js for common use cases
// - gfm: GitHub Flavored Markdown (tables, task lists, strikethrough)
// - breaks: Render newlines as <br> tags
// - sanitize: Marked's built-in sanitizer (less robust than DOMPurify, but a first line of defense)
// - highlight: (Optional) Function to highlight code blocks. For this project, we'll keep it simple
//              and rely on CSS for basic code block styling. If advanced syntax highlighting is needed,
//              a library like 'highlight.js' or 'prism.js' would be integrated here.
marked.setOptions({
  gfm: true,
  breaks: true,
  // Marked's built-in sanitizer is basic. We'll use DOMPurify for more robust sanitization.
  // Setting marked's sanitize to false to let DOMPurify handle it entirely.
  sanitize: false,
  // Optional: Add custom renderer if needed, e.g., to add target="_blank" to links
  // renderer: new marked.Renderer(),
});

/**
 * Parses a Markdown string into an HTML string.
 * It uses `marked.js` for the core parsing and `DOMPurify` for sanitization
 * to prevent XSS attacks when rendering user-provided Markdown.
 *
 * @param {string} markdownText - The Markdown string to parse.
 * @returns {string} The sanitized HTML string.
 */
export const parseMarkdownToHtml = (markdownText) => {
  if (typeof markdownText !== 'string') {
    console.warn('parseMarkdownToHtml received non-string input:', markdownText);
    return '';
  }

  // 1. Parse Markdown to raw HTML using marked.js
  // marked.parse returns a Promise in newer versions, but for synchronous use,
  // it can be called directly if not using async features like custom loaders.
  // For a simple previewer, synchronous parsing is often preferred for responsiveness.
  const rawHtml = marked.parse(markdownText);

  // 2. Sanitize the generated HTML using DOMPurify
  // This is crucial for security, especially when dealing with user-generated content,
  // to prevent Cross-Site Scripting (XSS) vulnerabilities.
  // DOMPurify.sanitize returns a string.
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    USE_PROFILES: { html: true }, // Ensure standard HTML elements are allowed
    // You can customize allowed tags, attributes, etc., if needed.
    // For example, to allow custom elements:
    // ALLOWED_TAGS: ['p', 'a', 'img', 'h1', 'h2', 'h3', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'hr'],
    // ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style'],
  });

  return cleanHtml;
};

// Example usage (for testing/demonstration purposes, not executed in production)
/*
if (process.env.NODE_ENV === 'development') {
  const testMarkdown = `
# Hello World

This is a **bold** text and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello from code block!');
\`\`\`

<script>alert('XSS Attempt!');</script>
`;
  const htmlOutput = parseMarkdownToHtml(testMarkdown);
  console.log('Parsed HTML:', htmlOutput);
}
*/