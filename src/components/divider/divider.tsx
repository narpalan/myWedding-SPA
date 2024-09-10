import Image from 'next/image';

const Divider = ({ text }: { text: string }): React.JSX.Element => {
    return (
        <div className="flex flex-row h-80 col-span-4 lg:col-span-12 items-center justify-between">
            <Image
                src="/leaf-and-twig.webp"
                alt="leaf and twig for the divider section"
                width={200}
                height={400}
                className='skew-y-12'
            />
            <div>
                <span>
                    {text ? text : "Olá!"}
                </span>
            </div>            
            <Image
                src="/leaf-and-twig.webp"
                alt="leaf and twig for the divider section"
                width={200}
                height={400}
                className='scale-x-[-1] skew-y-6'
            />
        </div>
    );
}

export default Divider;