import Image from 'next/image';

const Divider = ({ text }: { text: string }): React.JSX.Element => {
    return (
        <div className="flex flex-row h-80 col-span-4 lg:col-span-12 items-center justify-between overflow-clip">
            <Image
                src="/leaf-and-twig.webp"
                alt="draw of a leaf and twig for the divider section"
                width={100}
                height={200}                
                className='skew-y-12 lg:w-[150px] lg:h-[250px]'
            />
            <div>
                <span>
                    {text ? text : "Olá!"}
                </span>
            </div>            
            <Image
                src="/leaf-and-twig.webp"
                alt="draw of a leaf and twig for the divider section"
                width={100}
                height={200}                
                className='scale-x-[-1] skew-y-6 lg:w-[150px] lg:h-[250px]'
            />
        </div>
    );
}

export default Divider;