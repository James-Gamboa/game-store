import Image from "next/image";
import NavBar from "./components/NavBar/Page";

export default function Page() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Discover Your Next Gaming</h1>
        <p>
          Explore our vast library of games across all platforms. From indie gems
          to AAA blockbusters, find the perfect game at the perfect price.
        </p>
        <button>Browse Games</button>
        <button>View Special Offers</button>
      </div>
      <main className="bg-gray-100 min-h-screen p-4">
      <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/images/cyberpunk-hero.jpg"
            alt="Cyberpunk 2077: Phantom Liberty"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 text-white">
          <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
            New Release
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">
            Cyberpunk 2077: Phantom Liberty
          </h2>
          <p className="max-w-xl mb-6">
            Dive into Night City's most dangerous district in this thrilling expansion. 
            New missions, characters, and a gripping spy-thriller narrative await.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded">
              Learn More
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 font-semibold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

