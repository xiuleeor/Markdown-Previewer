import React, { useState } from 'react';
import { marked } from 'marked';

function App() {//A-1 changes
  //changes 2
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="editor">
        <textarea value={markdown} onChange={handleInputChange} />
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default App;
