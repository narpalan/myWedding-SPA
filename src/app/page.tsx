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
      <Divider id='couple' text="O Casal"/>  
      <Wrapper>
          <div className='flex flex-col h-[85rem] gap-y-16 lg:flex-row lg:justify-around my-5 mx-5 lg:mx-28 lg:h-[71.5vh]'>              
              <Image
                src='/bg-candle-test.avif'
                width={470}
                height={20}
                alt='Our photo wearing white robes!'                
              />
              <div className='flex flex-col lg:w-[650px] lg:h-[200vh]'>               
                <span className='text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                   </span>
              </div>            
          </div>
      </Wrapper>
      <Wrapper className='bg-violet-200 mt-56 lg:mt-5'>
        <div className='flex flex-col gap-y-5 lg:flex-row lg:justify-around items-center text-black p-5'>
          <span>Confirme sua presença até 30/11/2024</span>
          <a href='#rsvp'>
            <button className="text-center rounded-3xl bg-mossGreen w-[12.31rem] h-[2.06rem] lg:w-[16.31rem] lg:h-[2.75rem]" type='submit'>
              <p>Cadastrar!</p>
            </button>
          </a>
        </div>
      </Wrapper>
      <Wrapper>
        <BestsList/>
      </Wrapper>
      <Divider text="Cerimônia e Recepção"/>  
      <Wrapper>
        <CeremonyMap/>
        {/*<a href='https://www.google.com/search?q=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&oq=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMDgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'>link</a>*/}
      </Wrapper>      
      <Wrapper>
        <GiftList/>
      </Wrapper>      
      <Wrapper>
        <Form />
      </Wrapper>
                
    </>
  );
}
