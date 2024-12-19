import React from 'react';
import { RenderElementProps } from 'slate-react';

const Element: React.FC<RenderElementProps> = ({ attributes, children, element }) => {

    console.log(children);
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>;
        case 'bulleted-list':
            return <ul className='list-disc pl-4' {...attributes}>{children}</ul>;
        case 'numbered-list':
            return <ol className='list-decimal pl-4' {...attributes}>{children}</ol>;
        case 'heading-one':
            return <h1 className='text-xl' {...attributes}>{children}</h1>;
        case 'heading-two':
            return <h2 className='text-md' {...attributes}>{children}</h2>;
        case 'list-item':
            return <li {...attributes}>{children}</li>;

        default:
            break;
    }
    if (element.style)
        switch (element.style.textAlign) {
            case 'left':
                return <div className='text-left' {...attributes}>{children}</div>;
            case 'center':
                return <div className='text-center' {...attributes}>{children}</div>;
            case 'right':
                return <div className='text-right' {...attributes}>{children}</div>;
            default:
                break;
        }
    return <p {...attributes}>{children}</p>;
};

export default Element;
