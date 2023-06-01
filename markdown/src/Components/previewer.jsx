import React, { useState, useEffect } from "react";
import {marked} from "marked";

function Previewer({ markdown }) {
  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    marked.setOptions({
      breaks: true,
    });

    const html = marked(markdown);
    setPreviewHtml(html);
  }, [markdown]);

  return (
    <div>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: previewHtml }}
      />
    </div>
  );
}

export default Previewer;
