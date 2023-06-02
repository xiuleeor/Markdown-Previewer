import React, { useState, useEffect } from "react";
import {marked} from "marked";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs';
import "../Styles/previewer.css";

function Previewer({ markdown, isExpanded, toggleExpand }) {
  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    marked.setOptions({
      breaks: true,
    });

    const html = marked(markdown);
    setPreviewHtml(html);
  }, [markdown]);

  return (
    <section className={`window previewer ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="header-window prev">
      <h2>Previewer</h2>
      {isExpanded ? (
          <BsArrowsAngleContract className="icon" onClick={toggleExpand} />
        ) : (
          <BsArrowsAngleExpand className="icon" onClick={toggleExpand} />
        )}
    </div>
    <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: previewHtml }}
      />
    </section>
    
  );
}

export default Previewer;
