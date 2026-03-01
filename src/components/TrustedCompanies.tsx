const TrustedCompanies = () => {
    const logos = [
        { name: "Vodafone", src: "/brands/vodafone-2017-logo.png" },
        { name: "Intel", src: "/brands/intel-3.png" },
        { name: "Tesla", src: "/brands/tesla-9 1.png" },
        { name: "AMD", src: "/brands/amd-logo-1.png" },
        { name: "Talkit", src: "/brands/talkit 1.png" }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-[#515B6F] text-[16px] font-epilogue mb-8">Companies we helped grow</h3>
            <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedCompanies;
