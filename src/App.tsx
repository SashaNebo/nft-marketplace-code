import { FC } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='wrapper'>
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

export default App
