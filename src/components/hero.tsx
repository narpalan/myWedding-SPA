import Image from 'next/image';

export default function Hero(): React.JSX.Element {
    return (
        <div className='w-full relative h-screen col-span-4 lg:col-span-12'>
            <Image
                src="/bg-candle-test.avif"
                priority
                fill
                alt="Background image with a lit candle."
                className="object-cover"
            />                        
        </div>
    );
}