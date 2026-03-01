import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass, FaLocationDot } from "react-icons/fa6";
import { SiRevolut, SiDropbox, SiCanva, SiX } from "react-icons/si";

const allJobs = [
    {
        id: 1,
        title: "Senior UI/UX Designer",
        company: "Revolut",
        location: "Madrid, Spain",
        type: "Full Time",
        category: "Design",
        salary: "$120k - $150k",
        icon: <SiRevolut size={32} className="text-black" />,
        desc: "Revolut is looking for a Senior UI/UX Designer to lead our mobile experience team...",
        tags: [
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" },
            { label: "Senior", color: "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20" }
        ]
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Canva",
        location: "Ontario, Canada",
        type: "Full Time",
        category: "Development",
        salary: "$140k - $180k",
        icon: <SiCanva size={32} className="text-[#00C4CC]" />,
        desc: "Join Canva and help us empower the world to design everything...",
        tags: [
            { label: "React", color: "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20" },
            { label: "Development", color: "text-[#FF6550] bg-[#FF6550]/10 border-[#FF6550]/20" }
        ]
    },
    {
        id: 3,
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, US",
        type: "Full Time",
        category: "Design",
        salary: "$110k - $130k",
        icon: <SiDropbox size={32} className="text-[#0061FF]" />,
        desc: "Dropbox is looking for a Brand Designer to help tell our story through visuals...",
        tags: [
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" }
        ]
    },
    {
        id: 4,
        title: "Data Analyst",
        company: "Twitter",
        location: "San Diego, US",
        type: "Full Time",
        category: "Data",
        salary: "$130k - $170k",
        icon: <SiX size={32} className="text-[#1DA1F2]" />,
        desc: "Twitter is looking for a Data Analyst to join our advertising performance team...",
        tags: [
            { label: "Technology", color: "text-[#FF6550] bg-[#FF6550]/10 border-[#FF6550]/20" }
        ]
    },
];

const Jobs = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredJobs = allJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="flex-grow flex items-center px-4 gap-4 w-full">
                            <FaLocationDot className="text-slate-400" />
                            <select className="w-full py-4 outline-none text-slate-800 font-medium bg-transparent appearance-none">
                                <option>Florence, Italy</option>
                                <option>Remote</option>
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
                                        <input type="checkbox" className="w-5 h-5 border-slate-300 rounded text-primary focus:ring-primary" />
                                        <span className="text-[#515B6F] text-[16px] group-hover:text-primary transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-semibold text-[#25324B] mb-6">Categories</h3>
                            <div className="space-y-4">
                                {["All", "Design", "Development", "Marketing", "Business"].map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="w-5 h-5 text-primary border-slate-300 focus:ring-primary"
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
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
                                <p className="text-[16px] text-[#7C8493]">Showing {filteredJobs.length} results</p>
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
                            {filteredJobs.map(job => (
                                <div key={job.id} className="group p-8 border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row md:items-center gap-8 cursor-pointer">
                                    <div className="shrink-0">
                                        {job.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-[20px] font-semibold text-[#25324B] group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <span className="px-3 py-1 border border-primary text-primary text-[12px] font-semibold whitespace-nowrap">
                                                {job.type}
                                            </span>
                                        </div>
                                        <p className="text-[16px] text-[#7C8493] mb-4 flex items-center gap-2">
                                            {job.company} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {job.location}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-4 py-1 text-[12px] font-semibold rounded-full border ${tag.color}`}
                                                >
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3 shrink-0">
                                        <Link
                                            to={`/jobs/${job.id}`}
                                            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-sm text-[15px] font-semibold transition-all shadow-xl shadow-primary/20 active:scale-95 text-center w-full md:w-auto"
                                        >
                                            Apply
                                        </Link>
                                        <p className="text-[14px] text-[#7C8493] font-medium">{job.salary}</p>
                                    </div>
                                </div>
                            ))}

                            {filteredJobs.length === 0 && (
                                <div className="py-24 text-center bg-white border border-dashed border-slate-200 rounded-3xl">
                                    <div className="text-6xl mb-6">🔍</div>
                                    <h3 className="text-[24px] font-clash-display font-semibold text-[#25324B] mb-2">No jobs found</h3>
                                    <p className="text-[#7C8493]">Try adjusting your search terms or filters to find what you're looking for.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination mockup */}
                        <div className="mt-12 flex justify-center gap-2">
                            {[1, 2, 3, "...", 10].map((page, i) => (
                                <button
                                    key={i}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-all ${page === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-[#7C8493] hover:bg-slate-100'}`}
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
