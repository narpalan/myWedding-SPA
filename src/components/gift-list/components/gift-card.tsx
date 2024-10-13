'use client';
import { useState } from 'react';
import Image from 'next/image';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (content: string) => {
        try {
          await navigator.clipboard.writeText(content);
          setIsCopied(true);  
        } catch (er: any) {
            setIsCopied(false);            
        }
    };

    return { isCopied, copyToClipboard };
};

export default function GiftCard ({ src, title, description, link, key }: {src: string, title: string, description: string, link: string, key: number }): React.JSX.Element {
    const { isCopied, copyToClipboard } = useCopyToClipboard();
    return (
    
    <div className='rounded-lg w-80 lg:w-80 flex flex-col justify-around items-center px-10 lg:px-12 h-[478px] my-9 transform shadow-2xl pt-5 transition duration-300 hover:scale-105' key={key}>
        <a href={link}>
        
            <Image
                className='rounded'
                src={src}
                width={240}
                height={210}
                alt="Imagem vela aromática."
                aria-label="Imagem vela aromática."
                loading="lazy"                
            />
        
        <span className='text-base text-center py-2'>{title}</span>
        <span className='text-sm text-justify'>{description}</span> 
        </a>
        <button onClick={()=>copyToClipboard('09f42afe-e5df-45de-8d95-7e908b2e9e70')} className='text-center rounded-3xl bg-mossGreen w-[12.31rem] h-[2.06rem] lg:w-[14.31rem] lg:h-[2.75rem]'>
            {isCopied? 'Chave pix copiada!' : 'Copiar chave pix'}
        </button>                          
    </div>    
    );
}

