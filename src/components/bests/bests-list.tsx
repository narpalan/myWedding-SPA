import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Card from './components/card';

const aCard = <Card src='/candle-slider-1.svg' />

const cards: React.ReactNode[] = [];

const CardsMaker = () => {
    for (let i = 0; i < 14; i++) {
        cards.push(
            <CarouselItem key={i} className="ml-6 basis-1/4 lg:basis-1/6 lg:pl-1">
                {aCard}
            </CarouselItem>
        );
    }
}

const BestsList = (): React.JSX.Element => {    
    if (cards.length === 0) {
        CardsMaker();
    }
    return (
        <Carousel className="col-span-4 lg:col-span-12 my-28">
            <CarouselContent>
                {cards}
            </CarouselContent>
        </Carousel>
    );
}

export default BestsList;