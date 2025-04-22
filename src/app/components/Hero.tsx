import '../globals.css';
import Button from './Button';

export default function Hero() {
  return (
    <section className="container flex h-screen flex-col items-center justify-center px-4 text-center">
      {' '}
      <h1 className="text-secondary mb-6 text-4xl font-extrabold md:text-6xl">
        Lorem ipsum dolor sit amet, consectetuer{' '}
      </h1>
      <p className="text-secondary mb-8 max-w-2xl text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh{' '}
      </p>
      <Button variant="outlineBlack">Pieteikties</Button>
    </section>
  );
}
