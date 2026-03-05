import vector1 from '../assets/vector1.png';

const Banner = ({ 
    inProgressCount = 0, 
    resolvedCount = 0,
}) => {
    return (
        <div className="w-full bg-linear-to-r from-purple-50 to-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                {/* Cards Container */}
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 lg:gap-5">
                    {/* In-Progress */}
                    <div className="group relative flex-1 min-w-70 overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
                            <div 
                                className="absolute inset-0 mix-blend-overlay"
                                style={{
                                    backgroundImage: `url(${vector1})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        </div>
                        
                        <div className="relative p-6 sm:p-8 text-white">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-white opacity-90" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2 opacity-90">
                                In-Progress
                            </h2>
                            
                            <div className="flex items-baseline">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    {inProgressCount}
                                </span>
                                <span className="ml-2 text-lg opacity-75">tickets</span>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Resolved */}
                    <div className="group relative flex-1 min-w-70 overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-linear-to-r from-[#54CF68] to-[#00827A]">
                            <div 
                                className="absolute inset-0 mix-blend-overlay"
                                style={{
                                    backgroundImage: `url(${vector1})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        </div>
                        
                        <div className="relative p-6 sm:p-8 text-white">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-white opacity-90" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2 opacity-90">
                                Resolved
                            </h2>
                            
                            <div className="flex items-baseline">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    {resolvedCount}
                                </span>
                                <span className="ml-2 text-lg opacity-75">tickets</span>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;