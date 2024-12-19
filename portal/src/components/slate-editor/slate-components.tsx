import React from 'react';

export const Button = React.forwardRef(
    ({ className, active, reversed, ...props }: any, ref) => (
        <span
            {...props}
            ref={ref}
            className={`${className} ${active ? 'active' : ''} ${reversed ? 'reversed' : ''}`}
        />
    )
);

export const Icon = React.forwardRef(({ className, ...props }: any, ref) => (
    <span
        {...props}
        ref={ref}
        className={`material-icons ${className}`}
    />
));
