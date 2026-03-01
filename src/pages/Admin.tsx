import { useState } from "react";
import { FaPlus, FaRegPenToSquare, FaRegTrashCan, FaBriefcase, FaUsers } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useGetJobsQuery, useDeleteJobMutation, useCreateJobMutation, useUpdateJobMutation } from "../redux/features/jobs/jobsApi";
import { toast } from "react-hot-toast";
import { useGetApplicationsQuery } from "../redux/features/applications/applicationsApi";

const Admin = () => {
    // Fetch Jobs
    const { data: jobs, isLoading } = useGetJobsQuery([]);
    const [deleteJob] = useDeleteJobMutation();
    const [createJob] = useCreateJobMutation();
    const [updateJob] = useUpdateJobMutation();
    const { data: applications } = useGetApplicationsQuery([]);
    // console.log(applications);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingJobId, setEditingJobId] = useState<string | null>(null);
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        logo: "",
        location: "",
        category: "Engineering",
        salary: "",
        description: ""
    });

    const handleDelete = async (id: string) => {
        try {
            await deleteJob(id).unwrap();
            toast.success("Job deleted successfully");
            setDeleteConfirmId(null);
        } catch (err) {
            toast.error("Failed to delete job");
        }
    };

    const handleEditClick = (job: any) => {
        setFormData({
            title: job.title,
            company: job.company,
            logo: job.logo,
            location: job.location,
            category: job.category,
            salary: job.salary || "",
            description: job.description
        });
        setEditingJobId(job.id);
        setShowAddModal(true);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
        setEditingJobId(null);
        setFormData({
            title: "",
            company: "",
            logo: "",
            location: "",
            category: "Engineering",
            salary: "",
            description: ""
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingJobId) {
                await updateJob({ id: editingJobId, ...formData }).unwrap();
                toast.success("Job updated successfully!");
            } else {
                await createJob(formData).unwrap();
                toast.success("Job posted successfully!");
            }
            handleCloseModal();
        } catch (err) {
            toast.error(editingJobId ? "Failed to update job" : "Failed to post job");
        }
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
                        className="bg-[#4640DE] hover:bg-[#3b2ecc] font-clash-display text-white px-8 py-4 shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 active:scale-95"
                    >
                        <FaPlus /> Post a New Job
                    </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                        { label: "Total Open Jobs", value: jobs?.length || "0", icon: <FaBriefcase />, color: "bg-[#4640DE]/10 text-[#4640DE]" },
                        { label: "Active Applications", value: applications?.length || "0", icon: <FaUsers />, color: "bg-[#FFB836]/10 text-[#FFB836]" },
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
                <div className="bg-white border border-slate-100 shadow-sm text-right rounded-sm">
                    <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
                        <h2 className="text-[20px] font-clash-display font-semibold text-[#25324B]">Recent Job Postings</h2>
                        {/* <button className="text-primary font-semibold text-sm hover:underline">View All</button> */}
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
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center text-[#7C8493]">Loading jobs...</td>
                                    </tr>
                                ) : jobs?.length > 0 ? (
                                    jobs.map((job: any) => (
                                        <tr key={job.id} className="hover:bg-[#F8F9FB] transition-colors">
                                            <td className="px-8 py-6">
                                                <p className="font-bold text-[#25324B] mb-1">{job.title}</p>
                                                <p className="text-[14px] text-[#7C8493]">{job.category} • {job.location}</p>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <span className="px-4 py-1.5 text-[12px] font-bold rounded-full border bg-[#56CDAD]/10 text-[#56CDAD] border-[#56CDAD]/20">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <p className="font-bold text-[#25324B]">{job.applications || 0}</p>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-x-4 items-center">
                                                    <button
                                                        onClick={() => handleEditClick(job)}
                                                        className="text-slate-400 hover:text-primary transition-all p-2 hover:bg-white rounded-lg"
                                                        title="Edit"
                                                    >
                                                        <FaRegPenToSquare size={18} />
                                                    </button>
                                                    <div className="relative inline-block text-left">
                                                        <button
                                                            onClick={() => setDeleteConfirmId(deleteConfirmId === job.id ? null : job.id)}
                                                            className={`transition-all p-2 rounded-lg ${deleteConfirmId === job.id ? 'bg-red-50 text-red-500' : 'text-slate-400 hover:text-red-500 hover:bg-white'}`}
                                                            title="Delete"
                                                        >
                                                            <FaRegTrashCan size={18} />
                                                        </button>

                                                        {deleteConfirmId === job.id && (
                                                            <div className="absolute z-[100] right-full top-1/2 -translate-y-1/2 mr-4 w-64 bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-5 rounded-sm animate-in fade-in slide-in-from-right-2 duration-200 text-left">
                                                                <p className="text-[14px] font-semibold text-[#25324B] mb-4">Are you sure to delete this job listing?</p>
                                                                <div className="flex gap-2 justify-end">
                                                                    <button
                                                                        onClick={() => setDeleteConfirmId(null)}
                                                                        className="px-3 py-1.5 text-[12px] font-bold text-[#7C8493] hover:bg-slate-50 rounded transition-colors"
                                                                    >
                                                                        No
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDelete(job.id)}
                                                                        className="px-4 py-1.5 text-[12px] font-bold text-white bg-red-500 hover:bg-red-600 rounded shadow-lg shadow-red-500/20 transition-all active:scale-95 whitespace-nowrap"
                                                                    >
                                                                        Yes, Delete
                                                                    </button>
                                                                </div>
                                                                {/* Arrow */}
                                                                <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-white border-t border-r border-slate-100 rotate-45"></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center text-[#7C8493]">No jobs found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Add Job Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 z-[100] bg-[#25324B]/60 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="bg-white rounded-sm p-10 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 text-slate-400 hover:text-[#25324B] transition-colors"
                            >
                                <IoCloseCircleOutline size={32} />
                            </button>
                            <h2 className="text-[28px] font-clash-display font-semibold text-[#25324B] mb-8">
                                {editingJobId ? "Edit Job" : "Post New Job"}
                            </h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Job Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. Senior UI Designer"
                                            required
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Company Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. Acme corp"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Logo URL</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. /brands/google.png"
                                            required
                                            value={formData.logo}
                                            onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Location</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. Remote / New York"
                                            required
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Category</label>
                                        <select
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all bg-white cursor-pointer appearance-none"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option>Engineering</option>
                                            <option>Development</option>
                                            <option>Design</option>
                                            <option>Marketing</option>
                                            <option>Business</option>
                                            <option>Technology</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[16px] font-semibold text-[#25324B]">Salary Range</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                            placeholder="e.g. $120k - $150k"
                                            value={formData.salary}
                                            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[16px] font-semibold text-[#25324B]">Description</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-slate-200 focus:border-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                                        placeholder="Enter job responsibilities, requirements, etc."
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="pt-4 flex gap-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="flex-1 px-8 py-4 border border-primary text-primary font-semibold hover:bg-slate-50 transition-all active:scale-95"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-[#4640DE] hover:bg-[#3b2ecc] text-white px-8 py-4 font-semibold shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                                    >
                                        {editingJobId ? "Update Job" : "Save Job"}
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
