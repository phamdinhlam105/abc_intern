"use client"
import React, { useState, useCallback } from 'react';
import { Slate, Editable, withReact, ReactEditor, RenderLeafProps } from 'slate-react';
import { createEditor, Descendant, Editor } from 'slate';
import Element from './elements';
import { initialValue } from './constants';
import Leaf from './leaf';
import { Toolbar } from './toolbar';
import BlockButton from './block-button';
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2, Italic, List, ListOrdered, Underline } from 'lucide-react';
import MarkButton from './mark-button';
import { Article } from '../article/model/article-model';

export default function TextEditor({ setNewPost }: {
    setNewPost: React.Dispatch<React.SetStateAction<Article>>
}) {
    const [editor] = useState(() => withReact(createEditor()));
    const [value, setValue] = useState<Descendant[]>(initialValue);
    
    const renderElement = useCallback((props: any) => <Element {...props} />, []);
    const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

    const getPlainTextWithNewlines = (editor: Editor) => {
        const nodes = Array.from(Editor.nodes(editor, { at: [] }));
        let plainText = '';

        nodes.forEach(([node]) => {
            if (Editor.isBlock(editor, node)) {
                plainText += '\n';
            }

            if (node.text !== undefined) {
                plainText += node.text;
            }
        });

        return plainText;
    };

    return (<>
        <Slate
            editor={editor}
            initialValue={value}
            onValueChange={newValue => setValue(newValue)}>
            <Toolbar>
                <MarkButton format='bold' icon={Bold} />
                <MarkButton format='italic' icon={Italic} />
                <MarkButton format='underline' icon={Underline} />
                <BlockButton format='left' icon={AlignLeft} />
                <BlockButton format='center' icon={AlignCenter} />
                <BlockButton format='right' icon={AlignRight} />
                <BlockButton format='heading-one' icon={Heading1} />
                <BlockButton format='heading-two' icon={Heading2} />
                <BlockButton format='numbered-list' icon={ListOrdered} />
                <BlockButton format='bulleted-list' icon={List} />
            </Toolbar>
            <Editable
                className='border rounded-md p-2 shadow-sm'
                renderElement={renderElement}
                renderLeaf={renderLeaf}
            />
        </Slate>
        <div className='bg-gray-200'>
            {JSON.stringify(value)}
        </div>
    </>

    );
};