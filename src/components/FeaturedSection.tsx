import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { useGetJobsQuery } from "../redux/features/jobs/jobsApi";

const FeaturedSection = () => {
    const { data: jobsData, isLoading } = useGetJobsQuery([{
        name: "limit",
        value: 8
    }]);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-[28px] md:text-[48px] font-clash-display font-semibold text-[#25324B]">
                    Featured <span className="text-[#26A4FF]">jobs</span>
                </h2>
                <Link to="/jobs" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all text-[16px]">
                    Show all jobs <FaArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading ? (
                    <div className="col-span-full py-20 text-center text-[#7C8493]">Loading featured jobs...</div>
                ) : jobsData?.data?.map((job: any, i: number) => {
                    // Category color mapping
                    const colors: Record<string, string> = {
                        "Marketing": "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20",
                        "Design": "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20",
                        "Engineering": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20",
                        "Development": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20",
                        "Technology": "text-[#FF6550] bg-[#FF6550]/10 border-[#FF6550]/20",
                        "Business": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20"
                    };
                    const colorClass = colors[job?.category] || "text-[#7C8493] bg-slate-50 border-slate-200";

                    return (
                        <Link
                            to={`/jobs/${job?.id}`}
                            key={i} className="bg-white border border-slate-100 p-6 flex flex-col hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        className="max-w-full max-h-full object-contain"
                                        src={job?.logo}
                                        alt={job?.company}
                                        onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/48?text=Job")}
                                    />
                                </div>
                                <span className="px-3 py-1 border border-primary text-primary text-[12px] font-semibold">
                                    Full Time
                                </span>
                            </div>

                            <h3 className="text-[18px] font-bold text-[#25324B] mb-1 group-hover:text-primary transition-colors">{job?.title}</h3>
                            <p className="text-[14px] text-[#7C8493] mb-4">
                                {job?.company} <span className="mx-1">•</span> {job?.location}
                            </p>

                            <p className="text-[14px] text-[#7C8493] mb-6 line-clamp-2">
                                {job?.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className={`px-3 py-1 text-[12px] font-semibold rounded-full border ${colorClass}`}>
                                    {job?.category}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default FeaturedSection
