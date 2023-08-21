import styles from '@styles/audio.module.css';
import { generateMetadata } from '@lib/metadata';

export const metadata = generateMetadata('joienya | audio');

const soundcloudIds = [
  {
    id: '678236268',
    name: 'Mend by James Takashi',
  },
  {
    id: '463414854',
    name: 'Parting Glass, Irish Traditional',
  },
  {
    id: '575082645',
    name: 'Mirage pour Marimba by Yasuo Sueyoshi',
  },
  // {
  //   id: '310776244',
  //   name: 'Red Dragonfly by Kosaka Yamada, arranged by Fumito Nunoya',
  // },
  // {
  //   id: '463480023',
  //   name: 'L.A. Lullaby by Giovanni Allevi',
  // },
  // {
  //   id: '310775609',
  //   name: 'If We Hold On Together from Land Before Time',
  // },
  // {
  //   id: '310775795',
  //   name: 'El Negrito by Antonio Lauro',
  // },
];

const Music = (): JSX.Element => (
  <article>
    <h2 className={styles.title}>audio</h2>
    <ul className={styles.projects}>
      {soundcloudIds.map(({ id, name }) => (
        <iframe
          loading="lazy"
          key={name}
          className={styles.soundcloud}
          title={name}
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          role="listitem"
        />
      ))}
    </ul>
  </article>
);

export default Music;
