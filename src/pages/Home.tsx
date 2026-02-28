import { Link } from "react-router-dom";

const categories = [
    { title: "Design", count: "115 Jobs", icon: "🎨", color: "bg-purple-100 text-purple-600" },
    { title: "Development", count: "312 Jobs", icon: "💻", color: "bg-green-100 text-green-600" },
    { title: "Marketing", count: "84 Jobs", icon: "📈", color: "bg-orange-100 text-orange-600" },
    { title: "Business", count: "42 Jobs", icon: "💼", color: "bg-blue-100 text-blue-600" },
];

const Home = () => {
    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative pt-16 pb-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div className="z-10">
                            <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-8">
                                Find Your <span className="text-primary">Dream Job</span> With QuickHire
                            </h1>
                            <p className="text-xl text-body mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Join over 10,000+ workers and find your next career move. We connect top talent with the world's most innovative companies.
                            </p>

                            {/* Search Bar mockup */}
                            <div className="max-w-2xl mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col sm:flex-row gap-2">
                                <div className="flex-grow flex items-center px-4 gap-3">
                                    <span className="text-slate-400">🔍</span>
                                    <input
                                        type="text"
                                        placeholder="Job title, keywords..."
                                        className="w-full py-3 outline-none text-heading font-medium"
                                    />
                                </div>
                                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/25">
                                    Search
                                </button>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-body font-medium">
                                <span className="text-heading font-bold">Popular:</span>
                                <span className="hover:text-primary cursor-pointer px-3 py-1 bg-slate-100 rounded-full transition-colors">UI Design</span>
                                <span className="hover:text-primary cursor-pointer px-3 py-1 bg-slate-100 rounded-full transition-colors">React Dev</span>
                                <span className="hover:text-primary cursor-pointer px-3 py-1 bg-slate-100 rounded-full transition-colors">Marketing</span>
                            </div>
                        </div>

                        {/* Hero Image Mockup */}
                        <div className="relative hidden lg:block">
                            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center border border-primary/10 overflow-hidden shadow-2xl">
                                <div className="text-9xl grayscale opacity-20">🎯</div>
                                {/* Decorative elements */}
                                <div className="absolute top-10 right-10 p-6 bg-white rounded-2xl shadow-xl animate-bounce">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-400"></div>
                                        <div className="h-2 w-20 bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-50 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-xl border border-slate-50 max-w-[200px]">
                                <p className="text-xs font-bold text-heading mb-2">Active Candidates</p>
                                <div className="flex -space-x-3 mb-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i * 200}`}></div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                                </div>
                                <p className="text-[10px] text-slate-400 italic">"I found my job in 2 weeks!"</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Explore by <span className="text-primary">Category</span></h2>
                        <p className="text-body">Find jobs that match your expertise and passion.</p>
                    </div>
                    <Link to="/" className="text-primary font-bold hover:underline">View All Categories &rarr;</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer text-center">
                            <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                            <p className="text-body text-sm">{cat.count}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Jobs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Featured <span className="text-primary">Job Circulars</span></h2>
                        <p className="text-body">Hand-picked opportunities from top-tier companies.</p>
                    </div>
                    <Link to="/jobs" className="text-primary font-bold hover:underline">Find More Jobs &rarr;</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Senior UI/UX Designer", company: "Google", location: "Remote", type: "Full Time", salary: "$120k - $150k", tags: ["Design", "Senior"], logo: "G" },
                        { title: "Frontend Developer (React)", company: "Meta", location: "Menlo Park, CA", type: "Full Time", salary: "$140k - $180k", tags: ["Development", "React"], logo: "M" },
                        { title: "Product Marketing Manager", company: "Slack", location: "New York, NY", type: "Remote", salary: "$110k - $130k", tags: ["Marketing", "Remote"], logo: "S" },
                        { title: "Backend Engineer (Node.js)", company: "Amazon", location: "Seattle, WA", type: "Full Time", salary: "$130k - $170k", tags: ["Development", "Node.js"], logo: "A" },
                    ].map((job, i) => (
                        <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-2xl font-bold text-heading">
                                        {job.logo}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                        <p className="text-sm text-body">{job.company} • {job.location}</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    {job.type}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg border border-slate-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                                <span className="text-heading font-bold">{job.salary}<span className="text-slate-400 font-normal text-sm">/Year</span></span>
                                <Link
                                    to="/jobs/1"
                                    className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg text-sm font-bold transition-all active:scale-95"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};


export default Home;

