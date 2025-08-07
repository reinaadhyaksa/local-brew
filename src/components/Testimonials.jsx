const Testimonials = ({ darkMode }) => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Coffee Enthusiast",
            comment: "The Ethiopian Yirgacheffe is absolutely amazing! The floral notes are so pronounced and the finish is so clean. Best coffee I've had in years.",
            avatar: "https://randomuser.me/api/portraits/women/43.jpg"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Barista",
            comment: "As a professional barista, I can attest to the quality of these beans. The roast profile is perfect and brings out the best characteristics of each origin.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            role: "Food Blogger",
            comment: "I've tried many specialty coffees, but Koffee Shop's selection stands out. The Guatemalan Antigua is my personal favorite with its chocolatey depth.",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ]

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        What Our Customers Say
                    </h2>
                    <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Don't just take our word for it. Here's what our customers have to say about our premium coffee selection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`p-6 rounded-xl ${darkMode ? 'bg-secondary-dark' : 'bg-white'} shadow-md`}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {testimonial.name}
                                    </h4>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials