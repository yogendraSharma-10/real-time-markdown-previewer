import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} PreviewPanelProps
 * @property {string} htmlContent - The HTML string to be rendered in the preview panel.
 */

/**
 * PreviewPanel Component
 *
 * Displays the rendered HTML content from the Markdown editor.
 * It uses `dangerouslySetInnerHTML` to inject the HTML string directly into the DOM,
 * which is necessary for displaying parsed Markdown but requires careful handling
 * to prevent XSS vulnerabilities (in this project, the markdownParser is assumed
 * to handle sanitization if needed, or the input is trusted).
 *
 * @param {PreviewPanelProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered preview panel.
 */
const PreviewPanel = ({ htmlContent }) => {
  return (
    <div className="preview-panel" aria-live="polite" aria-atomic="true">
      <h2 className="panel-title">Preview</h2>
      {/* 
        WARNING: Using dangerouslySetInnerHTML is necessary here to render raw HTML
        generated from Markdown. Ensure that the `htmlContent` is sanitized
        before being passed to this component if it originates from untrusted sources.
        For this project, we assume the `markdownParser` utility handles any necessary
        sanitization or the input is controlled.
      */}
      <div
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        data-testid="preview-content"
      />
    </div>
  );
};

/**
 * Prop types for the PreviewPanel component.
 * Ensures that `htmlContent` is a required string.
 */
PreviewPanel.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default PreviewPanel;