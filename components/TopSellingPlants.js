import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

function TopSellingPlants() {
  // all products
  const topPlants = [
    {
      id: 1,
      name: "Monstera plant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    },
    {
      id: 2,
      name: "Pachira plant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
    },
    {
      id: 3,
      name: "Cactus",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 290,
      image:
        "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=600&q=80",
    },
    {
      id: 4,
      name: "Sandle minded Plant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 520,
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80",
    },
    {
      id: 5,
      name: "Sanseveria plant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 410,
      image:
        "https://images.unsplash.com/photo-1587334207606-c0f2c56f0e58?w=600&q=80",
    },
    {
      id: 6,
      name: "Aglaonema plant",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 360,
      image:
        "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1a3a2e]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Our Top Selling Plants</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {topPlants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSellingPlants;
