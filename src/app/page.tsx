import Cards from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedWebinar from "@/components/FeaturedWebinar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructor from "@/components/MeetOurInstructor";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Cards />
      <FeaturedWebinar />
      <MeetOurInstructor />
      <Footer />
    </main>
  );
}
