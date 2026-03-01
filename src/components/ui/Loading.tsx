const Loading = () => {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center">
            {/* Logo Animation */}
            <div className="relative mb-8">
                {/* Ping rings */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150 opacity-40"></div>
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping scale-125 opacity-60 [animation-delay:0.2s]"></div>

                {/* Logo container */}
                <div className="relative w-24 h-24 bg-white rounded-[2rem] border border-slate-100 p-5 shadow-2xl shadow-primary/10 flex items-center justify-center animate-bounce duration-[2000ms]">
                    <img
                        src="https://i.ibb.co.com/TDK1bbcy/Frame-3.png"
                        alt="Quick Hire Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Skeleton-like info */}
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-clash-display font-bold text-[#25324B] animate-pulse">
                    Quick <span className="text-primary">Hire</span>
                </h2>

                {/* Spinner bar */}
                <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-1/3 animate-[loading_1.5s_infinite_ease-in-out]"></div>
                </div>

                <p className="text-sm font-semibold text-[#7C8493] tracking-[0.3em] uppercase animate-pulse">
                    Connecting Opportunities
                </p>
            </div>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(250%); }
                }
            `}</style>
        </div>
    );
};

export default Loading;