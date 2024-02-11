import { FC } from 'react'
import { Link } from 'react-router-dom'

import cn from './TopCreators.module.scss'
import Button from '../UI/buttons/Button'

const TopCreatorsHeader: FC = () => {
  return (
    <div className={cn['top-creators__header']}>
      <div className={cn['top-creators__header-wrapper']}>
        <h3 className='text-work-h3'>Top creators</h3>
        <h5 className={cn['top-creators__header-subtitle']}>
          Checkout Top Rated Creators on the NFT Marketplace
        </h5>
      </div>
      <Link to={'/rankings'}>
        <Button
          className={cn['top-creators__header-button']}
          type='secondary'
          size='lg'
          icon='rocketLaunch'
          text='View Rankings'
        />
      </Link>
    </div>
  )
}

export default TopCreatorsHeader
