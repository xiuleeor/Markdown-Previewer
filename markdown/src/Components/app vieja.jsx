import React, { useState } from 'react';
import Editor from '../src/components/editor';
import Previewer from './components/previewer';
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState('');
const [defaultMarkdown, setDefaultMarkdown] = useState(`# Heading 1
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
**Bold Text**`);
  const [isEditorExpanded, setIsEditorExpanded] = useState(false);
  const [isPreviewerExpanded, setIsPreviewerExpanded] = useState(false);

  const handleEditorChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const toggleEditorExpand = () => {
    setIsEditorExpanded(!isEditorExpanded);
    setIsPreviewerExpanded(false);
  };

  const togglePreviewerExpand = () => {
    setIsPreviewerExpanded(!isPreviewerExpanded);
    setIsEditorExpanded(false);
  };

  return (
    <div className="app">
      <h1>Markdown Previewer</h1>
      {!isPreviewerExpanded && (
        <Editor onChange={handleEditorChange} isExpanded={isEditorExpanded} toggleExpand={toggleEditorExpand} defaultMarkdown={defaultMarkdown} />
      )}
      {!isEditorExpanded && (
        <Previewer defaultMarkdown={markdown || ''} isExpanded={isPreviewerExpanded} toggleExpand={togglePreviewerExpand} />
      )}
    </div>
  );
}

export default App;