import { useState, useEffect } from 'react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-opacity-90 backdrop-blur-sm' : 'py-4'} ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                        alt="Koffee Shop Logo"
                        className="h-10 w-10 rounded-full mr-3"
                    />
                    <span className="text-xl font-bold">Local Brew</span>
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-accent transition-colors">Home</a>
                    <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
                    <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar