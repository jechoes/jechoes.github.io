import styles from '@styles/shows.module.css';
import { generateMetadata } from '@lib/metadata';

export const metadata = generateMetadata('jechoes | shows');

interface ShowEvent {
  name: string;
  location: string;
  shortName?: string;
}

interface Show {
  year: string;
  events: ShowEvent[]
}

const futureShows: Show[] = [
  {
    year: '2025',
    events: [
      {
        name: '...',
        shortName: '',
        location: '',
      },
    ],
  },
];

const pastShows: Show[] = [
  {
    year: '2023',
    events: [
      {
        name: 'Amplifying Out Light @ Radiant Beer Co.',
        shortName: 'Amplifying Out Light',
        location: 'Anaheim, CA',
      },
      {
        name: 'IAC Livestream Concert: a skip, a hop, a jump by Nirmala Rajasekar',
        shortName: 'SCMIAC Livestream Concert',
        location: 'scmarimba.org',
      },
    ],
  },
  {
    year: '2020',
    events: [
      {
        name: 'Less Than 10 Music: Golden Summer',
        shortName: 'Less Than 10 Music',
        location: 'lessthan10music.com',
      },
    ],
  },
  {
    year: '2019',
    events: [
      {
        name: 'SPLICE Institute',
        location: 'Kalamazoo, MI',
      },
      {
        name: 'Toronto Creative Music Lab',
        location: 'Toronto, ON',
      },
      {
        name: 'Southern California Marimba: International Artist Competition',
        shortName: 'SCM: IAC',
        location: 'Orange, CA',
      },
      {
        name: 'Black House Collective: SoCal Intermedia Workshop',
        shortName: 'Black House Collective',
        location: 'Irvine, CA',
      },
      {
        name: 'Kendall Square Orchestra: Cambridge Science Festival',
        shortName: 'Kendall Square Orchestra',
        location: 'Cambridge, MA',
      },
      {
        name: 'XYLOPHONIA Ragtime Marimba Band',
        shortName: 'XYLOPHONIA',
        location: 'Nantucket, MA',
      },
      {
        name: 'Mary Poppins Production',
        shortName: 'Mary Poppins',
        location: 'Hopedale, MA',
      },
      {
        name: 'MIT Water Night: Ideas, Not Theories',
        shortName: 'MIT Water Night',
        location: 'Cambridge, MA',
      },
      {
        name: 'MASARY Studios: WBUR Opening',
        shortName: 'MASARY Studios',
        location: 'Boston, MA',
      },
    ],
  },
  {
    year: '2018',
    events: [
      {
        name: 'Eureka Ensemble: Sheltering Voices',
        shortName: 'Eureka Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'CØDA Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'Rhythm X FLOW: Ideas, Not Theories',
        shortName: 'Rhythm X FLOW',
        location: 'Boston, MA',
      },
      {
        name: 'Metropolitan Wind Symphony',
        location: 'Lexington, MA',
      },
      {
        name: 'More than a Riot: Women’s Equality Day',
        shortName: 'More than a Riot',
        location: 'Boston, MA',
      },
      {
        name: 'nief-norf Summer Festival',
        location: 'Knoxville, TN',
      },
      {
        name: 'Percussion Ensemble: Bent Knee',
        shortName: 'Bent Knee',
        location: 'Boston, MA',
      },
    ],
  },
  {
    year: '2017',
    events: [
      {
        name: 'Amid the Noise with Kadence Arts',
        shortName: 'Kadence Arts: Amid the Noise',
        location: 'Boston, MA',
      },
      {
        name: 'PASIC: Amid the Noise with So Percussion',
        shortName: 'PASIC: Amid the Noise',
        location: 'Indianapolis, IN',
      },
      {
        name: 'Eureka Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'New England Philharmonic',
        location: 'Boston, MA',
      },
      {
        name: 'ILLUMINUS: Ideas, Not Theories',
        shortName: 'ILLUMINUS',
        location: 'Boston, MA',
      },
      {
        name: 'Inuksuit by John Luther Adams',
        shortName: 'Inuksuit',
        location: 'San Francisco, CA',
      },
      {
        name: 'Clinic at Paramount High School',
        shortName: 'SCM Clinic',
        location: 'Paramount, CA',
      },
      {
        name: 'JACCC Kotohajime',
        location: 'Los Angeles, CA',
      },
    ],
  },
  {
    year: '2016',
    events: [
      {
        name: 'Adventures of Luxo Jr by Mya Pennington',
        shortName: 'Adventures of Luxo Jr',
        location: 'Rochester, NY',
      },
      {
        name: 'Inuksuit by John Luther Adams',
        shortName: 'Inuksuit',
        location: 'Boston, MA',
      },
      {
        name: 'Southern California Marimba Concert Series',
        shortName: 'SCM Concert Series',
        location: 'Orange, CA',
      },
    ],
  },
  {
    year: '2015',
    events: [
      {
        name: 'Fringe NYC: Ideas, Not Theories',
        shortName: 'Fringe NYC',
        location: 'New York, NY',
      },
      {
        name: 'Boston Philharmonic Youth Orchestra',
        shortName: 'BPYO',
        location: 'Boston, MA',
      },
    ],
  },
];

const ShowList = ({ shows }: { shows: Show[] }): JSX.Element => (
  <ul className={styles.events}>
    {shows.map(({ year, events }) => (
      <li className={styles.event} key={year}>
        <h3 className={styles.subtitle}>{year}</h3>
        {events.map(({ name, location, shortName }) => (
          <span key={name} className={styles.info}>
            <p className={styles.eventName}>{name}</p>
            <p className={styles.mobileEventName}>{shortName || name}</p>
            <p className={styles.location}>{location}</p>
          </span>
        ))}
      </li>
    ))}
  </ul>
);

const Shows = (): JSX.Element => (
  <article>
    <h2 className={styles.title}>upcoming</h2>
    <ShowList shows={futureShows} />
    <h2 className={styles.title}>past</h2>
    <ShowList shows={pastShows} />
  </article>
);

export default Shows;
