const Contact = () => {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-slate-400">Have questions? We'd love to hear from you.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                    <textarea
                        rows={4}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        placeholder="Tell us about yourself..."
                    ></textarea>
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
