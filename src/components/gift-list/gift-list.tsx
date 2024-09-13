import Image from 'next/image';
import Divider from '../divider/divider';

export default function GiftList(): React.JSX.Element {
    return(
        <>        
            <Divider text='Lista de Presentes'/>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:mx-28 lg:justify-between mb-8'>
                <div className='w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px]'>
                    <Image
                        src='/bg-mc-bridge.webp'
                        alt='placeholder image for gift section one'
                        fill
                        className='object-cover'
                    />    
                </div>            
                <div className='w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px]'>
                    <Image
                        src='/bg-7days.webp'
                        alt='placeholder image for gift section two'
                        fill     
                        className='object-cover'           
                    />
                </div>
                <div className='w-full relative h-[189px] lg:w-[300px] md:h-[275px] lg:h-[450px]'>
                    <Image
                        src='/bg-mc-lava.webp'
                        alt='placeholder image for gift section 3'
                        fill     
                        className='object-cover'                  
                    />            
                </div>
            </div>
        </>
    );
};