import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 lg:px-4 pt-12 lg:pt-16 lg:pb-4">
                {/* 5 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                    
                    {/* Column 1 - Company Info */}
                    <div className="lg:col-span-1 pr-4">
                        <h3 className="text-lg font-semibold mb-4 text-white/90">CS — Ticket System</h3>
                        <p className="text-sm text-white/60 leading-relaxed text-justify">
                            We believe every customer deserves a seamless support experience. CS — Ticket System empowers businesses to deliver just that—organizing inquiries, tracking progress, and turning customer issues into resolved solutions, one ticket at a time.
                        </p>
                    </div>

                    {/* Column 2 - Company Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Contact Sales
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Services Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Products & Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Customer Stories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Download Apps
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Information Links */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">Information</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5 - Social Links & Contact */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">Social Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                                <i class="fa-brands fa-x-twitter"></i>
                                    CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                                    <i class="fa-brands fa-linkedin"></i>
                                    CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                                    <i class="fa-brands fa-facebook"></i>
                                    CS — Ticket System
                                </a>
                            </li>
                            <li className="pt-3 mt-2 border-t border-white/10">
                                <a href="mailto:support@cst.com" className="text-sm text-white/80 hover:text-white transition-colors duration-200 font-medium flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    support@cst.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="border-t border-white/10 mt-5 lg:mt-8 pt-4">
                    {/* Copyright - Centered */}
                    <p className="text-sm text-white/60 text-center">
                        © 2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;