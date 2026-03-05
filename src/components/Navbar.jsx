import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo/Title */}
                    <div className="shrink-0">
                        <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
                            CS<span className="text-gray-400"> -- </span>Ticket System
                        </Link>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
                            <Link to="/" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Home
                            </Link>
                            <Link to="/faq" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Faq
                            </Link>
                            <Link to="/changelog" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Changelog
                            </Link>
                            <Link to="/blog" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Blog
                            </Link>
                            <Link to="/download" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Download
                            </Link>
                            <Link to="/contact" className="px-3 py-2 text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                                Contact
                            </Link>
                        </div>

                        {/* New Ticket Button */}
                        <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base text-white font-medium rounded-lg 
                            bg-linear-to-br from-[#632EE3] to-[#9F62F2] 
                            hover:from-[#723fe9] hover:to-[#a873f3] 
                            transform cursor-pointer hover:scale-105 active:scale-95 
                            transition-all duration-300 
                            shadow-md hover:shadow-lg
                            focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:ring-offset-2">
                            <i className="fa-solid fa-plus text-sm sm:text-base"></i>
                            <span>New Ticket</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition-all duration-200">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="md:hidden hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                    <Link to="/" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Home
                    </Link>
                    <Link to="/faq" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Faq
                    </Link>
                    <Link to="/changelog" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Changelog
                    </Link>
                    <Link to="/blog" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Blog
                    </Link>
                    <Link to="/download" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Download
                    </Link>
                    <Link to="/contact" className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all duration-200">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;