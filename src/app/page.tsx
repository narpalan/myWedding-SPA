import BestsList from '@/components/bests/bests-list';
import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import Divider from '@/components/divider/divider';
import Image from 'next/image';
import CeremonyMap from '@/components/ceremony-map';
import Form from '@/components/form/form';
import GiftList from '@/components/gift-list/gift-list';

export default function Home() {
  return (
    <>      
      <Hero/>
      <Wrapper className=''>
          <div className='flex flex-col lg:flex-row justify-around my-28 mx-5'>              
              <Image
                src='/bg-candle-test.avif'
                width={550}
                height={910}
                alt='Our photo wearing white robes!'                
              />
              <div id='couple' className='flex flex-col lg:w-[877px] lg:h-[810px] sm:wrap '>
                <h1>O Casal</h1>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>            
          </div>
      </Wrapper>
      <Wrapper className='bg-violet-100'>
        <div className='flex flex-row justify-around items-center text-black p-5'>
          <span>Não se esqueça de confirmar sua presença até a data xx/xx/xxxx</span>
          <button className="text-center rounded-3xl bg-mossGreen w-[16.31rem] h-[3.06rem]" type='submit'>
            <p>Cadastrar!</p>
          </button>
        </div>
      </Wrapper>
      <Wrapper className=''>
        <BestsList/>
      </Wrapper>
      <Divider text="Cerimônia e Recepção"/>  
      <Wrapper className=''>
        <CeremonyMap/>
        <a href='https://www.google.com/search?q=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&oq=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMDgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'>link</a>
      </Wrapper>      
      <Wrapper className=''>
        <GiftList/>
      </Wrapper>      
      <Wrapper className=''>
        <Form />
      </Wrapper>
                
    </>
  );
}
