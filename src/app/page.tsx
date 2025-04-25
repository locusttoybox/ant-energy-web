import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import TargetUsers from './components/TargetUsers';
import UseCases from './components/UseCases';
import Overview from './components/Overview';
import AboutProject from './components/AboutProject';

export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full">
        <div className="bg-background flex min-h-screen flex-col">
          <Header />
          <Hero />
          <Overview />
          <KeyFeatures />

          <TargetUsers />
          <AboutProject />
          <UseCases />
        </div>
      </main>
    </>
  );
}
