import BestsList from '@/components/bests/bests-list';
import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import Divider from '@/components/divider/divider';
import Image from 'next/image';
import CeremonyMap from '@/components/ceremony-map/ceremony-map';
import Form from '@/components/form/form';
import GiftList from '@/components/gift-list/gift-list';

export default function Home() {
  return (
    <>      
      <Hero/>      
      <Divider id='couple' text="O Casal"/>  
      <Wrapper>
          <div className='flex flex-col h-[160vh] gap-y-20 lg:gap-x-30 lg:flex-row md:max-lg:items-center lg:justify-around my-5 mx-5 py-5 lg:my-16 lg:mx-20 lg:h-[95vh]'>              
              <Image
                src='/bg-candle-test.avif'
                width={470}
                height={20}
                alt='Our photo wearing white robes!'                
              />
              <div className='flex flex-col md:w-[35rem] lg:w-[41rem] lg:h-[80vh]'>               
                <span className='text-justify'>
                  <p className='indent-8'>Nos conhecemos no dia 18 de Abril de 2020 pela internet, como os jovens fazem hoje em dia e desde o primeiro segundo foi realmente um SUPER MATCH! Conversamos por horas a fio e cada descoberta sobre o outro apenas aumentava a sensação de que nos conhecíamos há muitas e muitas vidas! </p>
	                <p className='indent-8'>Nos dias que se seguiram, continuamos a nos conhecer mais e mais! Passamos incontáveis horas proseando em chamadas (pela internet :D) e jogando juntos, até que no dia 28 de Abril nos encontramos pessoalmente pela primeira vez! Ela queria comprar um chá de hibisco no Carrefour, e muito esperto que sou, me ofereci para levá-la até o supermercado para que ela pudesse tomar seu chazinho. Ai vocês sabem o que aconteceu né…? Isso mesmo! Depois que nos encontramos fomos tomar um chá de cevadis juntinhos e acabamos nos esquecendo completamente do supermercado!</p> 
                  <p className='indent-8'>Três dias se passaram, e logo começamos a namorar. Foi rápido né? Afinal, não é todo dia que se acha o Duo da sua vida, não é mesmo?  A cada dia juntos era mais difícil o tchau, e as conversas pela internet não eram mais suficientes! Quando notamos já estávamos cozinhando, sonhando, e trabalhando em uma miríade de projetos. Foi aí que vimos que já estávamos casados em alma e corpo. </p>
                  <p className='indent-8'>Aiii como é bom a vida de Casada ao seu lado!</p>
	                <p className='indent-8'>Quatro anos se passaram e com eles muitas horas de games, inúmeras receitas feitas e aprimoradas, alquimias para velas, projetos de móveis para casa, muitas e muitas ideias de programação e design, foram tantas coisas juntos que não me surpreende nossa ligação instantânea. Coisa de outras vidas!</p>
                  <p className='indent-8'>E para o nosso mais recente projeto, contamos com a SUA PRESENÇA!</p>
                </span>
              </div>            
          </div>
      </Wrapper>
      <Wrapper className='bg-violet-200 mt-[45rem] lg:mt-36'>
        <div className='flex flex-col gap-y-5 lg:flex-row lg:justify-around items-center text-black p-5'>
          <span>Confirme sua presença até 30/10/2024</span>
          <a href='#rsvp'>
            <button className="text-center rounded-3xl bg-mossGreen w-[12.31rem] h-[2.06rem] lg:w-[16.31rem] lg:h-[2.75rem]" type='submit'>
              <p>Confirmar Presença</p>
            </button>
          </a>
        </div>
      </Wrapper>
      <Divider id='bests' text='Os Padrinhos'/>
      <Wrapper>        
        <BestsList/>
      </Wrapper>
      <Divider id='location' text="Cerimônia e Recepção"/>  
      <Wrapper>
        <CeremonyMap/>
        {/*<a href='https://www.google.com/search?q=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&oq=6V5F%2BQH+Belvedere%2C+Ribeir%C3%A3o+das+Neves+-+MG&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMDgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'>link</a>*/}
      </Wrapper>
      <Divider id='gifts' text='Lista de Presentes'/>      
      <Wrapper>
        <GiftList/>
      </Wrapper>
      <Divider id="rsvp" text='Confirmar Presença'/>      
      <Wrapper>
        <Form />
      </Wrapper>
                
    </>
  );
}
