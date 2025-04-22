import Header from './components/Header';
import Hero from './components/Hero';
import './globals.css';
import Features from './components/Features';

export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full">
        <div className="bg-background flex min-h-screen flex-col items-center justify-center">
          <Header />
          <Hero />
          <Features />
        </div>
      </main>
    </>
  );
}
