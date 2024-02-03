import { FC } from 'react'
import cn from './Hero.module.scss'
import Button from '../UI/buttons/Button'
import Creator from '../UI/creator/Creator'

const Hero: FC = () => {
  return (
    <section className={cn['hero']}>
      <div className={cn['hero__content']}>
        <div className={cn['hero__intro']}>
          <h1 className='hero__title text-work-h1'>Discover digital art & Collect NFTs</h1>
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
        <div className={[cn['highlighted'], 'animation-scale'].join(' ')}>
          <div className={cn['highlighted__img']}>
            <img
              src='https://lh3.googleusercontent.com/OorUjpgFH431fea7KNFDwluhvVYICpJlryRwUNsuWs4GIfbNSlGMMESrxFPjxuSVCPonO4j3Y4bIf6BaBzyr-_4xJQKuTFUmQMk=s400'
              alt=''
            />
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
