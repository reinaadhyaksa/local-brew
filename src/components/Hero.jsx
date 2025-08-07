const Hero = ({ darkMode }) => {
    return (
        <section id="home" className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Premium Coffee <span className="text-accent">Experience</span>
                        </h1>
                        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Discover our carefully crafted coffee selections from the best beans around the world.
                            Perfectly roasted for your ultimate coffee experience.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
                                Explore Menu
                            </button>
                            <button className={`border ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-700'} px-6 py-3 rounded-full hover:bg-opacity-10 hover:bg-gray-300 transition-colors`}>
                                Pre-order Now
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <img
                            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                            alt="Premium Coffee"
                            className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero