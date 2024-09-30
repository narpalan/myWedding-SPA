import Image from 'next/image';

const MapCard = ({ src }: {src: string }): React.JSX.Element => {
    return (
    <div className='flex items-center justify-center'>
        <Image            
            src={src}
            width={1050}
            height={350}
            alt="Imagem vela aromática."
            aria-label="Imagem vela aromática."
            loading="lazy"
        />
    </div>
    );
}

export default MapCard;