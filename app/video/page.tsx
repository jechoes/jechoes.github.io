import styles from '@styles/video.module.css';
import { generateMetadata } from '@lib/metadata';

export const metadata = generateMetadata('joienya | video');

const musicIds = [
  {
    id: 'nSkBmDacal8',
    name: 'L.A. Lullaby by Giovanni Allevi',
  },
  {
    id: 'v6C7oUaxNec',
    name: 'She Who Sleeps With A Small Blanket by Kevin Volans',
  },
  {
    id: 'x7xrRkymO74',
    name: "Transformation of Pachelbel's Canon, arranged by Nanae Mimura",
  },
  {
    id: 'XBq3IN3nKqg',
    name: 'Feed the Birds from Mary Poppins',
  },
  {
    id: 'goDF_Ak6rm0',
    name: 'Parting Glass, Irish Traditional Folk Song',
  },
  {
    id: '0kCnhBc8Fvw',
    name: 'If We Hold On Together from the Land Before Time',
  },
  {
    id: '_jvlTjohGZ4',
    name: 'El Negrito by Antonio Lauro',
  },
  {
    id: 'zCfTcIFE5N4',
    name: 'Red Dragonfly by Kosaka Yamada, arranged by Fumito Nunoya',
  },
];

const Music = (): JSX.Element => (
  <article>
    <h2 className={styles.title}>video</h2>
    <ul className={styles.projects}>
      {musicIds.map(({ id, name }) => (
        <iframe
          key={name}
          className={styles.project}
          title={name}
          src={`https://www.youtube.com/embed/${id}`}
          role="listitem"
        />
      ))}
    </ul>
  </article>
);

export default Music;
