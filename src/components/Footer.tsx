import { Link } from "react-router-dom"

import { FaFacebook, FaInstagram, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-[#18191E] text-white pt-20 pb-10 font-[Inter,sans-serif]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand & Description */}
                    <div className="md:col-span-4 max-w-sm">
                        <Link to="/" className="flex items-center gap-3 mb-8">
                            <img src="/logo.png" className="h-[36px]" alt="logo" />
                        </Link>
                        <p className="text-[#D6DDEB] text-[15px] leading-[1.6]">
                            Great platform for the job seeker that is passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    {/* Left padding/spacer for desktop */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* About Links */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-lg mb-8 text-white">About</h4>
                        <ul className="space-y-4 text-[#D6DDEB] text-sm font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Companies</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Terms</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Advice</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-lg mb-8 text-white">Resources</h4>
                        <ul className="space-y-4 text-[#D6DDEB] text-sm font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Help Docs</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Guide</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Updates</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-lg mb-6 text-white">Get job notifications</h4>
                        <p className="text-[#D6DDEB] text-sm mb-8 leading-relaxed">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-grow bg-white px-4 py-3 text-slate-900 placeholder:text-slate-300 text-sm outline-none"
                            />

                            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 font-bold text-sm transition-all">
                                Subscribe
                            </button>

                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">2021 @ QuickHire. All rights reserved.</p>

                    <div className="flex gap-4">
                        {[
                            { name: 'Facebook', icon: <FaFacebook /> },
                            { name: 'Instagram', icon: <FaInstagram /> },
                            { name: 'Dribbble', icon: <FaDribbble /> },
                            { name: 'LinkedIn', icon: <FaLinkedin /> },
                            { name: 'Twitter', icon: <FaTwitter /> }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-800/40 flex items-center justify-center text-[#D6DDEB] hover:bg-primary hover:text-white transition-all text-xs font-bold"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

