import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

interface JobsTableProps {
    jobs: any[];
    isLoading: boolean;
    onEdit: (job: any) => void;
    onDelete: (id: string) => void;
    deleteConfirmId: string | null;
    setDeleteConfirmId: (id: string | null) => void;
}

const JobsTable = ({
    jobs,
    isLoading,
    onEdit,
    onDelete,
    deleteConfirmId,
    setDeleteConfirmId
}: JobsTableProps) => {
    return (
        <div className="bg-white border border-slate-100 shadow-sm text-right rounded-sm">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white text-left">
                <h2 className="text-[20px] font-clash-display font-semibold text-[#25324B]">Recent Job Postings</h2>
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
                        ) : jobs && jobs.length > 0 ? (
                            jobs.map((job: any) => (
                                <tr key={job.id} className="hover:bg-[#F8F9FB] transition-colors group">
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
                                                onClick={() => onEdit(job)}
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
                                                                onClick={() => onDelete(job.id)}
                                                                className="px-4 py-1.5 text-[12px] font-bold text-white bg-red-500 hover:bg-red-600 rounded shadow-lg shadow-red-500/20 transition-all active:scale-95 whitespace-nowrap"
                                                            >
                                                                Yes, Delete
                                                            </button>
                                                        </div>
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
    );
};

export default JobsTable;
