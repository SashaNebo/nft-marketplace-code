import { FC, useState } from 'react'
import cn from './Artist.module.scss'
import clsx from 'clsx'

const ArtistTabs: FC = () => {
  const [tab, setTab] = useState<string>('Created')
  const data = ['Created', 'Owned', 'Collection']

  return (
    <div className={cn['tabs']}>
      {data.map(e => (
        <div
          onClick={() => setTab(e)}
          key={e}
          className={clsx(cn['tabs__item'], tab === e && cn['tabs__item-active'])}>
          <h5 className='text-work-h5'>{e}</h5>
          <div className={cn['tabs__item-col']}>
            <span className='text-space-body'>666</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArtistTabs
