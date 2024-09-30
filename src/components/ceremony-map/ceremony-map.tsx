import { 
    Carousel, 
    CarouselContent, 
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from '../ui/carousel';
import MapCard from './components/map-card';

const cardImageList = [    
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727726571/casorio-maps_xnncbg.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727726571/casorio-portao-entrada_jxewqb.webp',
];

const cards: React.ReactNode[] = [];

const CardsMaker = () => {
    for (let i = 0; i < 2; i++) {
        cards.push(
            <CarouselItem key={i}>
                {<MapCard src={cardImageList[i] ? cardImageList[i] : '/candle-slider-1.svg'} />}
            </CarouselItem>
        );
    }
}

const CeremonyMap = (): React.JSX.Element => {
    if (cards.length === 0) {
        CardsMaker();
    }
    return (
        <div className='my-5 mx-6 px-10 lg:mx-40'>
            <p className='text-justify'>
                Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! Seremos extremamente pontuais e logo em seguida será a recepção. Contamos com vocês!
                É necessário que o nome esteja na lista para entrar no evento, não esqueça de confirmar sua presença.
            </p>
            <h1>
                Dia 09/11/2024 
            </h1>
            <Carousel className='flex justify-center my-10'>
                <CarouselContent>
                    {cards}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default CeremonyMap;