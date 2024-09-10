import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Card from './components/card';

const cardImageList = [
    '/candle-slider-1.svg',
    '/candle-slider-2.svg',
];

const cards: React.ReactNode[] = [];

const CardsMaker = () => {
    for (let i = 0; i < 14; i++) {
        cards.push(
            <CarouselItem key={i} className="ml-6 basis-1/4 lg:basis-1/6 lg:pl-1">
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
        <div className='flex flex-col items-center mt-24'>
            <div className='col-span-4 lg:col-span-12 mb-9'>
                <span>Os padrinhos</span>                
            </div>
            <Carousel className="col-span-4 lg:col-span-12">
                <CarouselContent>
                    {cards}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default BestsList;