import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-primary-dark' : 'bg-primary-light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero darkMode={darkMode} />
        <MenuSection darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App