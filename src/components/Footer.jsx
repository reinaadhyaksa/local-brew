const Footer = ({ darkMode }) => {
    return (
        <footer id="contact" className={`py-12 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Koffee Shop</h3>
                        <p className="mb-4">
                            Premium coffee experience with beans sourced from the best regions around the world.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
                            <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <address className="not-italic">
                            <p>123 Coffee Street</p>
                            <p>Brewville, CA 90210</p>
                            <p className="mt-2">info@koffeeshop.com</p>
                            <p>(123) 456-7890</p>
                        </address>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Opening Hours</h4>
                        <p>Monday - Friday: 7am - 7pm</p>
                        <p>Saturday - Sunday: 8am - 6pm</p>
                    </div>
                </div>

                <div className={`pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
                    <p>&copy; {new Date().getFullYear()} Koffee Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer