import React, { useState } from "react";
// import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

/**
 *
 *
 * @return {*} un state
 */
function EditorContainer() {
  const [editorState, setEditorState] = useState("");

  return (
    <div className="m-4 mx-auto editor text-secondary">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  );
}

export default EditorContainer;
