import { FC } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Trending from './components/trending/Trending'
import TopCreators from './components/topCreators/TopCreators'

const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='wrapper'>
        <Hero />
        <Trending />
        <TopCreators />
      </div>
      <Footer />
    </div>
  )
}

export default App
