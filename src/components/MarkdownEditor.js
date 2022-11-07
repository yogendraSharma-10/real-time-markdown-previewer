import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} MarkdownEditorProps
 * @property {string} markdownText - The current Markdown text to display in the editor.
 * @property {function(string): void} onMarkdownChange - Callback function to be invoked when the Markdown text changes.
 */

/**
 * MarkdownEditor component provides a textarea for users to input Markdown text.
 * It's a controlled component, meaning its value is managed by its parent component.
 *
 * @param {MarkdownEditorProps} props - The properties for the component.
 * @returns {JSX.Element} The Markdown editor UI.
 */
const MarkdownEditor = ({ markdownText, onMarkdownChange }) => {
  /**
   * Handles changes to the textarea's value.
   * Calls the `onMarkdownChange` prop with the new value.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The change event from the textarea.
   */
  const handleChange = (event) => {
    onMarkdownChange(event.target.value);
  };

  return (
    <section className="markdown-editor-panel" aria-labelledby="markdown-editor-label">
      <h2 id="markdown-editor-label" className="panel-title">Markdown Editor</h2>
      <div className="editor-container">
        <label htmlFor="markdown-input" className="sr-only">
          Enter your Markdown text here
        </label>
        <textarea
          id="markdown-input"
          className="markdown-textarea"
          value={markdownText}
          onChange={handleChange}
          placeholder="Start typing your Markdown here..."
          aria-label="Markdown input editor"
          spellCheck="true"
          autoFocus // Automatically focus the editor on load for better UX
        />
      </div>
    </section>
  );
};

/**
 * PropTypes for the MarkdownEditor component to ensure type safety and provide documentation.
 */
MarkdownEditor.propTypes = {
  markdownText: PropTypes.string.isRequired,
  onMarkdownChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;