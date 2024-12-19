import React, { createElement } from 'react';
import { useSlate } from 'slate-react';
import { toggleMark } from './editor-utils';
import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react';

interface MarkButtonProps {
    format: string;
    icon: LucideIcon
}

const MarkButton: React.FC<MarkButtonProps> = ({ format, icon }) => {
    const editor = useSlate();

    return (
        <Button
            variant='ghost'
            onClick={() => toggleMark(editor, format)}>
            <span className="material-icons">{createElement(icon)}</span>
        </Button>
    );
};

export default MarkButton;
