'use client';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from '../ui/carousel';
import Image from 'next/image';

import { useCopyToClipboard } from '@/hooks/useCopyToCliboard';
import MapCard from './components/map-card';

const ceremonyLocationAddress = 'Rua Escritor Joaquim Manoel de Macedo, Veneza, Ribeirão das Neves - MG, 33821-429';
const uberDeepLink = 'https://m.uber.com/ul/?client_id=oKRoz5RLP0rJIOHeNJ-SW-ARcLxD5MYq&action=setPickup&pickup=my_location&dropoff[latitude]=-19.790411&dropoff[longitude]=-44.126063&dropoff[nickname]=Your+Destination';

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
    const { isCopied, copyToClipboard } = useCopyToClipboard();
    if (cards.length === 0) {
        CardsMaker();
    }
    return (
        <div className='my-5 mx-6 px-10 lg:mx-40 flex flex-col items-center'>
            <span className='text-justify'>                
                <p className='indent-8'>Contamos com a sua presença na celebração da nossa união!</p>
                <p className='indent-8 font-bold'>A cerimônia está prevista para começar às <span className=''>17:30 do dia 09/11/2024</span> e, logo em seguida, iniciaremos a festa, que será no mesmo local.</p>                 
                <p className='indent-8 font-bold'>Para garantir sua entrada, é necessário que seu nome esteja na lista, então não se esqueça de confirmar sua presença nesse formulário abaixo!!</p>
                <p className='indent-8'>Confira o mapa abaixo e a foto da fachada do sítio para não errar o local!</p>                                
            </span>
            
            <Carousel className='flex justify-center my-10'>
                <CarouselContent>
                    {cards}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className='flex flex-col lg:flex-row gap-y-5 gap-x-16'>
            <button onClick={ () => copyToClipboard(ceremonyLocationAddress) } className='text-center rounded-3xl bg-mossGreen flex flex-row items-center justify-around w-[12.31rem] h-[3.06rem] lg:w-[14.31rem] lg:h-[2.75rem]'>
                <Image
                    src="https://res.cloudinary.com/dnww83mmv/image/upload/v1728864586/maps_nowdl3.webp"
                    alt="Custom google Maps pointer icon."
                    width={20}
                    height={20}
                    loading='lazy'
                />
                {isCopied? 'Endereço copiado!' : 'Copiar endereço!'}
            </button>
            <a className='lg:hidden' href={uberDeepLink}>
                <button className='text-center rounded-3xl bg-mossGreen flex flex-row items-center justify-around w-[12.31rem] h-[3.06rem] lg:w-[14.31rem] lg:h-[2.75rem]'>
                    <Image
                        src="https://res.cloudinary.com/dnww83mmv/image/upload/v1728864586/uber_aym2vr.webp"
                        alt="Uber logo."
                        width={32}
                        height={32}
                        loading='lazy'
                    />
                    Pedir um carro!
                </button>
            </a>
            </div>                        
        </div>
    );
}

export default CeremonyMap;