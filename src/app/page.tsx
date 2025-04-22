import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto max-w-[1043px] px-4 sm:px-6 sm:pt-2 lg:mb-0 lg:px-8">
        <title>Hero Page</title>

        <Header />
        <Hero />
      </div>
    </>
  );
}
