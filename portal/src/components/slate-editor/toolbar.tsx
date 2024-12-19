
import React, { ReactNode } from 'react';

export const Toolbar: React.FC<{ children: ReactNode }> = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className='h-10 flex space-x-2 bg-background rounded-md'>{children}</div>;
};
