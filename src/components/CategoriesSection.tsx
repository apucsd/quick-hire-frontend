import { Link } from "react-router-dom"
import { LuPencilRuler, LuTrendingUp, LuMonitor, LuCode } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiCreditCard, FiBriefcase, FiUsers } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const categories = [
    { title: "Design", count: "235 jobs available", icon: <LuPencilRuler size={36} /> },
    { title: "Sales", count: "756 jobs available", icon: <LuTrendingUp size={36} /> },
    { title: "Marketing", count: "140 jobs available", icon: <HiOutlineSpeakerphone size={36} />, highlighted: true },
    { title: "Finance", count: "325 jobs available", icon: <FiCreditCard size={36} /> },
    { title: "Technology", count: "436 jobs available", icon: <LuMonitor size={36} /> },
    { title: "Engineering", count: "542 jobs available", icon: <LuCode size={36} /> },
    { title: "Business", count: "211 jobs available", icon: <FiBriefcase size={36} /> },
    { title: "Human Resource", count: "346 jobs available", icon: <FiUsers size={36} /> },
];

const CategoriesSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-[32px] md:text-[48px] font-clash-display font-semibold text-[#25324B]">
                    Explore by <span className="text-primary">category</span>
                </h2>
                <Link to="/jobs" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-[16px]">
                    Show all jobs <FaArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className={`hover:bg-primary hover:text-white group p-8 border transition-all duration-150 cursor-pointer`}
                    >
                        <div className={`mb-8 text-primary group-hover:text-white`}>
                            {cat.icon}
                        </div>
                        <h3 className={`text-[24px] font-clash-display font-bold mb-3 text-[#25324B] group-hover:text-white`}>
                            {cat.title}
                        </h3>
                        <div className="flex justify-between items-center">
                            <p className={`text-[#7C8493] group-hover:text-white`}>
                                {cat.count}
                            </p>
                            <FaArrowRight className={`group-hover:text-white transition-all duration-300 text-[#25324B] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoriesSection
