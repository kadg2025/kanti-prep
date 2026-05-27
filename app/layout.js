import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'KantiPrep Thurgau',
  description: 'Aufnahmeprüfung Thurgau — GMS 2 & GMS 3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}