import { ShoppingCart } from "lucide-react";

const games = [
  {
    name: "Cyberpunk 2077: Phantom Liberty",
    price: 29.99,
    platforms: ["PC", "PS5", "Xbox"],
    image: "/img/cyberpunk.jpg",
    badge: "New"
  },
  {
    name: "Elden Ring",
    price: 49.99,
    originalPrice: 59.99,
    platforms: ["PC", "PS5", "Xbox"],
    image: "/img/cyberpunk.jpg",
    discount: "-17%"
  },
  {
    name: "Starfield",
    price: 59.99,
    platforms: ["PC", "Xbox"],
    image: "/img/cyberpunk.jpg",
    badge: "New"
  },
  {
    name: "Batman Arkham Knight",
    price: 44.99,
    originalPrice: 59.99,
    platforms: ["PC", "PS5"],
    image: "/img/cyberpunk.jpg",
    discount: "-25%"
  }
];

export default function FeaturedGames() {
  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Featured Games</h2>
          <p className="text-gray-400">Our selection of must-play titles</p>
        </div>
        <a href="#" className="text-blue-500 hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {games.map((game, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-md relative bg-white">
            {game.discount && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">{game.discount}</span>
            )}
            {game.badge && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-bold py-1 px-2 rounded-full">{game.badge}</span>
            )}
            <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                {game.platforms.map(platform => (
                  <span key={platform} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">{platform}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-1">{game.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold">${game.price.toFixed(2)}</span>
                {game.originalPrice && (
                  <span className="line-through text-gray-500">${game.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
