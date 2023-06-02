import React, { useEffect, useState } from 'react';
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs';
import "../Styles/previewer.css";
import {marked} from 'marked';

const Previewer = ({ defaultMarkdown, isExpanded, toggleExpand }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    marked.setOptions({ breaks: true });
    const html = marked(defaultMarkdown);
    setPreviewHTML(html);
  }, [defaultMarkdown]); 
  

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
      <div className="preview" id="preview" dangerouslySetInnerHTML={{ __html: previewHTML }} />
    </section>
    
  );
};

export default Previewer;

