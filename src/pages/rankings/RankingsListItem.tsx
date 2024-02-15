import { FC } from 'react'

import cn from './Rankings.module.scss'
import { CREATOR_INFO } from '../../types/creatorsTypes'
import { getCreatorsInfo, percentState } from '../../utils/creatorsUtils'

type RankingsListItemT = {
  number: number
  rankingItem: CREATOR_INFO
}

const RankingsListItem: FC<RankingsListItemT> = ({ number, rankingItem }) => {
  const { name, logo, pricePercent, sold, volume } = getCreatorsInfo(rankingItem)

  const [percentValue, percentColor] = percentState(pricePercent)

  return (
    <div className={[cn['rankings-list__item']].join(' ')}>
      <div className={cn['artist']}>
        <span className={[cn['artist__number'], 'text-space-body'].join(' ')}>{number}</span>
        <div className={[cn['artist__wrapper'], 'animation-scale'].join(' ')}>
          <div className={cn['artist__avatar']}>
            <img src={logo} />
          </div>
          <div className='text-work-h5'>{name}</div>
        </div>
      </div>
      <div className={cn['stats']}>
        <div className='stats__sold text-space-body'>{sold}</div>
        <div className={[cn[percentColor], 'text-space-body'].join(' ')}>{percentValue}</div>
        <div className='stats__volume text-space-body'>{volume} ETH</div>
      </div>
    </div>
  )
}

export default RankingsListItem
