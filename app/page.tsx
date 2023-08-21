import Image from 'next/image';

export default function Page() {
  return (
    <article>
      <Image
        priority
        src="/images/1.png"
        alt="joienya (2018)"
        width={250}
        height={190}
      />
      <Image
        priority
        src="/images/2.png"
        alt="joienya at black house (2018)"
        width={250}
        height={190}
      />
      <br />
      <Image
        priority
        src="/images/3.png"
        alt="joienya at more than a riot (2018)"
        width={250}
        height={250}
      />
      <Image
        priority
        src="/images/4.jpeg"
        alt="joienya from back (2018)"
        width={250}
        height={250}
      />
    </article>
  );
}
