import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import FeaturesSection from "./sections/features-section";
import TeamSection from "./sections/team-section";
import TestimonialSection from "./sections/testimonial-section";
import PricingSection from "./sections/pricing-section";
import CTASection from "./sections/cta-section";
import LenisScroll from "./components/lenis";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Banner />
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <TeamSection />
            <TestimonialSection />
            <PricingSection />
            <CTASection />
            <Footer />
        </>
    )
}