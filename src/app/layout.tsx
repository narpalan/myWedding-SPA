import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

//Components
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thaina e Thiago",
  description: "Site do nosso casamento onde os convidados podem confirmar a presença e saber mais detalhes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scrollbar'>
      <body className={inter.className}>
        <main className="min-h-screen">
          <main className="m-auto">
            <div className="grid grid-cols-4 lg:grid-cols-12">
              <Header/>
              {children}  
              <Footer/>            
            </div>
          </main>
        </main>
      </body>
    </html >
  );
}
