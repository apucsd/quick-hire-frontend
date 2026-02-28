import CategoriesSection from "../components/CategoriesSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";



const Home = () => {
    return (
        <div className="space-y-24 pb-24">
            <HeroSection />
            <CategoriesSection />
            <FeaturedSection />

        </div>
    );
};


export default Home;

