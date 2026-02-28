import { useState } from "react";
import { Link } from "react-router-dom";

const allJobs = [
    { id: 1, title: "Senior UI/UX Designer", company: "Google", location: "Remote", type: "Full Time", category: "Design", salary: "$120k - $150k", logo: "G" },
    { id: 2, title: "Frontend Developer (React)", company: "Meta", location: "Menlo Park, CA", type: "Full Time", category: "Development", salary: "$140k - $180k", logo: "M" },
    { id: 3, title: "Product Marketing Manager", company: "Slack", location: "New York, NY", type: "Remote", category: "Marketing", salary: "$110k - $130k", logo: "S" },
    { id: 4, title: "Backend Engineer (Node.js)", company: "Amazon", location: "Seattle, WA", type: "Full Time", category: "Development", salary: "$130k - $170k", logo: "A" },
    { id: 5, title: "Visual Designer", company: "Apple", location: "Cupertino, CA", type: "Full Time", category: "Design", salary: "$115k - $145k", logo: "A" },
    { id: 6, title: "Growth Hacker", company: "TikTok", location: "Remote", type: "Contract", category: "Marketing", salary: "$90k - $120k", logo: "T" },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filter */}
                <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Search Job</h3>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Category</h3>
                        <div className="space-y-3">
                            {["All", "Design", "Development", "Marketing", "Business"].map(cat => (
                                <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                                    <input
                                        type="radio"
                                        name="category"
                                        className="w-4 h-4 text-primary bg-slate-100 border-slate-300 focus:ring-primary focus:ring-2"
                                        checked={selectedCategory === cat}
                                        onChange={() => setSelectedCategory(cat)}
                                    />
                                    <span className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-body group-hover:text-primary'}`}>
                                        {cat}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <h4 className="font-bold text-primary mb-2">Get Job Alerts</h4>
                        <p className="text-xs text-slate-500 mb-4">Subscribe to get notified about new opportunities.</p>
                        <input type="email" placeholder="Email address" className="w-full p-2 text-xs bg-white border border-slate-200 rounded mb-2 outline-none" />
                        <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded shadow-lg shadow-primary/20">Subscribe</button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-sm font-medium text-body">
                            Showing <span className="text-heading font-bold">{filteredJobs.length}</span> jobs
                        </p>
                        <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none font-medium">
                            <option>Newest First</option>
                            <option>Salary: High to Low</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="group p-5 rounded-xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-slate-200/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-heading">
                                        {job.logo}
                                    </div>
                                    <div>
                                        <h3 className="font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                        <p className="text-xs text-body font-medium">{job.company} • {job.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-bold text-heading">{job.salary}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{job.type}</p>
                                    </div>
                                    <Link
                                        to={`/jobs/${job.id}`}
                                        className="bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-600 px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {filteredJobs.length === 0 && (
                            <div className="py-20 text-center">
                                <span className="text-5xl mb-4 block">🏜️</span>
                                <h3 className="font-bold text-lg">No jobs found</h3>
                                <p className="text-body text-sm">Try adjusting your filters or search keywords.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
