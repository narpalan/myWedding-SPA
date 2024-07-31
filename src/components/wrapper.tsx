import React from 'react';

export default function Wrapper({
    children,    
}: {
    children: React.ReactNode
}): React.JSX.Element {
    return (
        <div className='col-span-4 lg:col-span-12'>
            {children}
        </div>
    );
}