import './App.css'

import { Navbar } from './components'

import {
  About,
  Chef,
  Contact,
  Footer,
  Gallery,
  Hero,
  Intro,
  Menu,
  Laurels,
} from './containers'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
