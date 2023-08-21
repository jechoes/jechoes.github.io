'use client';
import Link from 'next/link';
import styles from './navbar.module.css';

import { usePathname } from 'next/navigation';

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'shows',
    path: '/shows',
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
      <h1 className={styles.title}>joienya</h1>
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
