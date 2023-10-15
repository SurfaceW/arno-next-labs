'use client';

import "./mdx-editor.css";
import "./markdown.client.css";

import { FC } from "react";

import {
  AdmonitionDirectiveDescriptor, codeBlockPlugin, codeMirrorPlugin, directivesPlugin,
  frontmatterPlugin, headingsPlugin, imagePlugin, linkDialogPlugin, linkPlugin, listsPlugin,
  markdownShortcutPlugin, MDXEditor, MDXEditorMethods, quotePlugin, tablePlugin, UndoRedo,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

import { PromptDirectiveDescriptor } from './prompt-directive/prompt.directive';

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={console.log}
      className={`dark-theme dark-editor markdown-body`}
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        toolbarPlugin({
          toolbarContents() {
            return (
              <>
                <UndoRedo />
              </>
            );
          },
        }),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' },
        }),
        directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor, PromptDirectiveDescriptor] }),
        markdownShortcutPlugin(),
      ]}
    />
  );
};

export default Editor;
