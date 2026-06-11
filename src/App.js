import React, { useState, useEffect } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import PreviewPanel from './components/PreviewPanel';
import './App.css';

/**
 * App Component
 *
 * This is the main application component for the Real-time Markdown Previewer.
 * It manages the global markdown text state and orchestrates the interaction
 * between the MarkdownEditor and PreviewPanel components.
 */
function App() {
  // State to hold the current markdown text entered by the user.
  // Initialized with some example markdown to demonstrate functionality.
  const [markdownText, setMarkdownText] = useState(
    `# Welcome to the Real-time Markdown Previewer!

This application allows you to type Markdown text on the left and see a **live, rendered HTML preview** on the right.

## How to Use
1.  Start typing or paste your Markdown content into the editor panel.
2.  Watch the preview panel update instantly with the rendered HTML.

### Supported Markdown Features
*   **Bold** and *Italic* text
*   \`Inline code\`
*   \`\`\`javascript
// Code blocks with syntax highlighting (if configured in markdownParser)
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
*   [Links](https://www.example.com)
*   > Blockquotes
*   - Unordered lists
    - Nested items
*   1. Ordered lists
    2. Another item
*   Images: ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg "React Logo")

---

### Cross-Project Context & Future Integrations
This Markdown Previewer is part of a larger ecosystem. In the future, it could be integrated with services like:
*   **Personal Recipe Book**: To allow users to write recipe instructions or descriptions using Markdown.
*   **Search Service**: To index and search Markdown content created within various applications.

\`\`\`json
{
  "project": "Real-time Markdown Previewer",
  "status": "active",
  "version": "1.0.0"
}
\`\`\`
`
  );

  /**
   * Handles changes from the MarkdownEditor component.
   * Updates the `markdownText` state with the new value.
   * @param {string} newText - The updated markdown text from the editor.
   */
  const handleMarkdownChange = (newText) => {
    setMarkdownText(newText);
  };

  // Effect to set the document title for better user experience.
  useEffect(() => {
    document.title = "Real-time Markdown Previewer";
  }, []); // Empty dependency array means this runs once on mount.

  return (
    <div className="App">
      {/* Application Header */}
      <header className="App-header">
        <h1>Real-time Markdown Previewer</h1>
        <p>Type Markdown on the left, see the HTML preview on the right.</p>
      </header>

      {/* Main content area containing the editor and preview panels */}
      <main className="App-main">
        <MarkdownEditor
          markdownText={markdownText}
          onMarkdownChange={handleMarkdownChange}
        />
        <PreviewPanel
          markdownText={markdownText}
        />
      </main>

      {/* Application Footer */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Real-time Markdown Previewer. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;