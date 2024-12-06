import BestSelling from "@/components/BestSelling";
import Category from "@/components/Category";
import ExploreProducts from "@/components/ExploreProducts";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import SpeakerAd from "@/components/SpeakerAd";
import Support from "@/components/Support";

export default function Home() {
  return (
   <div>
     <Hero />
    <FlashSales />
    <Category />
    <BestSelling />
    <SpeakerAd />
    <ExploreProducts />
    <NewArrivals />
    <Support />
    
   </div>
  );
}
