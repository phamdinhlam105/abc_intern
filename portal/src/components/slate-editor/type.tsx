import { BaseEditor, BaseElement, BaseText } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomElement = {
    type: 'paragraph' | 'block-quote' | 'bulleted-list' | 'heading-one' | 'heading-two' | 'list-item' | 'numbered-list' | 'left' | 'center' | 'right' ;
    children: CustomText[];
    style?: { textAlign?: string };
} & BaseElement;

export type CustomText = {
    text: string;
    bold?: boolean;
    code?: boolean;
    italic?: boolean;
    underline?: boolean;
} & BaseText;

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
