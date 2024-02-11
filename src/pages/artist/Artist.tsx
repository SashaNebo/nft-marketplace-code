import { FC, useEffect } from 'react'
import cn from './Artist.module.scss'
import Button from '../../components/UI/buttons/Button'
import { spritePath } from '../../helpers/pathIcons'
import ArtistTabs from './ArtistTabs'
import Nfts from '../../components/nfts/Nfts'

const Artist: FC = () => {
  const data = [...new Array(9)].map((_, i) => i + 1)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <main className={cn['artist']}>
      <div className={cn['artist__banner']}>
        <img
          className={cn['artist__banner-img']}
          src='https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=s2500'
          alt='banner Not Found'
        />
        <div className='container'>
          <div className={cn['artist__logo']}>
            <img
              src='https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={cn['artist__info']}>
          <div className={cn['artist__info-top']}>
            <h2 className='artist__nickname text-work-h2'>Azuki</h2>
            <div className={cn['artist__info-buttons']}>
              <Button
                className={cn['artist__info-button']}
                text='0xc0E3...B79C'
                type='primary'
                size='lg'
                icon='copy'
              />
              <Button
                className={cn['artist__info-button']}
                text='Follow'
                type='secondary'
                size='lg'
                icon='plus'
              />
            </div>
          </div>

          <div className={cn['stats']}>
            <div>
              <h4 className='stats__value text-space-h4'>250k+</h4>
              <p className={cn['stats__text']}>Volume</p>
            </div>
            <div>
              <h4 className='stats__value text-space-h4'>50+</h4>
              <p className={cn['stats__text']}>NFTs Sold</p>
            </div>
            <div>
              <h4 className='stats__value text-space-h4'>3000+</h4>
              <p className={cn['stats__text']}>Followers</p>
            </div>
          </div>

          <div className={cn['additional']}>
            <h5 className='text-space-h5'>Bio</h5>
            <p className='text-work-h5'>The internet's friendliest designer kid.</p>
          </div>

          <div className={cn['additional']}>
            <h5 className='text-space-h5'>Links</h5>
            <div className={cn['additional__icons']}>
              <svg className={cn['additional__icon']}>
                <use href={`${spritePath.buttonIcons}#globe`}></use>
              </svg>
              <svg className={cn['additional__icon']}>
                <use href={`${spritePath.buttonIcons}#discordLogo`}></use>
              </svg>
              <svg className={cn['additional__icon']}>
                <use href={`${spritePath.buttonIcons}#youtubeLogo`}></use>
              </svg>
              <svg className={cn['additional__icon-twitter']}>
                <use href={`${spritePath.buttonIcons}#twitterLogo`}></use>
              </svg>
              <svg className={cn['additional__icon']}>
                <use href={`${spritePath.buttonIcons}#instagramLogo`}></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={cn['devider']}>
        <svg className={cn['devider__icon']}>
          <use href={`${spritePath.buttonIcons}#line`}></use>
        </svg>
      </div>

      <div className='container'>
        <ArtistTabs />
      </div>

      <div className={cn['artist__nfts']}>
        <Nfts nfts={data} />
      </div>
    </main>
  )
}

export default Artist
