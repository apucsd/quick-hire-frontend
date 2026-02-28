const HeroSection = () => {

    return (
        <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden">
            {/* Background Pattern */}
            <img
                src="/bg-pattern.png"
                alt="pattern"
                className="absolute right-0 top-0 w-1/2 h-full object-contain -z-10 pointer-events-none opacity-60"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 z-10">
                        <h1 className="text-[44px] sm:text-[72px] font-clash-display leading-[1.1] text-[#25324B] mb-8">
                            Discover <br />
                            more than <br />
                            <span className="text-[#26A4FF] relative inline-block">
                                5000+ Jobs
                                <img
                                    src="/line.png"
                                    alt="underline"
                                    className="absolute -bottom-2 left-0 w-full h-3"
                                />
                            </span>
                        </h1>
                        <p className="text-[20px] text-[#515B6F] mb-12 max-w-lg leading-[1.6]">
                            Great platform for the job seeker that searching for new career heights and passionate about startups.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white p-3 rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col md:flex-row items-center gap-2 max-w-3xl mb-8">
                            <div className="flex-grow flex items-center px-4 gap-4 w-full border-b md:border-b-0 md:border-r border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Job title or keyword"
                                    className="w-full py-4 outline-none text-slate-800 font-medium placeholder:text-slate-400"
                                />
                            </div>
                            <div className="flex-grow flex items-center px-4 gap-4 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <select className="w-full py-4 outline-none text-slate-800 font-medium bg-transparent appearance-none">
                                    <option>Florence, Italy</option>
                                    <option>Remote</option>
                                    <option>New York, USA</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <button className="w-full md:w-auto bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white px-10 py-5 rounded-sm font-bold transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap">
                                Search my job
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-[15px] font-medium text-slate-400">
                            <span>Popular :</span>
                            <span className="text-slate-600 hover:text-primary cursor-pointer px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full transition-all">UI Designer</span>
                            <span className="text-slate-600 hover:text-primary cursor-pointer px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full transition-all">UX Researcher</span>
                            <span className="text-slate-600 hover:text-primary cursor-pointer px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full transition-all">Android</span>
                            <span className="text-slate-600 hover:text-primary cursor-pointer px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full transition-all">Admin</span>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div


                        className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="absolute h-[100vh] w-[60vw] -top-20 right-0 overflow-hidden">
                            {/* pattern image */}
                            <img className=" w-full h-full z-[-1]" src="/bg-pattern.png" alt="" />
                        </div>

                        <div className="relative w-full max-w-[550px]">
                            <img
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 41% 100%, 0 99%, 0% 50%)"
                                }}
                                src="/men.png"
                                alt="Hero Illustration"
                                className="w-full h-auto z-10 relative"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;