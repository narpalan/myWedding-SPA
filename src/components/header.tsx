'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header(): React.JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col lg:flex-row lg:justify-between items-center col-span-4 lg:col-span-12 py-5 lg:px-24 bg-white transition-all duration-300 ${isOpen ? 'h-auto' : 'h-25'}`}>
            {/* Logo and Hamburger Button */}
            <div className="flex flex-row justify-between w-full lg:w-auto items-center px-4">
                <Image
                    src="/thaina-e-thiago.webp"
                    alt="Logo of our marriage"
                    width={146}
                    height={73}
                    priority
                />
                <div className='lg:hidden flex'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        {/* Close Icon */}
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu with additional spacing */}
            <ul className={`lg:hidden flex flex-col items-center space-y-6 mt-6 text-black transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                <li><a href='#couple' className="py-2">O Casal</a></li>
                <li><a href='#bests' className="py-2">Padrinhos</a></li>
                <li><a href='#location' className="py-2">Local</a></li>
                <li><a href='#gifts' className="py-2">Lista de Presentes</a></li>
                <li><a href='#rsvp' className="py-2">Confirmar Presença</a></li>
            </ul>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-row space-x-10 mt-4 text-black">
                <li><a href='#couple'>O Casal</a></li>
                <li><a href='#bests'>Padrinhos</a></li>
                <li><a href='#location'>Local</a></li>
                <li><a href='#gifts'>Lista de Presentes</a></li>
                <li><a href='#rsvp'>Confirmar Presença</a></li>
            </ul>
        </div>
    );
}
