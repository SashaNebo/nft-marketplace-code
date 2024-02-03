import { FC } from 'react'
import cn from './Rankings.module.scss'

const RankingsList: FC = () => {
  const names = [
    'Jaydon Ekstrom Bothman',
    'Ruben Carder',
    'Alfredo Septimus',
    'Davis Franci',
    'Livia Rosser',
    'Jaydon Ekstrom Bothman',
    'Ruben Carder',
    'Alfredo Septimus',
    'Davis Franci',
    'Livia Rosser',
    'Jaydon Ekstrom Bothman',
    'Ruben Carder',
    'Alfredo Septimus',
    'Davis Franci',
    'Livia Rosser',
  ]

  return (
    <div className={cn['rankings-list']}>
      <div className={[cn['rankings-list__top'], 'text-space-body'].join(' ')}>
        <div className={cn['artist']}>
          <span className='text-space-body'>#</span>
          <span className='text-space-body'>Artist</span>
        </div>
        <div className={cn['stats']}>
          <span className={cn['rankings-list__top-text']}>Change</span>
          <span className={cn['rankings-list__top-text']}>NFTs Sold</span>
          <span className={cn['rankings-list__top-text']}>Volume</span>
        </div>
      </div>

      {names.map((e, i) => (
        <div key={i} className={[cn['rankings-list__item']].join(' ')}>
          <div className={cn['artist']}>
            <span className={[cn['artist__number'], 'text-space-body'].join(' ')}>{i + 1}</span>
            <div className={[cn['artist__wrapper'], 'animation-scale'].join(' ')}>
              <div className={cn['artist__avatar']}>
                <img
                  src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-7@2x.png'
                  alt='Artist avatar'
                />
              </div>
              <div className='text-work-h5'>{e}</div>
            </div>
          </div>
          <div className={cn['stats']}>
            <div className={[cn['stats__change'], 'text-space-body'].join(' ')}>+1.41%</div>
            <div className='stats__sold text-space-body'>602</div>
            <div className='stats__volume text-space-body'>12.4 ETH</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RankingsList
