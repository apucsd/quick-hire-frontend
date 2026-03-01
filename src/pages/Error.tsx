import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const Error = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4 py-20 text-[#25324B] font-epilogue">
            <div className="max-w-3xl w-full text-center">
                <div className="relative mb-12">
                    <h1 className="text-[120px] md:text-[200px] font-clash-display font-bold text-[#4640DE]/5 leading-none select-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[48px] md:text-[64px] font-clash-display font-bold text-[#25324B] whitespace-nowrap">
                            Oops!
                        </div>
                    </div>
                </div>


                <h2 className="text-2xl md:text-3xl font-clash-display font-semibold text-[#25324B] mb-4">
                    Page not found
                </h2>
                <p className="text-[#515B6F] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/25 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                        <FaHome className="text-xl" /> Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto border border-slate-200 bg-white hover:bg-slate-50 text-[#25324B] px-8 py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                        <FaArrowLeft className="text-xl" /> Go Back
                    </button>
                </div>

                <div className="mt-20 flex flex-col items-center gap-4 opacity-30 grayscale filter grayscale-100">
                    <div className="flex items-center gap-2">
                        <img src="https://i.ibb.co.com/TDK1bbcy/Frame-3.png" alt="logo" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-clash-display font-bold">Quick Hire</span>
                    </div>
                    <p className="text-xs font-semibold tracking-[0.2em] font-epilogue">CAREER PORTAL</p>
                </div>
            </div>
        </div>
    );
};

export default Error;