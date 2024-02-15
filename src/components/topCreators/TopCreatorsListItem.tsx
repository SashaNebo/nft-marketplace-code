import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCreators.module.scss'
import { CREATOR_INFO } from '../../types/creatorsTypes'
import { getCreatorsInfo } from '../../utils/creatorsUtils'

type ListItemProps = {
  creatorsItem: CREATOR_INFO
  number: number
}

const TopCreatorsListItem: FC<ListItemProps> = ({ creatorsItem, number }) => {
  const { id, name, logo, volume } = getCreatorsInfo(creatorsItem)

  return (
    <Link to={`/artist/${id}`}>
      <div className={[cn['creators__card'], 'animation-scale'].join(' ')}>
        <div className={cn['creators__number']}>
          <p className={cn['creators__number-el']}>{number}</p>
        </div>
        <div className={cn['creators__avatar']}>
          <img className={cn['creators__avatar-img']} src={logo} />
        </div>
        <h5 className={[cn['creators__nickname'], 'text-work-h5'].join(' ')}>{name}</h5>
        <div className={cn['creators__total-sales']}>
          <p className='text-work-body'>Total Sales:</p>
          <p className='text-space-body'>{volume} ETH</p>
        </div>
      </div>
    </Link>
  )
}

export default TopCreatorsListItem
