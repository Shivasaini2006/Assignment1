import PlantCard from "./PlantCard";
import SectionTitle from "./SectionTitle";

const TrendingPlants = () => {
  // featured plants data
  const trendingPlants = [
    {
      id: 1,
      name: "For Your Desks Decorations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 509,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      featured: true,
    },
    {
      id: 2,
      name: "For Your Desks Decorations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=600&q=80",
      featured: false,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Our Trendy plants</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10">
          {trendingPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} large={plant.featured} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
