import React, { useState } from "react";
import Editor from "./Components/editor";
import Previewer from './Components/previewer';
import "./App.css";

function App() {
  var initialMarkdown = `
# Header (H1 size)
## Sub Header (H2 size)

[Link](https://example.com)

Inline code: \`<code>\`

Code block:

\`\`\`
function addNumbers(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

![Image](https://example.com/image.jpg)

**Bolded text**
`;
const [markdown, setMarkdown] = useState(initialMarkdown);  
const [isEditorExpanded, setIsEditorExpanded] = useState(false);
const [isPreviewerExpanded, setIsPreviewerExpanded] = useState(false);

const toggleEditorExpand = () => {
  setIsEditorExpanded(!isEditorExpanded);
  setIsPreviewerExpanded(false);
};

const togglePreviewerExpand = () => {
  setIsPreviewerExpanded(!isPreviewerExpanded);
  setIsEditorExpanded(false);
};

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <h1>Markdown Previewer</h1>
      {!isPreviewerExpanded && (
        <Editor handleInputChange={handleInputChange} markdown={markdown} isExpanded={isEditorExpanded} toggleExpand={toggleEditorExpand}/>
      )}
      {!isEditorExpanded && (
        <Previewer markdown={markdown} isExpanded={isPreviewerExpanded} toggleExpand={togglePreviewerExpand}/>
      )}
      
      
    </div>
  );
}

export default App;
