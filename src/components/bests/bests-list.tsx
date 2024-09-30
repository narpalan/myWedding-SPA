import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Card from './components/card';

const cardImageList = [
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/thiago_fs7ard.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/Samuel_hxs0hz.webp',   
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/lokas_wvo1nf.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/luan_vp2wib.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/matheus_yezbhn.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/Pelegrine_vwqx8u.webp',        
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/thais_ildcvp.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/day_dcvj0d.webp',         
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/brostel_alnlkp.webp',    
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/mary_v51fe8.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474768/saskia_oo7k34.webp',
    'https://res.cloudinary.com/dnww83mmv/image/upload/v1727474767/mariza_ai1dsg.webp',        
];

const cards: React.ReactNode[] = [];

const CardsMaker = () => {
    for (let i = 0; i < 12; i++) {
        cards.push(
            <CarouselItem key={i} className="ml-2 basis-1/3 lg:basis-1/6 pl-2 lg:pl-1">
                {<Card src={cardImageList[i] ? cardImageList[i] : '/candle-slider-1.svg'} />}
            </CarouselItem>
        );
    }
}

const BestsList = (): React.JSX.Element => {    
    if (cards.length === 0) {
        CardsMaker();
    }
    return (
        <div className='flex flex-col items-center my-14 lg:my-28'>            
            <Carousel>
                <CarouselContent>
                    {cards}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default BestsList;