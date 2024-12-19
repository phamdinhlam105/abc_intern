import React, { createElement } from 'react';
import { useSlate } from 'slate-react';
import { toggleBlock } from './editor-utils';
import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react';

interface BlockButtonProps {
    format: string;
    icon: LucideIcon;
    style?: any;
}

const BlockButton: React.FC<BlockButtonProps> = ({ format, icon, style }) => {
    const editor = useSlate();
    return (
        <Button
            variant='ghost'
            onClick={() => toggleBlock(editor, format, style)}>
            <span className="material-icons">{createElement(icon)}</span>
        </Button>
    );
};

export default BlockButton;
