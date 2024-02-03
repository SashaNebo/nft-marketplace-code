import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import AppWrapper from '../../layout/AppWrapper'
import Home from '../../pages/home/Home'
import Rankings from '../../pages/rankings/Rankings'
import Artist from '../../pages/artist/Artist'
import NotFound from '../../pages/notFound/NotFound'
import Loader from '../loader/Loader'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AppWrapper />}>
        <Route path='' element={<Home />} />
        <Route path='rankings' element={<Rankings />} />
        <Route path='artist/:id' element={<Artist />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='/loader' element={<Loader />} />
    </Routes>
  )
}

export default AppRouter
