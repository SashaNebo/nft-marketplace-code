import { useState, useEffect } from 'react'
import { getNFTCollectionsVolume, getNFTCollectionById } from '../api/apiRarible.ts'
import {
  SettingsType,
  ResultType,
  RankingDataType,
  AddressesVolume,
} from '../types/rankingTypes.js'

export const useRankingFetch2 = (settings: SettingsType) => {
  const [addressesVolume, setAddressesVolume] = useState<AddressesVolume>({})
  const [creators, setCreators] = useState<RankingDataType[]>([])

  const { period, quantityData, delay } = settings

  useEffect(() => {
    const fetchAddressesVolume = async () => {
      const volume: AddressesVolume = await getNFTCollectionsVolume(quantityData, period)
      setAddressesVolume(() => volume)
      updateCreators(volume, setCreators)
    }
    const t = setTimeout(() => fetchAddressesVolume(), delay)
    return () => clearTimeout(t)
  }, [])

  if (creators.length) return creators
  if (!creators.length && addressesVolume.result) return addressesVolume.result
  return []
}

function updateCreators({ result }: AddressesVolume, setCreators) {
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
    setCreators(() => creatorsList)
  }, 1000)
}
