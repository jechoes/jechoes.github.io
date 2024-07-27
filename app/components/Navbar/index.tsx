/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

import { usePathname } from 'next/navigation';

const routes = [
  {
    name: 'shows',
    path: '/',
  },
  {
    name: 'video',
    path: '/video',
  },
  {
    name: 'audio',
    path: '/audio',
  },
];

const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <section className={styles.header}>
        <img
          className={styles.image}
          src="/images/jechoes.jpeg"
          alt="jechoes (2018)"
        />
        <h1 className={styles.title}>jechoes</h1>
      </section>
      <section className={styles.navLinks}>
        {routes.map(({ name, path }) => {
          const isActive = path === pathname;
          return (
            <Link
              href={path}
              key={name}
              className={isActive ? styles.activeNavlink : styles.navlink}
            >
              {name}
            </Link>
          );
        })}
      </section>
    </nav>
  );
};

export default Navbar;
