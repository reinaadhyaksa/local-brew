import CoffeeCard from './CoffeeCard'

const MenuSection = ({ darkMode }) => {
    const coffeeItems = [
        {
            id: 1,
            name: "Ethiopian Yirgacheffe",
            description: "Floral and citrus notes with a bright acidity and clean finish.",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Colombian Supremo",
            description: "Rich and well-balanced with caramel sweetness and nutty undertones.",
            price: 6.49,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Sumatra Mandheling",
            description: "Full-bodied with earthy flavors and low acidity, perfect for dark roast lovers.",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            name: "Guatemalan Antigua",
            description: "Chocolatey and spicy with a velvety body and cocoa finish.",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        }
    ]

    return (
        <section id="menu" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Premium Selection
                    </h2>
                    <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Each coffee is carefully sourced and roasted to perfection to bring you the ultimate coffee experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coffeeItems.map((coffee, index) => (
                        <CoffeeCard
                            key={coffee.id}
                            coffee={coffee}
                            darkMode={darkMode}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuSection