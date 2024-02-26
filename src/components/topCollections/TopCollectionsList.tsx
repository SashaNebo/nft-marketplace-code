import { FC } from 'react'

import cn from './TopCollections.module.scss'
import TopCollectionsLoader from './TopCollectionsLoader.tsx'
import useTopCollections from '../../hooks/useTopCollections.ts'
import { SETTINGS_TC } from '../../types/topCollectionsTypes.ts'
import { PERIOD } from '../../types/raribleTypes.ts'
import ErrorMessage from '../error/ErrorMessage.tsx'
import TopCollectionsListItem from './TopCollectionsListItem.tsx'

const TopCollectionsList: FC = () => {
  const settingsTC: SETTINGS_TC = {
    period: PERIOD.mounth,
    limit: 12,
  }

  const [topCollections, isLoading, error] = useTopCollections(settingsTC)

  return (
    <>
      <div className={cn['collections']}>
        {!isLoading &&
          topCollections.map((collection, i) => (
            <TopCollectionsListItem collection={collection} number={++i} key={collection.address} />
          ))}

        {isLoading &&
          [...new Array(settingsTC.limit)].map((_, i) => (
            <div key={i}>
              <TopCollectionsLoader />
            </div>
          ))}
      </div>

      {error && <ErrorMessage errorMessage={error} />}
    </>
  )
}

export default TopCollectionsList
