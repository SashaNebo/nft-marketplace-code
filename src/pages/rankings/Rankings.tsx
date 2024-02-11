import { FC, useState } from 'react'
import clsx from 'clsx'

import cn from './Rankings.module.scss'
import RankingsList from './RankingsList'
import { Period, PeriodActionList } from '../../types/rankingTypes'

const Rankings: FC = () => {
  const [period, setPeriod] = useState<PeriodActionList>(Period.today)

  type TimeListType = {
    id: PeriodActionList
    text: string
  }

  const timeList: TimeListType[] = [
    {
      id: Period.today,
      text: 'Today',
    },
    {
      id: Period.week,
      text: 'This Week',
    },
    {
      id: Period.mounth,
      text: 'This Month',
    },
    {
      id: Period.all,
      text: 'All Time',
    },
  ]

  return (
    <main className={cn['rankings']}>
      <div className='container'>
        <h2 className='text-work-h2'>Top Creators</h2>
        <h5 className={cn['rankings__subtitle']}>
          Check out top ranking NFT artists on the NFT Marketplace.
        </h5>

        <div className={cn['tabs']}>
          {timeList.map(({ id, text }) => (
            <div
              onClick={() => setPeriod(id)}
              key={id}
              className={clsx(cn['tabs-time'], period === id && cn['active'])}>
              <p className='text-work-h5'>{text}</p>
            </div>
          ))}
        </div>

        <RankingsList period={period} />
      </div>
    </main>
  )
}

export default Rankings
