import React from "react";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs';
import "../Styles/editor.css"

function Editor({handleInputChange, markdown, isExpanded, toggleExpand}) {
  return(
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
    
  )
}

export default Editor;