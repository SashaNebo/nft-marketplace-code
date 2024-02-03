import { FC } from 'react'
import NftsList from './NftsList'

type NFTsProps = {
  nfts: number[]
}

const Nfts: FC<NFTsProps> = ({ nfts }) => {
  return (
    <div className='nfts'>
      <div className='container'>
        <NftsList nfts={nfts} />
      </div>
    </div>
  )
}

export default Nfts
