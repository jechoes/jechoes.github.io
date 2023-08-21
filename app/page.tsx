import Image from 'next/image';

export default function Page() {
  return (
    <article>
      <Image priority src="/IMG_9112.png" alt="joienya and marimba" width={250} height={190} />
      <Image priority src="/IMG_9115.png" alt="joienya and marimba" width={250} height={190} />
      <br />
      <Image priority src="/IMG_9113.png" alt="joienya and marimba" width={250} height={250} />
      <Image priority src="/jorimba.jpeg" alt="joienya and marimba" width={250} height={250} />
    </article>
  );
}
