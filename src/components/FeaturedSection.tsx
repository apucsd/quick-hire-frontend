import { Link } from "react-router-dom"

const FeaturedSection = () => {
    return (
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
    )
}

export default FeaturedSection