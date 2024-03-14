"use client";

import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  domAttributes?: Record<string, string>;
  defaultStyles?: boolean;
  uploadFile?: (file: File) => Promise<string>;
  editable?: boolean;
}

async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem("editorContent");
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export const Editor = ({ onChange, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");

  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  //   const editor = useCreateBlockNote({
  //     initialContent:
  //       initialContent
  //       ? JSON.parse(initialContent) as PartialBlock[]
  //       : undefined,
  //     //   onEditorContentChange: (editor) => {
  //     //     onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
  //     //   },
  //   });

  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  if (editor === undefined) {
    return "Loading content...";
  }

  return (
    <div>
      <BlockNoteView
        editor={editor}
        onChange={() => {
          saveToStorage(editor.document);
        }}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};
