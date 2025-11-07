import Navigation from './components/Navigations'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
// Import other components...

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <Navigation />
      <Hero />
      <Features />
      {/* <Stats /> */}
      <Pricing/>
      <Testimonials />
      <Footer />
      {/* Add other sections */}
    </main>
  )
}