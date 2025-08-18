import './App.css'
import Navigation from './components/navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import GoogleMap from './components/GoogleMap'
import ContactSection from './components/ContactSection'
import Footer from './components/footer'

function App() {

  return (
<main className="max-w-screen justify-center align-center overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
       <GoogleMap />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
