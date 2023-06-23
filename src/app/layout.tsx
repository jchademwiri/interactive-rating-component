import './globals.css';
import { Overpass } from 'next/font/google';

const overpass = Overpass({ subsets: ['latin'] });

export const metadata = {
  title: 'Interactive rating component',
  description: 'Interactive rating component',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${overpass.className} bg-very-dark-blue`}>
        {children}
        <footer className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://www.jacobc.co.za'>Jacob Chademwiri</a>.
        </footer>
      </body>
    </html>
  );
}
