import React from "react";

function Editor({handleInputChange, markdown}) {
  return(
    <div>
      <textarea id="editor" value={markdown} onChange={handleInputChange} />
    </div>
  )
}

export default Editor;