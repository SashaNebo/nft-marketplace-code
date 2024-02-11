import { FC } from 'react'
import { motion } from 'framer-motion'

import cn from './Hero.module.scss'
import Button from '../UI/buttons/Button'
import Creator from '../UI/creator/Creator'
import { anSlideInDown } from '../../helpers/animation'

const Hero: FC = () => {
  return (
    <section className={cn['hero']}>
      <div className={cn['hero__content']}>
        <div className={cn['hero__intro']}>
          <motion.h1
            initial='initial'
            animate='animate'
            variants={anSlideInDown}
            className='hero__title text-work-h1'>
            Discover digital art & Collect NFTs
          </motion.h1>
          <p className={cn['hero__description']}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
            than 20k NFT artists.
          </p>

          <Button
            text='get started'
            type='primary'
            size='lg'
            icon='rocketLaunch'
            className={cn['hero__button']}
          />

          <div className={cn['hero__info']}>
            <div className='hero__info-item'>
              <div className='text-space-h4'>240k+ </div>
              <div className={cn['hero__info-text']}>Total Sale</div>
            </div>
            <div className='hero__info-item'>
              <div className='text-space-h4'>100k+</div>
              <div className={cn['hero__info-text']}>Auctions</div>
            </div>
            <div className='hero__info-item'>
              <div className='text-space-h4'>240k+</div>
              <div className={cn['hero__info-text']}>Artists</div>
            </div>
          </div>
        </div>
        <div className={[cn['highlighted']].join(' ')}>
          <div className={cn['highlighted__img']}>
            <img src='../../../src/assets/images/img-placeholder/animalid.png' alt='' />
          </div>
          <div className={cn['highlighted__wrapper']}>
            <Creator
              title='Space Walking'
              nickName='Animakid'
              avatarUrl='../src/assets/images/avatar/animakid.png'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
