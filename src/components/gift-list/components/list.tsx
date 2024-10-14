'use client';
import { useEffect, useState } from 'react';
import GiftCard from './gift-card'; // assumindo que GiftCard está no mesmo diretório

export default function List({ className, section, id }: { className?: string, section: string, id?: string }): React.JSX.Element {
    const [gifts, setGifts] = useState<any[]>([]); // Estado para armazenar os dados carregados    

    // Função para carregar o JSON correto baseado em "section"
    useEffect(() => {
        const fetchGifts = async () => {
            let data;
            switch (section) {
                case 'A':
                    data = await import('./data/gifts-a.json');                    
                    break;
                case 'B':
                    data = await import('./data/gifts-b.json');
                    break;
                case 'C':
                    data = await import('./data/gifts-c.json');
                    break;
                default:
                    console.error('Seção inválida');
                    return;
            }
            setGifts(data.items); // Armazena os itens do JSON no estado            
        };

        fetchGifts();
    }, [section]);

    return (
        <div className={`grid grid-cols-1 place-items-center lg:grid-cols-3 ${className} lg:gap-x-24 lg:mx-28`} id={id}>
            {gifts.map((gift, index) => (
                <GiftCard
                    key={index}
                    src={gift.IMG_SRC}
                    title={gift.TITLE}
                    description={gift.DESCRIPTION}
                    price={gift.PRICE}
                />
            ))}
        </div>        
    );
}