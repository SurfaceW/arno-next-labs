'use client';

import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';

const EditorComp = dynamic(() => import('./mdx-editor.comp'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export function EditorDemo() {
  const ref = useRef(null);
  return (
    <Suspense fallback="isLoadingComp">
      <EditorComp markdown={`# Hello World
:::prompt
You have a prompt here.
:::

## Hey Jude
Don't make it bad
`} editorRef={ref} />
    </Suspense>
  );
}
