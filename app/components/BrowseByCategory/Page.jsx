const categories = [
  {
    name: "RPG",
    image: "/img/cyberpunk.jpg",
  },
  {
    name: "Action",
    image: "/img/cyberpunk.jpg",
  },
  {
    name: "Strategy",
    image: "/img/cyberpunk.jpg",
  },
  {
    name: "Simulation",
    image: "/img/cyberpunk.jpg",
  }
];

export default function BrowseByCategory() {
  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <p className="text-gray-400">Find games by your favorite genre</p>
        </div>
        <a href="#" className="text-blue-500 hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-md relative bg-gray-300">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
