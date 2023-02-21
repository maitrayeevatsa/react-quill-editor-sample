import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export const Editor = () => {
    const [state, setState] = React.useState({ value: null });
    const handleChange = (value) => {
        setState({ value });
    };

    return (
        <div className="text-editor">
            <ReactQuill
                theme="snow"
                value={state.value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
            <EditorToolbar />
        </div>
    );
};

export default Editor;
