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
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[400px] ${isOpenA? 'border-4 border-purple-800': ''}`}>
                    <a 
                        href='#gifts-header-title'
                        onClick={() => {
                            setIsOpenA(!isOpenA);
                            setIsOpenB(false);
                            setIsOpenC(false);
                            setHeaderTitle(isOpenA ? 'Lista de Presentes' : 'Presentes da Seção A');
                    }}>
                    <Image
                        src='https://res.cloudinary.com/dnww83mmv/image/upload/v1728866716/lar_a0kx4u.webp'
                        alt='Image for section Home from the gift list.'
                        fill
                        className='object-cover'
                    /> 
                    </a>                       
                </div>
                {(isOpenA && (
                    <Divider hideMe='lg:hidden flex' id='gifts-header-title' text={headerTitle} />
                ))} 
                <List id='SM-A' className={`${isOpenA ? 'block': 'hidden'} lg:hidden`} section='A'/>                            
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[400px] ${isOpenB? 'border-4 border-purple-800': ''}`}>
                <a 
                    href='#gifts-header-title'
                    onClick={() => {
                        setIsOpenB(!isOpenB);
                        setIsOpenA(false);
                        setIsOpenC(false);
                        setHeaderTitle(isOpenB ? 'Lista de Presentes' : 'Presentes da Seção B');
                    }}>
                    <Image
                        src='https://res.cloudinary.com/dnww83mmv/image/upload/v1728866716/cozinha_l2ao3l.webp'
                        alt='Image for section Kitchen from the gift list.'
                        fill     
                        className='object-cover'           
                    />
                    </a>
                </div>
                {(isOpenB && (
                    <Divider hideMe='lg:hidden flex' id='gifts-header-title' text={headerTitle} />
                ))} 
                <List id='SM-B' className={`${isOpenB ? 'block': 'hidden'} lg:hidden mt-16`} section='B'/>
                <div className={`w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[400px] ${isOpenC? 'border-4 border-purple-800': ''}`}>
                <a 
                    href='#gifts-header-title'
                    onClick={() => {
                        setIsOpenC(!isOpenC);
                        setIsOpenA(false);
                        setIsOpenB(false);
                        setHeaderTitle(isOpenC ? 'Lista de Presentes' : 'Presentes da Seção C');
                    }}>
                    <Image
                        src='https://res.cloudinary.com/dnww83mmv/image/upload/v1728866715/ele_e_ela_mkwdgl.webp'
                        alt='Image for section she and he from the gift list.'
                        fill     
                        className='object-cover'                  
                    />  
                    </a>          
                </div> 
                {(isOpenC && (
                    <Divider hideMe='lg:hidden flex' id='gifts-header-title' text={headerTitle} />
                ))}                
                <List id='SM-C' className={`${isOpenC ? 'block': 'hidden'} lg:hidden`} section='C'/>
                
                                
            </div>
            
            {(isOpenA || isOpenB || isOpenC) && (
                <Divider hideMe='hidden lg:flex' id='gifts-header-title' text={headerTitle} />
            )}

            <List id='LG-A' className={`${isOpenA ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='A'/>
                
            <List id='LG-B' className={`${isOpenB ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='B'/>

            <List id='LG-C' className={`${isOpenC ? 'hidden lg:grid lg:grid-cols-3': 'hidden'}`} section='C'/>
        </>
    );
};