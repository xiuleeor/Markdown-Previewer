import React from "react";
import { marked } from 'marked';

function Previewer({markdown}) {
  
  return(
    <div >
      <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  )
}

export default Previewer;