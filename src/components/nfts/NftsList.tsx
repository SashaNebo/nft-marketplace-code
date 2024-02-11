import { FC } from 'react'
import cn from './Nfts.module.scss'
import NFtsListCard from './NFtsListCard'

type NFTsListProps = {
  nfts: number[]
  bg?: 'dark' | 'gray'
}

const NftsList: FC<NFTsListProps> = ({ nfts, bg }) => {
  return (
    <div className={cn['nfts-list']}>
      {nfts.map((_, i) => (
        <NFtsListCard key={i} bg={bg} />
      ))}
    </div>
  )
}

export default NftsList
