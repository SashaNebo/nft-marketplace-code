import { FC } from 'react'
import cn from './Nfts.module.scss'
import NFtsListCard from './NFtsListCard'

type NFTsListProps = {
  nfts: number[]
}

const NftsList: FC<NFTsListProps> = ({ nfts }) => {
  return (
    <div className={cn['nfts-list']}>
      {nfts.map(nft => (
        <NFtsListCard key={nft} />
      ))}
    </div>
  )
}

export default NftsList
