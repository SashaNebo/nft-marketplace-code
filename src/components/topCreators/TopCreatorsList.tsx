import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cn from './TopCreators.module.scss'
import { anFadeInEls } from '../../helpers/animation.js'
import { useRankingFetch2 } from '../../hooks/useRankingFetch.ts'
import { Period, RankingDataType, ResultType, SettingsType } from '../../types/rankingTypes.ts'
import useRankingInfo from '../../hooks/useRankingInfo.ts'
import { getRankingRouterLink } from '../../helpers/utils.ts'

const TopCreatorsList: FC = () => {
  const settings: SettingsType = {
    period: Period.today,
    quantityData: 12,
    delay: 500,
  }

  const rankingData: RankingDataType[] | ResultType[] = useRankingFetch2(settings)
  const rankingInfo: (key: string, index: number) => string = useRankingInfo(rankingData)

  const renderData = rankingData.length
    ? rankingData
    : [...new Array(settings.quantityData)].map((_, i) => i)

  const routerLink = getRankingRouterLink(rankingInfo)

  return (
    <>
      {renderData.map((_, i) => (
        <Link to={routerLink(i)} key={i}>
          <motion.div
            variants={anFadeInEls}
            custom={i + 1}
            className={[cn['creators__card'], 'animation-scale'].join(' ')}>
            <div className={cn['creators__number']}>
              <p className={cn['creators__number-el']}>{i + 1}</p>
            </div>
            <div className={cn['creators__avatar']}>
              <img className={cn['creators__avatar-img']} src={rankingInfo('logo', i)} />
            </div>
            <h5 className={[cn['creators__nickname'], 'text-work-h5'].join(' ')}>
              {rankingInfo('name', i)}
            </h5>
            <div className={cn['creators__total-sales']}>
              <p className='text-work-body'>Total Sales:</p>
              <p className='text-space-body'>{rankingInfo('volume', i)} ETH</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  )
}

export default TopCreatorsList
