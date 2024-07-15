import React from "react";
import Image from 'next/image';

export default function Header(): React.JSX.Element {
    return (
        <div className="flex flex-row justify-around items-center col-span-4 lg:col-span-12 py-4 bg-gradient-to-r from-purple-800 to-green-700">
            <Image
                src="/logo-white.svg"
                alt="Logo of our marriage"
                width={172}
                height={93}
                priority
            />
            <div className="flex flex-row space-x-8 mt-4">
                <span>Home</span>
                <span>O Casal</span>
                <span>Padrinhos</span>
                <span>Local</span>
                <span>Confirmar Presença</span>
            </div>            
        </div>
    );
}