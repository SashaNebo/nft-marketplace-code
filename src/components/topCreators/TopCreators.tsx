import { FC } from 'react'
import cn from './TopCreators.module.scss'
import Button from '../UI/buttons/Button'
import { Link } from 'react-router-dom'

const TopCreators: FC = () => {
  const data = [...new Array(12)].map((_, i) => i + 1)
  return (
    <section className={cn['top-creators']}>
      <div className={cn['top-creators__header']}>
        <div className={cn['top-creators__header-wrapper']}>
          <h3 className='text-work-h3'>Top creators</h3>
          <h5 className={cn['top-creators__header-subtitle']}>
            Checkout Top Rated Creators on the NFT Marketplace
          </h5>
        </div>
        <Button
          className={cn['top-creators__header-button']}
          type='secondary'
          size='lg'
          icon='rocketLaunch'
          text='View Rankings'
        />
      </div>

      <div className={cn['creators']}>
        {data.map(e => (
          <Link to={`artist/${e}`} key={e}>
            <div className={[cn['creators__card'], 'animation-scale'].join(' ')}>
              <div className={cn['creators__number']}>
                <p className={cn['creators__number-el']}>{e}</p>
              </div>
              <div className={cn['creators__avatar']}>
                <img
                  className={cn['creators__avatar-img']}
                  src='https://nft-cdn.alchemy.com/eth-mainnet/0989782b65b48ece91132c5cc4ad4e98'
                  alt='Creator avatar'
                />
              </div>
              <h5 className={[cn['creators__nickname'], 'text-work-h5'].join(' ')}>Keepitreal</h5>
              <div className={cn['creators__total-sales']}>
                <p className='text-work-body'>Total Sales:</p>
                <p className='text-space-body'>34.53 ETH</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TopCreators
