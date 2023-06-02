import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs';
import "../Styles/editor.css"

const Editor = ({ onChange, isExpanded, toggleExpand }) => {
  const convertToHtml = (markdown) => {
    return marked(markdown);
  };
  const defaultMarkdown = `# Heading 1
  ## Subheading 2
  [Link](https://example.com)
  \`Inline Code\`
  \`\`\`
  // Code Block
  const message = 'Hello, world!';
  console.log(message);
  \`\`\`
  - List item
  > Blockquote
  ![Image](https://example.com/image.jpg)
  **Bold Text**`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [preview, setPreview] = useState(convertToHtml(defaultMarkdown));

  useEffect(() => {
    setPreview(convertToHtml(markdown));
  }, [markdown]);

  const handleInputChange = (event) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    onChange(newMarkdown);
  };

  return (
    <section className={`window editor ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="header-window edit">
        <h2>Editor</h2>
        {isExpanded ? (
          <BsArrowsAngleContract className="icon" onClick={toggleExpand} />
        ) : (
          <BsArrowsAngleExpand className="icon" onClick={toggleExpand} />
        )}
      </div>
      <textarea id="editor" value={markdown} onChange={handleInputChange} />
    </section>
  );
};

export default Editor;