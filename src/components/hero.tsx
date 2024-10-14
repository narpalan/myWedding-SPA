import Image from 'next/image';

export default function Hero(): React.JSX.Element {
    return (
        <div className='w-full relative h-screen col-span-4 lg:col-span-12'>
            <Image
                src="https://res.cloudinary.com/dnww83mmv/image/upload/v1728875230/foto-casal01_1_q0kn58.webp"
                priority                
                fill             
                alt="Image from HERO section portraying the couple in São Thomé - Minas Gerais."
                className="object-cover"
            />                        
        </div>
    );
}