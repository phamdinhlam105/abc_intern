import React from 'react';
import { RenderLeafProps } from 'slate-react';

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {

    return <span
        {...attributes}
        style={{
            fontWeight: leaf.bold ? 'bold' : 'normal',
            fontStyle: leaf.italic ? 'italic' : 'normal',
            textDecoration: leaf.underline ? 'underline' : 'none'
        }}
    >
        {children}
    </span>
};

export default Leaf;
