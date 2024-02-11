import { FC } from 'react'

import cn from './TopCreators.module.scss'
import TopCreatorsList from './TopCreatorsList'
import TopCreatorsHeader from './TopCreatorsHeader'

const TopCreators: FC = () => {
  return (
    <section className={cn['top-creators']}>
      <TopCreatorsHeader />

      <div className={cn['creators']}>
        <TopCreatorsList />
      </div>
    </section>
  )
}

export default TopCreators
