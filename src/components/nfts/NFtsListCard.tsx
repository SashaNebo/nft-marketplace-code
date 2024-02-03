import { FC } from 'react'
import cn from './Nfts.module.scss'
import Creator from '../UI/creator/Creator'

const NFtsListCard: FC = () => {
  return (
    <div className={[cn['card'], 'animation-scale'].join(' ')}>
      <div className={cn['card__picture']}>
        <img src='https://lh3.googleusercontent.com/Ab7HDdUjyDxebvF2PYuMhuAaCYM6t5XoFFS3_axBGHjHHWtJn5fHpVwDLCFFhCfulI0t_atk8DXQ4WP4lFfrKl5wZ9zrdIUqPf0=s400' />
      </div>

      <div className={cn['card__info']}>
        <Creator
          title='Distant Galaxy'
          nickName='Azuki'
          avatarUrl='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWJKaXQxYTlKcDM1RDJBWmRpVGRmTG42SkNYUVNibjFMdzIzN3FaV2ZDTWZl'
        />

        <div className={cn['card__info-values']}>
          <div className={cn['card__info-value']}>
            <span className='text-space-caption'>Price</span>
            <p className='text-space-body'>1.63 ETH</p>
          </div>

          <div className={cn['card__info-value']}>
            <span className='text-space-caption'>Highest Bid</span>
            <p className='text-space-body'>0.33 wETH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFtsListCard
