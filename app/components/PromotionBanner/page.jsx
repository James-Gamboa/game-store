import Image from 'next/image';

export default function PromotionBanner() {
  return (
    <section className="bg-blue-50 rounded-2xl p-8 flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 max-w-md">
        <span className="inline-block bg-blue-200 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
          Limited Time Offer
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Summer Sale</h2>
        <p className="text-gray-600">
          Get up to 80% off on hundreds of titles. Upgrade your library with the hottest games at unbeatable prices.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
      <div className="relative w-1/2 h-64">
        <Image
          src="/img/cyberpunk.jpg"
          alt="Summer Sale Banner"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold py-1 px-3 rounded-full">
          80% OFF
        </div>
      </div>
    </section>
  );
}
