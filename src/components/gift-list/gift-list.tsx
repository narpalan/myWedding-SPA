'use client';
import { useState } from 'react';
import Image from 'next/image';
import Divider from '../divider/divider';
import List from './components/list';

export default function GiftList(): React.JSX.Element {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);
    const [headerTitle, setHeaderTitle] = useState('');

    return(
        <>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:mx-28 lg:justify-between lg:my-16'>
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px] ${isOpenA? 'border-4 border-purple-800': ''}`}>
                    <a 
                        href='#gifts-header-title'
                        onClick={() => {
                            setIsOpenA(!isOpenA);
                            setIsOpenB(false);
                            setIsOpenC(false);
                            setHeaderTitle(isOpenA ? 'Lista de Presentes' : 'Presentes da Seção A');
                    }}>
                    <Image
                        src='/bg-mc-bridge.webp'
                        alt='placeholder image for gift section one'
                        fill
                        className='object-cover'
                    /> 
                    </a>                       
                </div>
                <List id='SM-A' className={`${isOpenA ? 'block': 'hidden'} lg:hidden`} section='A'/>                            
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px] ${isOpenB? 'border-4 border-purple-800': ''}`}>
                <a 
                    href='#gifts-header-title'
                    onClick={() => {
                        setIsOpenB(!isOpenB);
                        setIsOpenA(false);
                        setIsOpenC(false);
                        setHeaderTitle(isOpenB ? 'Lista de Presentes' : 'Presentes da Seção B');
                    }}>
                    <Image
                        src='/bg-7days.webp'
                        alt='placeholder image for gift section two'
                        fill     
                        className='object-cover'           
                    />
                    </a>
                </div>
                <List id='SM-B' className={`${isOpenB ? 'block': 'hidden'} lg:hidden`} section='B'/>
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px] ${isOpenC? 'border-4 border-purple-800': ''}`}>
                <a 
                    href='#gifts-header-title'
                    onClick={() => {
                        setIsOpenC(!isOpenC);
                        setIsOpenA(false);
                        setIsOpenB(false);
                        setHeaderTitle(isOpenC ? 'Lista de Presentes' : 'Presentes da Seção C');
                    }}>
                    <Image
                        src='/bg-mc-lava.webp'
                        alt='placeholder image for gift section 3'
                        fill     
                        className='object-cover'                  
                    />  
                    </a>          
                </div> 
                <List id='SM-C' className={`${isOpenC ? 'block': 'hidden'} lg:hidden`} section='C'/>                
            </div>
            
            {/*(isOpenA || isOpenB || isOpenC) && (
                <Divider id='gifts-header-title' text={headerTitle} />
            )*/}

            <List id='LG-A' className={`${isOpenA ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='A'/>
                
            <List id='LG-B' className={`${isOpenB ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='B'/>

            <List id='LG-C' className={`${isOpenC ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='C'/>
        </>
    );
};