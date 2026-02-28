import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group shrink-0">
                        <img src="/logo.png" className="w-full h-[36px]" alt="logo" />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-10 ml-12">
                        <NavLink
                            to="/jobs"
                            className={({ isActive }) =>
                                `text-[15px] font-semibold transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-500'}`
                            }
                        >
                            Find Jobs
                        </NavLink>
                        <NavLink
                            to="/companies"
                            className={({ isActive }) =>
                                `text-[15px] font-semibold transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-500'}`
                            }
                        >
                            Browse Companies
                        </NavLink>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6 mr-2">
                            <Link to="/login" className="text-[15px] font-bold text-primary hover:text-primary-hover transition-colors">
                                Login
                            </Link>
                            <div className="w-[1px] h-8 bg-slate-200"></div>
                            <Link
                                to="/signup"
                                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 text-[15px] font-bold shadow-xl shadow-primary/20 transition-all active:scale-95"
                            >
                                Sign Up
                            </Link>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-12 h-12 rounded-full border border-slate-200 flex flex-col items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors"
                            >
                                <span className="w-5 h-[2px] bg-slate-800 rounded-full"></span>
                                <span className="w-5 h-[2px] bg-slate-800 rounded-full"></span>
                                <span className="w-4 h-[2px] bg-slate-800 rounded-full mr-1"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden py-6 border-t border-slate-100 bg-white animate-in slide-in-from-top duration-300">
                        <div className="flex flex-col gap-4">
                            <NavLink to="/jobs" className="text-sm font-semibold text-slate-600 px-4 py-2 hover:bg-slate-50 rounded-lg">Find Jobs</NavLink>
                            <NavLink to="/companies" className="text-sm font-semibold text-slate-600 px-4 py-2 hover:bg-slate-50 rounded-lg">Browse Companies</NavLink>
                            <hr className="border-slate-100 mx-4" />
                            <Link to="/login" className="text-sm font-bold text-primary px-4 py-2">Login</Link>
                            <Link to="/signup" className="mx-4 bg-primary text-white text-center py-3 rounded-lg font-bold shadow-lg shadow-primary/20">Sign Up</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar

