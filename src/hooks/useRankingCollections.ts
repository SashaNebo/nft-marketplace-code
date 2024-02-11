import { useEffect, useRef, useState } from 'react'
import { getNFTCollectionById, getNFTCollectionsVolume } from '../api/apiRarible'
import { ResultType, RankingDataType, AddressesVolume, SettingsType } from '../types/rankingTypes'

const useRankingCollections = (
  settings: SettingsType,
  trackedRef: { current: HTMLDivElement | null }
) => {
  const [addressesVolume, setAddressesVolume] = useState<AddressesVolume>({})
  const [creators, setCreators] = useState<RankingDataType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const observer = useRef()
  const { period, quantityData, delay } = settings

  useEffect(() => {
    setLoading(() => true)
    if (creators.length) setCreators(() => [])
    const fetchAddressesVolume = async () => {
      const volume: AddressesVolume = await getNFTCollectionsVolume(quantityData, period)
      setAddressesVolume(() => volume)
      updateCreators(volume, setCreators, setLoading)
    }

    const t = setTimeout(() => fetchAddressesVolume(), delay)
    return () => clearTimeout(t)
  }, [period])

  useEffect(() => {
    const continuation = addressesVolume.continuation ? addressesVolume.continuation : ''
    const fetchAddressesVolume = async (continuation: string) => {
      const volume: AddressesVolume = await getNFTCollectionsVolume(
        quantityData,
        period,
        continuation
      )
      setAddressesVolume(() => volume)
    }

    fetchAddressesVolume(continuation)
  }, [creators])

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && !loading) {
          updateCreators(addressesVolume, setCreators, setLoading)
          setLoading(true)
          observer.unobserve(entry.target)
        }
      },
      { scrollMargin: '500px' }
    )

    observer.current.observe(trackedRef.current)

    return () => {
      if (trackedRef.current) {
        return observer.current.unobserve(trackedRef.current)
      }
    }
  }, [addressesVolume])

  let arr: RankingDataType[] | ResultType[] = []
  if (creators.length) arr = creators
  if (!creators.length && addressesVolume.result) arr = addressesVolume.result

  return [arr, loading]
}

function updateCreators({ result }: AddressesVolume, setCreators, setLoading = null) {
  if (!result) return

  const creatorsList: RankingDataType[] = []
  result.forEach((resultObj: ResultType, i) => {
    const creatorsListObj: RankingDataType = {
      id: resultObj.id,
      name: '',
      logo: '',
      itemsBought: resultObj?.itemsBought?.toFixed(2) ?? '',
      pricePercent: resultObj?.floorPrice?.changePercent?.toFixed(2) ?? '',
      priceValue: resultObj?.floorPrice?.changePercent?.toFixed(2) ?? '',
      volume: resultObj?.volumeNative?.value?.toFixed(2) ?? '',
    }

    getNFTCollectionById(resultObj.id)
      .then(({ meta }) => {
        creatorsListObj.name = meta?.name ?? ''
        creatorsListObj.logo = meta?.content[0]?.url ?? ''
      })
      .finally(() => {
        creatorsList[i] = creatorsListObj
      })
  })

  setTimeout(() => {
    setCreators((prevCreators: RankingDataType[]) => [...prevCreators, ...creatorsList])
    setLoading && setLoading(() => false)
  }, 1000)
}

export default useRankingCollections
