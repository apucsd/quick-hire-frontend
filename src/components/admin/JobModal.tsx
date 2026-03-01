import { IoCloseCircleOutline } from "react-icons/io5";

interface JobModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
    formData: {
        title: string;
        company: string;
        logo: string;
        location: string;
        category: string;
        salary: string;
        description: string;
    };
    setFormData: (data: any) => void;
    editingJobId: string | null;
}

const JobModal = ({
    isOpen,
    onClose,
    onSubmit,
    formData,
    setFormData,
    editingJobId
}: JobModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-[#25324B]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-sm p-10 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-[#25324B] transition-colors"
                >
                    <IoCloseCircleOutline size={32} />
                </button>
                <h2 className="text-[28px] font-clash-display font-semibold text-[#25324B] mb-8">
                    {editingJobId ? "Edit Job" : "Post New Job"}
                </h2>
                <form className="space-y-6" onSubmit={onSubmit}>
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
                            onClick={onClose}
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
    );
};

export default JobModal;
