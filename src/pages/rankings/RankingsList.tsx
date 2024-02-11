import { FC, useEffect, useRef } from 'react'

import cn from './Rankings.module.scss'
import { RankingDataType, SettingsType } from '../../types/rankingTypes'
import useRankingInfo from '../../hooks/useRankingInfo'
import { PeriodActionList } from '../../types/rankingTypes'
import useRankingCollections from '../../hooks/useRankingCollections'
import LoaderXl from '../../components/loader/LoaderXl'

type RankingsListProps = {
  period: PeriodActionList
}

const RankingsList: FC<RankingsListProps> = ({ period }) => {
  const trackedRef = useRef<HTMLDivElement | null>(null)

  const settings: SettingsType = {
    period,
    quantityData: 20,
    delay: 1000,
  }

  const [rankingData, loading] = useRankingCollections(settings, trackedRef)
  const rankingInfo = useRankingInfo(rankingData as RankingDataType[])

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className={cn['rankings-list']}>
      <div className={[cn['rankings-list__top'], 'text-space-body'].join(' ')}>
        <div className={cn['artist']}>
          <span className='text-space-body'>#</span>
          <span className='text-space-body'>Artist</span>
        </div>
        <div className={cn['stats']}>
          <span className={cn['rankings-list__top-text']}>Change</span>
          <span className={cn['rankings-list__top-text']}>NFTs Sold</span>
          <span className={cn['rankings-list__top-text']}>Volume</span>
        </div>
      </div>

      {rankingData?.map((_, i) => (
        <div key={i} className={[cn['rankings-list__item']].join(' ')}>
          <div className={cn['artist']}>
            <span className={[cn['artist__number'], 'text-space-body'].join(' ')}>{i + 1}</span>
            <div className={[cn['artist__wrapper'], 'animation-scale'].join(' ')}>
              <div className={cn['artist__avatar']}>
                <img src={rankingInfo('logo', i)} />
              </div>
              <div className='text-work-h5'>{rankingInfo('name', i)}</div>
            </div>
          </div>
          <div className={cn['stats']}>
            <div className={[cn['stats__change'], 'text-space-body'].join(' ')}>
              {rankingInfo('pricePercent', i)}
            </div>
            <div className='stats__sold text-space-body'>{rankingInfo('itemsBought', i)}</div>
            <div className='stats__volume text-space-body'>{rankingInfo('volume', i)} ETH</div>
          </div>
        </div>
      ))}
      <div ref={trackedRef}>
        <div>{loading && <LoaderXl />}</div>
      </div>
    </div>
  )
}

export default RankingsList
