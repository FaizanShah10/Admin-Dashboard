import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import * as Icons from "./Icons";
import classNames from "classnames";
import Content from "./Content";





const Editor = () => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Underline,
      Italic,
      Strike,
      Code,
      Text,
      Paragraph,
    ],
    Content
  })

  if (!editor) {
    return null; 
  }

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor])

  return (
    <div className="editor-container">
      <div className="w-full h-32 bg-gray-200 dark:bg-zinc-800 rounded-md text-black dark:text-gray-200 flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Editor</h2>
      </div>
      <div className="editor">
        <div className="menu">
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Icons.RotateLeft />
          </button>
          <button
            className="menu-button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Icons.RotateRight />
          </button>
          <button
            className={classNames("menu-button", {
              "is-active": editor.isActive("bold")
            })}
            onClick={toggleBold}
          >
            <Icons.Bold />
          </button>
          <button
            className={classNames("menu-button", {
              "is-active": editor.isActive("underline")
            })}
            onClick={toggleUnderline}
          >
            <Icons.Underline />
          </button>
          <button
            className={classNames("menu-button", {
              "is-active": editor.isActive("italic")
            })}
            onClick={toggleItalic}
          >
            <Icons.Italic />
          </button>
          <button
            className={classNames("menu-button", {
              "is-active": editor.isActive("strike")
            })}
            onClick={toggleStrike}
          >
            <Icons.Strikethrough />
          </button>
          <button
            className={classNames("menu-button", {
              "is-active": editor.isActive("code")
            })}
            onClick={toggleCode}
          >
            <Icons.Code />
          </button>
        </div>
  
        <EditorContent editor={editor} />
      </div>
    </div>
  );
  
}

export default Editor