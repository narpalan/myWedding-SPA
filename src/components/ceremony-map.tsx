import Image from 'next/image';

const CeremonyMap = (): React.JSX.Element => {
    return (
        <div className='my-5 mx-6 lg:mx-40'>
            <p>
                Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! Seremos extremamente pontuais e logo em seguida será a recepção. Contamos com vocês!
                É necessário que o nome esteja na lista para entrar no evento, não esqueça de confirmar sua presença.
            </p>
            <h1>
                Dia 09/11/2024 
            </h1>
            <Image
                src='/ceremony-map.webp'
                width={1312}
                height={696}
                alt='Ceremony map from google maps.'
            />
        </div>
    );
}

export default CeremonyMap;