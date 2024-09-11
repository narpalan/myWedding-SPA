import Image from 'next/image';

const Card = ({ src }: {src: string }): React.JSX.Element => {
    return (
    <div>
        <Image
            className='rounded-full'
            src={src}
            width={350}
            height={350}
            alt="Imagem vela aromática."
            aria-label="Imagem vela aromática."
            loading="lazy"
        />
    </div>
    );
}

export default Card;