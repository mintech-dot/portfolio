import Navbar from './components/Nabvar'
import Hero from './components/Hero'
import Posts from './components/Posts'
import Featured from './components/Featured'
import Footer from './components/Footer'
import './index.css'
function App() {
  return (
    <div className="font-heebo">
      <Navbar />
      <Hero />
      <Posts />
      <Featured />
      <Footer />
    </div>
  )
}

export default App