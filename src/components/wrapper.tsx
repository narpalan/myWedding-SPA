import React from 'react';

export default function Wrapper({
    children,
    className,    
}: {
    children: React.ReactNode,
    className?: string,
}): React.JSX.Element {
    return (
        <div className={`col-span-4 lg:col-span-12 ${className}`}>
            {children}
        </div>
    );
}