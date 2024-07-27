import Script from 'next/script';
import '@styles/reset.css';
import '@styles/globals.css';
import styles from '@styles/layout.module.css';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import SocialLinks from '@components/Socials';
import { generateMetadata } from '@lib/metadata';

export const metadata = generateMetadata('jechoes');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/51da45b07a.js"
      />
      <body>
        <div className={styles.container}>
          <Navbar />
          <main>
            {children}
            <SocialLinks />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
