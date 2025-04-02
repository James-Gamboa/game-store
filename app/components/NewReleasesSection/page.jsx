import Image from 'next/image';

export default function NewReleasesSection ()  {
  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">New Releases</h2>
            <p className="text-gray-500">The latest and greatest games</p>
          </div>
          <a href="#" className="text-blue-600 hover:underline">View All</a>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/img/cyberpunk.jpg"
              alt="PlayStation Controller"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0bg-opacity-50 flex flex-col justify-center p-6">
              <h3 className="text-white text-3xl font-bold mb-2">Stay ahead with the latest releases</h3>
              <p className="text-white max-w-lg mb-4">
                Discover new worlds, embark on epic adventures, and experience cutting-edge gameplay with our curated selection of new releases.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore New Releases</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

