import Image from 'next/image';
import styles from './socials.module.css';
import emailIcon from '../../../public/images/email.svg';
import instagramIcon from '../../../public/images/instagram.svg';
import soundcloudIcon from '../../../public/images/soundcloud.svg';
import youtubeIcon from '../../../public/images/youtube.svg';

const links = [
  {
    href: 'https://youtube.com/@joienyamusic',
    label: 'youtube',
    icon: youtubeIcon,
  },
  {
    href: 'https://soundcloud.com/joienya',
    label: 'soundcloud',
    icon: soundcloudIcon,
  },
  {
    href: 'https://www.instagram.com/joienya/',
    label: 'instagram',
    icon: instagramIcon,
  },
  {
    href: 'mailto:joienyamusic@gmail.com',
    label: 'email',
    icon: emailIcon,
  },
];

const Socials = (): JSX.Element => {
  return (
    <section className={styles.links}>
      {links.map(({ href, label, icon }) => (
        <a
          aria-hidden="false"
          href={href}
          key={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <Image
            priority
            src={icon}
            alt={label}
            width={25}
            height={25}
          />
          <span className={styles.tooltip}>{label}</span>
        </a>
      ))}
    </section>
  );
};

export default Socials;
