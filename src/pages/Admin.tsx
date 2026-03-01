import { useState } from "react";
import { useGetJobsQuery, useDeleteJobMutation, useCreateJobMutation, useUpdateJobMutation } from "../redux/features/jobs/jobsApi";
import { toast } from "react-hot-toast";
import { useGetApplicationsQuery } from "../redux/features/applications/applicationsApi";
import DashboardHeader from "../components/admin/DashboardHeader";
import QuickStats from "../components/admin/QuickStats";
import JobsTable from "../components/admin/JobsTable";
import JobModal from "../components/admin/JobModal";

const Admin = () => {
    // Fetch Data
    const { data: jobsData, isLoading } = useGetJobsQuery([]);
    const { data: applications } = useGetApplicationsQuery([]);

    // Mutations
    const [deleteJob] = useDeleteJobMutation();
    const [createJob] = useCreateJobMutation();
    const [updateJob] = useUpdateJobMutation();

    // UI State
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

    // Handlers
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

                <DashboardHeader onAddClick={() => setShowAddModal(true)} />

                <QuickStats
                    totalJobs={jobsData?.data?.length || "0"}
                    totalApplications={applications?.length || "0"}
                />

                <JobsTable
                    jobs={jobsData?.data}
                    isLoading={isLoading}
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
                    deleteConfirmId={deleteConfirmId}
                    setDeleteConfirmId={setDeleteConfirmId}
                />

                <JobModal
                    isOpen={showAddModal}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    editingJobId={editingJobId}
                />
            </div>
        </div>
    );
};

export default Admin;
