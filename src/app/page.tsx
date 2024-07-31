import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <>      
      <Hero/>
      <Wrapper>
          <div className='flex flex-row justify-around my-28 mx-5'>              
              <Image
                src='/bg-candle-test.avif'
                width={550}
                height={910}
                alt='Our photo wearing white robes!'                
              />
              <div className='flex flex-col w-[877px] h-[810px]'>
                <h4>O Casal</h4>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
              </div>            
          </div>
      </Wrapper>
      <Wrapper>
        <div className='flex flex-row justify-around items-center bg-gray-600'>
          <span>Não se esqueça de confirmar sua presença até a data xx/xx/xxxx</span>
          <button className="text-center rounded-3xl bg-orange-700 w-[16.31rem] h-[3.06rem]" type='submit'>
                        <p>Cadastrar!</p>
                    </button>
        </div>
      </Wrapper>
      
    </>
  );
}
