import { FC } from 'react'
import cn from './Creator.module.scss'

type CreatorProps = {
  title: string
  nickName: string
  avatarUrl: string
}

const Creator: FC<CreatorProps> = ({ title, nickName, avatarUrl }) => {
  return (
    <div className={cn['creator']}>
      <h5 className='text-work-h5'>{title}</h5>
      <div className={cn['creator__author']}>
        <div className={cn['creator__author-avatar']}>
          <img src={avatarUrl} alt='' />
        </div>
        <p className='text-space-body'>{nickName}</p>
      </div>
    </div>
  )
}

export default Creator
