import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { SiRevolut, SiDropbox, SiCanva, SiX, SiGodaddy } from "react-icons/si";

const jobs = [
    {
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        desc: "Revolut is looking for Email Marketing to help team ma ...",
        tags: [
            { label: "Marketing", color: "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20" },
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" }
        ],
        icon: <SiRevolut size={32} className="text-black" />,
        type: "Full Time"
    },
    {
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, US",
        desc: "Dropbox is looking for Brand Designer to help the team t ...",
        tags: [
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" },
            { label: "Business", color: "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20" }
        ],
        icon: <SiDropbox size={32} className="text-[#0061FF]" />,
        type: "Full Time"
    },
    {
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        desc: "Pitch is looking for Customer Manager to join marketing t ...",
        tags: [
            { label: "Marketing", color: "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20" }
        ],
        icon: <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold italic">Pitch</div>,
        type: "Full Time"
    },
    {
        title: "Visual Designer",
        company: "Blinklist",
        location: "Granada, Spain",
        desc: "Blinklist is looking for Visual Designer to help team desi ...",
        tags: [
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" }
        ],
        icon: <div className="w-8 h-8 bg-[#00D77D] rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-4 h-4 bg-white/50 rounded-full blur-[2px]"></div>
        </div>,
        type: "Full Time"
    },
    {
        title: "Product Designer",
        company: "ClassPass",
        location: "Manchester, UK",
        desc: "ClassPass is looking for Product Designer to help us...",
        tags: [
            { label: "Marketing", color: "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20" },
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" }
        ],
        icon: <div className="w-8 h-8 bg-[#0046FF] rounded-full flex items-center justify-center text-white font-bold">CP</div>,
        type: "Full Time"
    },
    {
        title: "Lead Designer",
        company: "Canva",
        location: "Ontario, Canada",
        desc: "Canva is looking for Lead Engineer to help develop n ...",
        tags: [
            { label: "Design", color: "text-[#56CDAD] bg-[#56CDAD]/10 border-[#56CDAD]/20" },
            { label: "Business", color: "text-[#4640DE] bg-[#4640DE]/10 border-[#4640DE]/20" }
        ],
        icon: <SiCanva size={32} className="text-[#00C4CC]" />,
        type: "Full Time"
    },
    {
        title: "Brand Strategist",
        company: "GoDaddy",
        location: "Marseille, France",
        desc: "GoDaddy is looking for Brand Strategist to join the team...",
        tags: [
            { label: "Marketing", color: "text-[#FFB836] bg-[#FFB836]/10 border-[#FFB836]/20" }
        ],
        icon: <SiGodaddy size={32} className="text-black" />,
        type: "Full Time"
    },
    {
        title: "Data Analyst",
        company: "Twitter",
        location: "San Diego, US",
        desc: "Twitter is looking for Data Analyst to help team desi ...",
        tags: [
            { label: "Technology", color: "text-[#FF6550] bg-[#FF6550]/10 border-[#FF6550]/20" }
        ],
        icon: <SiX size={32} className="text-[#1DA1F2]" />,
        type: "Full Time"
    }
];


const FeaturedSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-[32px] md:text-[48px] font-clash-display font-semibold text-[#25324B]">
                    Featured <span className="text-[#26A4FF]">jobs</span>
                </h2>
                <Link to="/jobs" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-[16px]">
                    Show all jobs <FaArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobs.map((job, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-6 flex flex-col hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            {job.icon}
                            <span className="px-3 py-1 border border-primary text-primary text-[12px] font-semibold">
                                {job.type}
                            </span>
                        </div>

                        <h3 className="text-[18px] font-bold text-[#25324B] mb-1">{job.title}</h3>
                        <p className="text-[14px] text-[#7C8493] mb-4">
                            {job.company} <span className="mx-1">•</span> {job.location}
                        </p>

                        <p className="text-[14px] text-[#7C8493] mb-6 line-clamp-2">
                            {job.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {job.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 text-[12px] font-semibold rounded-full border ${tag.color}`}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedSection
