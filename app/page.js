import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrendingPlants from "@/components/TrendingPlants";
import TopSellingPlants from "@/components/TopSellingPlants";
import CustomerReviews from "@/components/CustomerReviews";
import BestO2Section from "@/components/BestO2Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1e19]">
      <Navbar />
      <HeroBanner />
      <TrendingPlants />
      <TopSellingPlants />
      <CustomerReviews />
      <BestO2Section />
      <Footer />
    </main>
  );
}
