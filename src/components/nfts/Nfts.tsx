import { FC } from 'react'
import NftsList from './NftsList'

type NFTsProps = {
  nfts: number[]
  bg?: 'dark' | 'gray'
}

const Nfts: FC<NFTsProps> = ({ nfts, bg }) => {
  return (
    <div className='nfts'>
      <div className='container'>
        <NftsList nfts={nfts} bg={bg} />
      </div>
    </div>
  )
}

export default Nfts
