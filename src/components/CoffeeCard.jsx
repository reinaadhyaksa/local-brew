const CoffeeCard = ({ coffee, darkMode }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-secondary-dark' : 'bg-white'}`}>
            <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {coffee.name}
                    </h3>
                    <span className="text-accent font-bold">${coffee.price}</span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {coffee.description}
                </p>
            </div>
        </div>
    )
}

export default CoffeeCard