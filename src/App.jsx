
import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import Product from './Components/Product'
import Services from './Components/Services'

function App() {

  return (
    <>
       <Navbar/>
       <Hero/>
       <Services/>
       <About/>
       <Product/>
       <Blog/>
       <NewsLetter/>
    </>
  )
}

export default App
