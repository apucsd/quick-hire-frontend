import { FaBriefcase, FaUsers } from "react-icons/fa6";

interface QuickStatsProps {
    totalJobs: number | string;
    totalApplications: number | string;
}

const QuickStats = ({ totalJobs, totalApplications }: QuickStatsProps) => {
    const stats = [
        { label: "Total Open Jobs", value: totalJobs, icon: <FaBriefcase />, color: "bg-[#4640DE]/10 text-[#4640DE]" },
        { label: "Active Applications", value: totalApplications, icon: <FaUsers />, color: "bg-[#FFB836]/10 text-[#FFB836]" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, i) => (
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
    );
};

export default QuickStats;
