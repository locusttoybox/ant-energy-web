import Button from './Button';

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {' '}
      <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">Welcome to Our Product</h1>
      <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
        Discover the features that make our solution unique. Designed for teams, loved by everyone.
      </p>
      <Button className="mt-8 w-full sm:w-[40%] lg:w-[40%]" variant="outlineBlack">
        Pieteikties
      </Button>
    </section>
  );
}
