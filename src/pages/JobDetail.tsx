import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetJobByIdQuery } from "../redux/features/jobs/jobsApi";
import { useSubmitApplicationMutation } from "../redux/features/applications/applicationsApi";
import { toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import Loading from "../components/ui/Loading";

const JobDetail = () => {
    const { id } = useParams();
    const [submitted, setSubmitted] = useState(false);
    const { data: job, isLoading, error } = useGetJobByIdQuery(id);
    const [submitApplication, { isLoading: isSubmitting }] = useSubmitApplicationMutation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resumeLink: "",
        coverNote: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await submitApplication({
                jobId: id,
                name: formData.name,
                email: formData.email,
                resumeLink: formData.resumeLink,
                coverNote: formData.coverNote
            }).unwrap();

            if (res.success) {
                toast.success(res?.message || "Application submitted successfully!");
                setSubmitted(true);
            }
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to submit application. Please try again.");
        }

    };

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (error || !job) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-[#25324B] mb-4">Job Not Found</h2>
                <Link to="/jobs" className="text-primary font-bold hover:underline">Back to All Jobs</Link>
            </div>
        );
    }

    // static responsibilities if backend doesn't provide
    const responsibilities = [
        "Design user interfaces for web and mobile applications",
        "Collaborate with product managers and engineers",
        "Conduct user research and usability testing",
        "Maintain and evolve our design system"
    ];

    if (submitted) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg shadow-green-200">
                    <FaCheck className="text-4xl" />
                </div>
                <h2 className="text-4xl font-clash-display font-bold mb-4 text-[#25324B]">Application Submitted!</h2>
                <p className="text-lg text-[#515B6F] mb-10">Thank you for applying to {job.company}. Our team will review your application and get back to you soon.</p>
                <div className="flex justify-center gap-4">
                    <Link to="/jobs" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-hover transition-all">
                        Browse More Jobs
                    </Link>
                    <Link to="/" className="border border-slate-200 px-8 py-3 rounded-xl font-bold text-[#25324B] hover:bg-slate-50 transition-all">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/jobs" className="text-sm font-bold text-primary mb-8 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                &larr; Back to Listings
            </Link>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Job Info */}
                <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:p-8 mb-12">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center p-4 shadow-xl shadow-slate-200/50">
                            <img
                                src={job.logo}
                                alt={job.company}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => (e.currentTarget.src = `https://ui-avatars.com/api/?name=${job.company}&background=random`)}
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-clash-display font-bold text-[#25324B] mb-2">{job.title}</h1>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg text-[#515B6F] font-medium">
                                <span className="text-[#25324B] font-bold">{job.company}</span>
                                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                <span>{job.location}</span>
                                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                <span className="text-primary">{job.salary || "Salary Undisclosed"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section className="bg-white p-4 md:p-8 rounded-[2rem] border border-slate-100/50">
                            <h3 className="text-2xl font-clash-display font-bold text-[#25324B] mb-6 border-b border-slate-50 pb-4">Description</h3>
                            <p className="text-[#515B6F] text-lg leading-relaxed whitespace-pre-wrap">{job.description}</p>
                        </section>

                        <section className="bg-white p-4 md:p-8 rounded-[2rem] border border-slate-100/50">
                            <h3 className="text-2xl font-clash-display font-bold text-[#25324B] mb-6 border-b border-slate-50 pb-4">Responsibilities</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {responsibilities.map((r, i) => (
                                    <li key={i} className="flex gap-3 text-[#515B6F] text-lg leading-snug">
                                        <span className="shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Sidebar Card: Apply Form */}
                <aside className="w-full lg:w-[450px] shrink-0">
                    <div className="sticky top-24 p-4 md:p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50">
                        <div className="mb-8">
                            <h3 className="text-2xl font-clash-display font-bold text-[#25324B] mb-2">Apply Now</h3>
                            <p className="text-[#515B6F]">Fill out the form below to apply for this position.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[14px] font-bold text-[#25324B] uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px] font-bold text-[#25324B] uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px] font-bold text-[#25324B] uppercase tracking-wider">Resume link (URL)</label>
                                <input
                                    required
                                    type="url"
                                    value={formData.resumeLink}
                                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    placeholder="https://drive.google.com/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[14px] font-bold text-[#25324B] uppercase tracking-wider">Cover note</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.coverNote}
                                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none font-medium"
                                    placeholder="Tell us why you're a great fit..."
                                ></textarea>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-hover disabled:opacity-70 text-white py-5  font-semibold shadow-xl shadow-primary/25 transition-all active:scale-95 text-lg"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                                Secure Application Protocol
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default JobDetail;

