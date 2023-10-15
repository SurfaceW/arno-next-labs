import { DirectiveDescriptor, GenericDirectiveEditor, NestedLexicalEditor } from "@mdxeditor/editor";

export const PromptDirectiveDescriptor: DirectiveDescriptor = {
  name: "prompt",
  testNode(node) {
    return node.name === 'prompt';
  },
  attributes: [],
  hasChildren: true,
  Editor: (props) => {
    debugger;
    return (
      <div style={{ backgroundColor: 'red' }}>
        {/* <NestedLexicalEditor
          block
          // @ts-ignore
          getContent={(node) => node.children}
          getUpdatedMdastNode={(mdastNode, children: any) => {
            debugger;
            return { ...mdastNode, children }
          }}
        /> */}
        Hello, Arno
      </div>
    );
  },
};
