import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Card from './components/card';

const cardImageList = [
    '/thiago.webp',
    '/Samuel.webp',   
    '/lokas.webp',
    '/luan.webp',
    '/matheus.webp',
    '/Pelegrine.webp',        
    '/thais.webp',
    '/day.webp',         
    '/brostel.webp',    
    '/mary.webp',
    '/saskia.webp',
    '/mariza.webp',        
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
        <div id='bests' className='flex flex-col items-center mt-24'>
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