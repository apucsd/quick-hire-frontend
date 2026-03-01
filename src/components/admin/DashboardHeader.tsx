import { FaPlus } from "react-icons/fa6";

interface DashboardHeaderProps {
    onAddClick: () => void;
}

const DashboardHeader = ({ onAddClick }: DashboardHeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
                <h1 className="text-[32px] md:text-[40px] font-clash-display font-semibold text-[#25324B] mb-2">Admin Dashboard</h1>
                <p className="text-[16px] text-[#515B6F] font-epilogue">Manage your job listings and track applicants.</p>
            </div>
            <button
                onClick={onAddClick}
                className="bg-[#4640DE] hover:bg-[#3b2ecc] font-clash-display text-white px-8 py-4 shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 active:scale-95"
            >
                <FaPlus /> Post a New Job
            </button>
        </div>
    );
};

export default DashboardHeader;
