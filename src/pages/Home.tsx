import CategoriesSection from "../components/CategoriesSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";
import TrustedCompanies from "../components/TrustedCompanies";

const Home = () => {
    return (
        <div className="space-y-10 pb-24">
            <HeroSection />
            <TrustedCompanies />
            <CategoriesSection />
            <FeaturedSection />
        </div>
    );
};


export default Home;

