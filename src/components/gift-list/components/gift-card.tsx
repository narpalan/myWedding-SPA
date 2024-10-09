import Image from 'next/image';

export default function GiftCard ({ src, title, description, link, key }: {src: string, title: string, description: string, link: string, key: number }): React.JSX.Element {
    return (
    <div className='rounded-lg w-80 lg:w-80 flex flex-col px-10 lg:px-12 h-[448px] my-9 transform shadow-2xl pt-5 transition duration-300 hover:scale-105' key={key}>
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
        </a>
        <span className='text-base text-center py-5'>{title}</span>
        <span className='text-sm text-justify'>{description}</span>                   
    </div>
    );
}

