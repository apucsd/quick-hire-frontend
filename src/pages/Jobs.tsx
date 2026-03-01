import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass, FaLocationDot } from "react-icons/fa6";
import { useGetJobsQuery } from "../redux/features/jobs/jobsApi";

const Jobs = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;

    const { data: jobsData, isLoading } = useGetJobsQuery([
        { name: "page", value: currentPage.toString() },
        { name: "limit", value: limit.toString() },
        { name: "searchTerm", value: search },
        { name: "category", value: selectedCategory === "All" ? "" : selectedCategory }
    ]);

    const jobs = jobsData?.data;
    const meta = jobsData?.meta;

    return (
        <div className="bg-[#F8F9FB]">
            {/* Page Header */}
            <header className="bg-white border-b border-slate-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[48px] md:text-[64px] font-clash-display font-semibold text-[#25324B] mb-4">
                        Find your <span className="text-[#26A4FF]">dream job</span>
                    </h1>
                    <p className="text-[18px] text-[#515B6F] mb-12 max-w-2xl mx-auto">
                        Browse through thousands of job opportunities and find the one that fits your career goals.
                    </p>

                    {/* Search Bar mockup */}
                    <div className="bg-white p-3  shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
                        <div className="flex-grow flex items-center px-4 gap-4 w-full border-b md:border-b-0 md:border-r border-slate-100">
                            <FaMagnifyingGlass className="text-slate-400" />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="w-full py-4 outline-none text-slate-800 font-medium placeholder:text-slate-400"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1); // Reset to page 1 on search
                                }}
                            />
                        </div>
                        <div className="flex-grow flex items-center px-4 gap-4 w-full">
                            <FaLocationDot className="text-slate-400" />
                            <select className="w-full py-4 outline-none text-slate-800 font-medium bg-transparent appearance-none">
                                <option>Remote</option>
                                <option>Florence, Italy</option>
                                <option>New York, USA</option>
                            </select>
                        </div>
                        <button className="w-full md:w-auto bg-[#4640DE] hover:bg-[#3b2ecc] text-white px-10 py-5 font-semibold transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap">
                            Search
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filter */}
                    <aside className="w-full lg:w-72 flex-shrink-0 space-y-10 font-epilogue">
                        <div>
                            <h3 className="text-[20px] font-semibold text-[#25324B] mb-6">Type of Employment</h3>
                            <div className="space-y-4">
                                {["Full-time", "Part-time", "Remote", "Internship", "Contract"].map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 border-slate-300 rounded text-primary focus:ring-primary" defaultChecked={type === "Full-time"} />
                                        <span className="text-[#515B6F] text-[16px] group-hover:text-primary transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-semibold text-[#25324B] mb-6">Categories</h3>
                            <div className="space-y-4">
                                {["All", "Engineering", "Development", "Design", "Marketing", "Business", "Technology"].map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="w-5 h-5 text-primary border-slate-300 focus:ring-primary"
                                            checked={selectedCategory === cat}
                                            onChange={() => {
                                                setSelectedCategory(cat);
                                                setCurrentPage(1); // Reset to page 1 on category change
                                            }}
                                        />
                                        <span className={`text-[16px] transition-colors ${selectedCategory === cat ? 'text-primary font-semibold' : 'text-[#515B6F] group-hover:text-primary'}`}>
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="p-8  bg-primary/5 border border-primary/10">
                            <h4 className="text-[18px] font-semibold text-primary mb-3">Job Alerts</h4>
                            <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">Stay updated with the latest job openings in your field.</p>
                            <input type="email" placeholder="Email address" className="w-full p-4 text-sm bg-white border border-slate-100 rounded mb-4 outline-none focus:ring-2 focus:ring-primary/20" />
                            <button className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-4 rounded shadow-lg shadow-primary/20 transition-all">Subscribe Now</button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-[28px] font-clash-display font-semibold text-[#25324B]">All Jobs</h2>
                                <p className="text-[16px] text-[#7C8493]">Showing {jobs?.length || 0} results</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-[#7C8493]">Sort by:</span>
                                <select className="bg-white border border-slate-100 rounded-lg px-4 py-2 text-sm outline-none font-medium text-[#25324B]">
                                    <option>Newest First</option>
                                    <option>Salary: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {isLoading ? (
                                <div className="py-20 text-center text-[#7C8493]">Loading jobs...</div>
                            ) : jobs && jobs.length > 0 ? (
                                jobs.map((job: any) => {
                                    const colors: Record<string, string> = {
                                        "Marketing": "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20",
                                        "Design": "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20",
                                        "Engineering": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20",
                                        "Development": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20",
                                        "Technology": "text-[#FF6550] bg-[#FF6550]/10 border-[#FF6550]/20",
                                        "Business": "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20"
                                    };
                                    const categoryColor = colors[job.category] || "text-[#7C8493] bg-slate-50 border-slate-200";

                                    return (
                                        <div key={job.id} className="group p-8 border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row md:items-center gap-8 cursor-pointer">
                                            <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                                                <img
                                                    src={job.logo}
                                                    alt={job.company}
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/64?text=Company")}
                                                />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-[20px] font-semibold text-[#25324B] group-hover:text-primary transition-colors">
                                                        {job.title}
                                                    </h3>
                                                    <span className="px-3 py-1 border border-primary text-primary text-[12px] font-semibold whitespace-nowrap">
                                                        Full Time
                                                    </span>
                                                </div>
                                                <p className="text-[16px] text-[#7C8493] mb-4 flex items-center gap-2">
                                                    {job.company} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {job.location}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    <span className={`px-4 py-1 text-[12px] font-semibold rounded-full border ${categoryColor}`}>
                                                        {job.category}
                                                    </span>
                                                    <span className="px-4 py-1 text-[12px] font-semibold rounded-full border text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20">
                                                        Senior
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-3 shrink-0">
                                                <Link
                                                    to={`/jobs/${job.id}`}
                                                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-sm text-[15px] font-semibold transition-all shadow-xl shadow-primary/20 active:scale-95 text-center w-full md:w-auto"
                                                >
                                                    Apply
                                                </Link>
                                                <p className="text-[14px] text-[#7C8493] font-medium">{job.salary || "Not Specified"}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="py-24 text-center bg-white border border-dashed border-slate-200 rounded-3xl">
                                    <div className="text-6xl mb-6">🔍</div>
                                    <h3 className="text-[24px] font-clash-display font-semibold text-[#25324B] mb-2">No jobs found</h3>
                                    <p className="text-[#7C8493]">Try adjusting your search terms or filters to find what you're looking for.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            {Array.from({ length: meta?.totalPage || 0 }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-all ${currentPage === page ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-[#7C8493] hover:bg-slate-100'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
