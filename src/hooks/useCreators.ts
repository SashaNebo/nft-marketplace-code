import { Dispatch, MutableRefObject, useEffect, useRef, useState } from 'react'
import {
  COLLECTIONS_VOLUME,
  COLLECTIONS_VOLUME_RESULT,
  CONTRACT_META_DATA,
  CREATOR_INFO,
  SETTINGS,
} from '../types/creatorsTypes'
import { getNFTCollectionsVolume } from '../api/apiRarible'
import { getContractMetadataBatch } from '../api/apiAlchemy'

type RETURN_TYPE = [CREATOR_INFO[], boolean]
type TRACKED_REF = MutableRefObject<HTMLDivElement | null | undefined>
type CB = Dispatch<React.SetStateAction<COLLECTIONS_VOLUME>>

const useCreators = (settings: SETTINGS, trackedRef?: TRACKED_REF): RETURN_TYPE => {
  const [collectionsVolumeAPI, setCollectionsVolumeAPI] = useState<COLLECTIONS_VOLUME>({
    continuation: '',
    result: [],
  })

  const [creators, setCreators] = useState<CREATOR_INFO[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { continuation } = collectionsVolumeAPI
  const { period, delay } = settings
  const observerRef = useRef<null | IntersectionObserver>(null)

  useEffect(() => {
    setCreators(() => [])
    setIsLoading(() => true)

    const timeout = setTimeout(() => {
      fetchCollectonsVolume(settings, setCollectionsVolumeAPI)
    }, delay)

    return () => clearTimeout(timeout)
  }, [period])

  useEffect(() => {
    if (!continuation) return

    const addressesList: string[] = collectionsVolumeAPI.result.map(({ id }) => id.split(':')[1])
    const fetchContractMetadata = async () => {
      const contractMetaData = await getContractMetadataBatch<CONTRACT_META_DATA>(addressesList)
      const mergeDataAPI = mergingDataAPI(collectionsVolumeAPI.result, contractMetaData)
      setCreators(prevCreators => [...prevCreators, ...mergeDataAPI])
      setIsLoading(() => false)
    }

    fetchContractMetadata()
  }, [collectionsVolumeAPI])

  useEffect(() => {
    if (!trackedRef || !creators.length) return

    const tracked = trackedRef.current

    observerRef.current = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        setIsLoading(() => true)
        fetchCollectonsVolume(settings, setCollectionsVolumeAPI, continuation)
        observer.unobserve(entry.target)
      }
    }, {})

    if (tracked) {
      observerRef.current.observe(tracked)
    }

    return () => {
      if (tracked) {
        return observerRef.current?.unobserve(tracked)
      }
    }
  }, [creators, trackedRef])

  return [creators, isLoading]
}

async function fetchCollectonsVolume(settings: SETTINGS, cb: CB, continuation?: string) {
  const { quantity, period } = settings

  const volumeAPI = await getNFTCollectionsVolume<COLLECTIONS_VOLUME>(
    quantity,
    period,
    continuation
  )

  cb(() => volumeAPI)
}

function mergingDataAPI(AV: COLLECTIONS_VOLUME_RESULT[], AF: CONTRACT_META_DATA[]): CREATOR_INFO[] {
  const data: CREATOR_INFO[] = []

  const placeholder = {
    id: '',
    name: '',
    logo: '',
    banner: '',
    description: '',
    links: { twitter: '', discord: '' },
    owners: 0,
    sold: 0,
    pricePercent: 0,
    priceValue: 0,
    volume: 0,
  }

  AF.forEach(({ openSeaMetadata: meta }, i) => {
    if (!meta) return data.push(placeholder)
    const creatorsInfo: CREATOR_INFO = {
      id: AV[i].id,
      name: meta?.collectionName ?? null,
      logo: meta?.imageUrl ?? null,
      banner: meta?.bannerImageUrl ?? null,
      description: meta?.description ?? null,
      priceValue: AV[i]?.floorPrice?.value ?? null,
      pricePercent: AV[i]?.floorPrice?.changePercent ?? null,
      sold: AV[i]?.itemsBought ?? null,
      volume: AV[i]?.volumeNative.value ?? null,
      owners: AV[i]?.ownersCount ?? null,
      links: {
        discord: meta.discordUrl ?? null,
        twitter: meta?.twitterUsername ?? null,
      },
    }

    data.push(creatorsInfo)
  })

  return data
}

export default useCreators
