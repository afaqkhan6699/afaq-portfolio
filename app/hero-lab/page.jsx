import Hero from '../../components/hero-lab/Hero';

export const metadata = {
  title: 'Hero Lab',
  description: 'Liquid-reveal hero experiment by Muhammad Afaq.',
};

export default function HeroLabPage() {
  return (
    <main>
      <link rel="preload" as="image" href="/media/img1.webp" />
      <link rel="preload" as="image" href="/media/img2.webp" />
      <Hero />
    </main>
  );
}
