import Image from 'next/image';

const Card = ({ src }: {src: string }): React.JSX.Element => {
    return (
    <div>
        <Image
            className='grow rounded-xl'
            src={src}
            width={363}
            height={363}
            alt="Imagem vela aromática."
            aria-label="Imagem vela aromática."
            loading="lazy"
        />
    </div>
    );
}

export default Card;