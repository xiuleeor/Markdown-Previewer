import React from "react";

function Editor({handleInputChange, markdown}) {
  return(
    <div>
      <textarea value={markdown} onChange={handleInputChange} />
    </div>
  )
}

export default Editor;