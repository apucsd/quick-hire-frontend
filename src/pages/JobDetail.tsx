import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const JobDetail = () => {
    const { id } = useParams();
    const [submitted, setSubmitted] = useState(false);

    // Mock job data (in real app, fetch by ID)
    const job = {
        title: "Senior UI/UX Designer",
        company: "Google",
        location: "Remote",
        type: "Full Time",
        salary: "$120k - $150k",
        description: "We are looking for a Senior UI/UX Designer to join our team. You will be responsible for creating beautiful and functional interfaces for our users.",
        responsibilities: [
            "Design user interfaces for web and mobile applications",
            "Collaborate with product managers and engineers",
            "Conduct user research and usability testing",
            "Maintain and evolve our design system"
        ]
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        // In real app, POST to /api/applications
    };

    if (submitted) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                    ✅
                </div>
                <h2 className="text-3xl font-bold mb-4 text-heading">Application Submitted!</h2>
                <p className="text-body mb-10">Thank you for applying to {job.company}. Our team will review your application and get back to you soon.</p>
                <Link to="/" className="text-primary font-bold hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/jobs" className="text-sm font-bold text-primary mb-8 inline-block hover:underline">
                &larr; Back to Listings
            </Link>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Job Info */}
                <div className="flex-grow">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-4xl font-bold text-heading">
                            {job.company[0]}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{job.title}</h1>
                            <p className="text-lg text-body font-medium">{job.company} • {job.location} • {job.type}</p>
                        </div>
                    </div>

                    <div className="space-y-8 text-body leading-relaxed">
                        <section>
                            <h3 className="text-xl font-bold text-heading mb-4">Description</h3>
                            <p>{job.description}</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-heading mb-4">Responsibilities</h3>
                            <ul className="list-disc pl-5 space-y-3">
                                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Sidebar Card: Apply Form */}
                <aside className="w-full lg:w-[450px] shrink-0">
                    <div className="sticky top-24 p-8 rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50">
                        <h3 className="text-2xl font-bold mb-6 text-heading">Apply Now</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-heading mb-2">Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-heading mb-2">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-heading mb-2">Resume link (URL)</label>
                                <input required type="url" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="https://drive.google.com/..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-heading mb-2">Cover note</label>
                                <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Tell us why you're a great fit..."></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/25 transition-all active:scale-95">
                                Submit Application
                            </button>
                        </form>
                        <p className="mt-6 text-[10px] text-center text-slate-400 font-medium uppercase tracking-widest">
                            Secure Application • {job.company} Career Portal
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default JobDetail;
