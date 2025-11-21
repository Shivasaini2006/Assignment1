import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Jitu Krishna",
      role: "Customer",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      id: 2,
      name: "Carol Rose",
      role: "Customer",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Customer Review</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
