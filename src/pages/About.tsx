const About = () => {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">About This Project</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                    This project demonstrates the core concepts of React Router, the most popular
                    standard library for routing in React applications. It allows you to build
                    single-page applications with navigation without the page refreshing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-indigo-400 font-bold mb-2">Declarative Routing</h3>
                        <p className="text-sm">Define your routes as components and keep your UI in sync with the URL.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-indigo-400 font-bold mb-2">Nested Layouts</h3>
                        <p className="text-sm">Easily nest views inside other views, sharing layouts and logic.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-indigo-400 font-bold mb-2">Dynamic Parameters</h3>
                        <p className="text-sm">Capture values from the URL to drive your data-fetching and UI.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-indigo-400 font-bold mb-2">Data Loading</h3>
                        <p className="text-sm">Fetch data for your routes before they even render.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
