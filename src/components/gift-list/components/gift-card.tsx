import Image from 'next/image';

export default function GiftCard ({ src, title, description, link }: {src: string, title: string, description: string, link: string }): React.JSX.Element {
    return (
    <div className='w-80 lg:w-64 flex flex-col px-20 lg:px-10 h-80 my-5'>
        <a href={link}>
            <Image
                className='rounded'
                src={src}
                width={200}
                height={200}
                alt="Imagem vela aromática."
                aria-label="Imagem vela aromática."
                loading="lazy"
            />
        </a>
        <span className='text-base'>{title}</span>
        <span className='text-sm'>{description}</span>                   
    </div>
    );
}

