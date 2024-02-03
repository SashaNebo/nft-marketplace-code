import { FC } from 'react'
import Hero from '../../components/hero/Hero'
import Trending from '../../components/trending/Trending'
import TopCreators from '../../components/topCreators/TopCreators'

const Home: FC = () => {
  return (
    <>
      <div className='container'>
        <Hero />
        <Trending />
        <TopCreators />
      </div>
    </>
  )
}

export default Home
