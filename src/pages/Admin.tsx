import { useState } from "react";

const Admin = () => {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Senior UI/UX Designer", company: "Google", location: "Remote", type: "Full Time", status: "Active", applicants: 12 },
        { id: 2, title: "Frontend Developer (React)", company: "Meta", location: "Menlo Park, CA", type: "Full Time", status: "Active", applicants: 8 },
        { id: 3, title: "Product Marketing Manager", company: "Slack", location: "New York, NY", type: "Remote", status: "Draft", applicants: 0 },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);

    const deleteJob = (id: number) => {
        setJobs(jobs.filter(j => j.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-heading mb-2">Admin Dashboard</h1>
                    <p className="text-body text-sm font-medium">Manage your job listings and track applicants.</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/25 transition-all"
                >
                    + Post a New Job
                </button>
            </div>

            {/* Quick Stats Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: "Total Open Jobs", value: "12", icon: "💼", color: "bg-blue-50 text-blue-600" },
                    { label: "Active Applicants", value: "482", icon: "👥", color: "bg-purple-50 text-purple-600" },
                    { label: "Hired This Month", value: "14", icon: "🎉", color: "bg-green-50 text-green-600" },
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-xl`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-black text-heading">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Jobs Table */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job Title</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Applicants</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {jobs.map(job => (
                                <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-heading">{job.title}</p>
                                        <p className="text-xs text-slate-400">{job.type} • {job.location}</p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${job.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <p className="font-bold text-heading">{job.applicants}</p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button className="text-slate-400 hover:text-primary transition-colors text-lg" title="Edit">✏️</button>
                                            <button
                                                onClick={() => deleteJob(job.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors text-lg" title="Delete"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Job Modal Mockup */}
            {showAddModal && (
                <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
                        <button
                            onClick={() => setShowAddModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-heading"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-6">Post New Job</h2>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
                            <div>
                                <label className="block text-sm font-bold text-heading mb-1">Job Title</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" placeholder="e.g. Senior Frontend Engineer" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-heading mb-1">Location</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" placeholder="e.g. Remote" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-heading mb-1">Category</label>
                                    <select className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none bg-white">
                                        <option>Development</option>
                                        <option>Design</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-4 shadow-lg shadow-primary/25">
                                Save Job
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
