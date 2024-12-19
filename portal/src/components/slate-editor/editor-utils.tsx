
import { Editor, Transforms } from 'slate';
import { LIST_TYPES } from './constants';
import { CustomElement } from './type';


export const toggleBlock = (editor: Editor, format: string, style?: any) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: n =>
            n && !Editor.isEditor(n) && 'type' in n && LIST_TYPES.includes(n.type as string),
        split: true,
    });

    let newProperties: Partial<CustomElement>;
    if (format === 'left' || format === 'center' || format === 'right') {
        const newProperties: Partial<CustomElement> = {
            type: 'paragraph',
            style: {
                textAlign: isActive ? undefined : format,
            },
        };
        Transforms.setNodes<CustomElement>(editor, newProperties);
    } else {
        const newProperties: Partial<CustomElement> = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        };
        Transforms.setNodes<CustomElement>(editor, newProperties);
    }
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

export const toggleMark = (editor: Editor, format: string) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

export const isBlockActive = (editor: Editor, format: string) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                n && !Editor.isEditor(n) && 'type' in n && n.type === format,
        })
    );

    return !!match;
};

export const isMarkActive = (editor: Editor, format: string) => {
    const marks = Editor.marks(editor);
    return marks ? (marks[format as keyof typeof marks] === true) : false;
};
