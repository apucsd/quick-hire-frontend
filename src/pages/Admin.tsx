import { useState } from "react";
import { FaPlus, FaRegPenToSquare, FaRegTrashCan, FaBriefcase, FaUsers, FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const Admin = () => {
    const [jobs, setJobs] = useState([
        { id: "1", title: "Senior UI/UX Designer", company: "Google", location: "Remote", category: "Design", status: "Active", applicants: 12, createdAt: "2024-03-20" },
        { id: "2", title: "Frontend Developer", company: "Meta", location: "Menlo Park, CA", category: "Development", status: "Active", applicants: 8, createdAt: "2024-03-21" },
        { id: "3", title: "Product Marketing Manager", company: "Slack", location: "New York, NY", category: "Marketing", status: "Draft", applicants: 0, createdAt: "2024-03-22" },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);

    const deleteJob = (id: string) => {
        setJobs(jobs.filter(j => j.id !== id));
    };

    return (
        <div className="bg-[#F8F9FB] min-h-screen pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-[32px] md:text-[40px] font-clash-display font-semibold text-[#25324B] mb-2">Admin Dashboard</h1>
                        <p className="text-[16px] text-[#515B6F] font-epilogue">Manage your job listings and track applicants.</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-[#4640DE] hover:bg-[#3b2ecc] text-white px-8 py-4 rounded-sm font-semibold shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 active:scale-95"
                    >
                        <FaPlus /> Post a New Job
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { label: "Total Open Jobs", value: "12", icon: <FaBriefcase />, color: "bg-[#4640DE]/10 text-[#4640DE]" },
                        { label: "Active Applicants", value: "482", icon: <FaUsers />, color: "bg-[#FFB836]/10 text-[#FFB836]" },
                        { label: "Hired This Month", value: "14", icon: <FaCircleCheck />, color: "bg-[#56CDAD]/10 text-[#56CDAD]" },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-6">
                                <div className={`w-14 h-14 ${stat.color} rounded-full flex items-center justify-center text-xl`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-[14px] text-[#7C8493] font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-[32px] font-bold text-[#25324B] font-clash-display">{stat.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Jobs Table */}
                <div className="bg-white border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h2 className="text-[20px] font-clash-display font-semibold text-[#25324B]">Recent Job Postings</h2>
                        <button className="text-primary font-semibold text-sm hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#F8F9FB] border-b border-slate-100">
                                <tr>
                                    <th className="px-8 py-5 text-[14px] font-bold text-[#7C8493] uppercase tracking-wider">Job Title</th>
                                    <th className="px-8 py-5 text-[14px] font-bold text-[#7C8493] uppercase tracking-wider text-center">Status</th>
                                    <th className="px-8 py-5 text-[14px] font-bold text-[#7C8493] uppercase tracking-wider text-center">Applicants</th>
                                    <th className="px-8 py-5 text-[14px] font-bold text-[#7C8493] uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {jobs.map(job => (
                                    <tr key={job.id} className="hover:bg-[#F8F9FB] transition-colors">
                                        <td className="px-8 py-6">
                                            <p className="font-bold text-[#25324B] mb-1">{job.title}</p>
                                            <p className="text-[14px] text-[#7C8493]">{job.category} • {job.location}</p>
                                        </td>
                                        <td className="px-8 py-6 text-center">
                                            <span className={`px-4 py-1.5 text-[12px] font-bold rounded-full border ${job.status === 'Active'
                                                    ? 'bg-[#56CDAD]/10 text-[#56CDAD] border-[#56CDAD]/20'
                                                    : 'bg-slate-100 text-slate-500 border-slate-200'
                                                }`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-center">
                                            <p className="font-bold text-[#25324B]">{job.applicants}</p>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-x-4">
                                                <button className="text-slate-400 hover:text-primary transition-all p-2 hover:bg-white rounded-lg" title="Edit">
                                                    <FaRegPenToSquare size={18} />
                                                </button>
                                                <button
                                                    onClick={() => deleteJob(job.id)}
                                                    className="text-slate-400 hover:text-red-500 transition-all p-2 hover:bg-white rounded-lg" title="Delete"
                                                >
                                                    <FaRegTrashCan size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Add Job Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 z-[100] bg-[#25324B]/60 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="bg-white rounded-sm p-10 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-[#25324B] transition-colors"
                            >
                                <IoCloseCircleOutline size={32} />
                            </button>
                            <h2 className="text-[28px] font-clash-display font-semibold text-[#25324B] mb-8">Post New Job</h2>
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Job Title</label>
                                        <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Senior UI Designer" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Company Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Acme corp" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Logo URL</label>
                                        <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. /brands/google.png" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Location</label>
                                        <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Remote / New York" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Category</label>
                                        <select className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all bg-white cursor-pointer appearance-none">
                                            <option>Development</option>
                                            <option>Design</option>
                                            <option>Marketing</option>
                                            <option>Business</option>
                                            <option>Technology</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Salary Range</label>
                                        <input type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. $120k - $150k" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[16px] font-semibold text-[#25324B]">Description</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="Enter job responsibilities, requirements, etc." required></textarea>
                                </div>

                                <div className="pt-4 flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="flex-1 px-8 py-4 border border-primary text-primary font-semibold hover:bg-slate-50 transition-all active:scale-95"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-[#4640DE] hover:bg-[#3b2ecc] text-white px-8 py-4 font-semibold shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                                    >
                                        Save Job
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
