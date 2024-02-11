import { FC } from 'react'
import cn from './Discover.module.scss'
import { Link } from 'react-router-dom'
import Button from '../UI/buttons/Button'
import Nfts from '../nfts/Nfts'

const Discover: FC = () => {
  return (
    <section className={cn['discover']}>
      <div className={cn['discover__header']}>
        <div className={cn['discover__header-wrapper']}>
          <h3 className='text-work-h3'>Discover More NFTs</h3>
          <h5 className={[cn['discover__header-subtitle'], 'text-work-h5'].join('')}>
            Explore new trending NFTs
          </h5>
        </div>
        <Link className={cn['discover__header-link']} to={''}>
          <Button type='secondary' text='see all' size='lg' icon='eye' />
        </Link>
      </div>

      <div className={cn['discover-nfts']}>
        <Nfts nfts={[...new Array(3)]} bg='gray' />
      </div>
    </section>
  )
}

export default Discover
