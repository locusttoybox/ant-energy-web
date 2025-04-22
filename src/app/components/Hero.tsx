export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {' '}
      <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">Welcome to Our Product</h1>
      <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
        Discover the features that make our solution unique. Designed for teams, loved by everyone.
      </p>
      <button className="rounded-2xl bg-blue-600 px-6 py-3 text-lg text-white transition hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}
