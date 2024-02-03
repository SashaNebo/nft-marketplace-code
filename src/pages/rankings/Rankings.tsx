import { FC, useState } from 'react'
import cn from './Rankings.module.scss'
import RankingsList from './RankingsList'
import clsx from 'clsx'

const Rankings: FC = () => {
  const [time, setTime] = useState<string>('Today')
  const data = ['Today', 'This Week', 'This Month', 'All Time']

  return (
    <main className={cn['rankings']}>
      <div className='container'>
        <h2 className='text-work-h2'>Top Creators</h2>
        <h5 className={cn['rankings__subtitle']}>
          Check out top ranking NFT artists on the NFT Marketplace.
        </h5>

        <div className={cn['tabs']}>
          {data.map(e => (
            <div
              onClick={() => setTime(e)}
              key={e}
              className={clsx(cn['tabs-time'], time === e && cn['active'])}>
              <p className='text-work-h5'>{e}</p>
            </div>
          ))}
        </div>

        <RankingsList />
      </div>
    </main>
  )
}

export default Rankings
