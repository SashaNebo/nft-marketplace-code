import { FC } from 'react'

import { SETTINGS, PERIOD } from '../../types/creatorsTypes.ts'
import MyLoader from './TopCreatorsLoader.tsx'
import TopCreatorsListItem from './TopCreatorsListItem.tsx'
import useCreators from '../../hooks/useCreators.ts'

const TopCreatorsList: FC = () => {
  const settings: SETTINGS = {
    period: PERIOD.today,
    quantity: 12,
    delay: 1000,
  }

  const [creators, isLoading] = useCreators(settings)

  return (
    <>
      {creators.map((creatorsItem, i) => (
        <TopCreatorsListItem key={i} creatorsItem={creatorsItem} number={++i} />
      ))}

      {isLoading &&
        [...new Array(settings.quantity)].map((_, i) => (
          <div key={i}>
            <MyLoader />
          </div>
        ))}
    </>
  )
}

export default TopCreatorsList
