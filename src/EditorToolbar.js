import React from "react";
import "./styles.css";

// Undo and redo functions for Custom Toolbar
function undoChange() {
    this.quill.history.undo();
}

function redoChange() {
    this.quill.history.redo();
}

// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange,
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};

// Formats objects for setting up the Quill editor
export const formats = ["bold", "italic", "underline", "strike", "link", "upload", "align", "list", "bullet"];

// Quill Toolbar component
export const QuillToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
        </span>
        <span className="ql-formats">
            <div class="image-upload">
                <label for="file-input">
                    <img
                        alt=""
                        height="25px"
                        width="25px"
                        src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                    />
                </label>
                <input
                    name="files[]"
                    type="file"
                    multiple
                    id="file-input"
                    accept="image/*"
                    style={{ display: "none" }}
                />
            </div>
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
        </span>
    </div>
);

export default QuillToolbar;
