import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import About from './components/about'
import Testimonial from './components/testimonial'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Features />
        <About />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App
