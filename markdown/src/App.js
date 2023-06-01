import React, { useState } from "react";
import Editor from "./Components/editor";
import Previewer from './Components/previewer';

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

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Editor handleInputChange={handleInputChange} markdown={markdown}/>
      <Previewer markdown={markdown}/>
    </div>
  );
}

export default App;
