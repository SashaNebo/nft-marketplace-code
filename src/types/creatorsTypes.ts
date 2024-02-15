type COLLECTIONS_VOLUME = {
  continuation: string
  result: COLLECTIONS_VOLUME_RESULT[]
}

type COLLECTIONS_VOLUME_RESULT = {
  id: string
  itemsBought: number | null
  ownersCount: number | null
  volumeNative: { value: number | null }

  floorPrice: {
    changePercent: number | null
    value: number | null
  }
}

type CREATOR_INFO = {
  id: string
  name: string | null
  logo: string | null
  banner: string | null
  description: string | null
  links: { twitter: string | null; discord: string | null }
  owners: number | null
  sold: number | null
  pricePercent: number | null
  priceValue: number | null
  volume: number | null
}

type CREATOR_INFO_STRING = {
  id: string
  name: string
  logo: string
  banner: string
  description: string
  links: { twitter: string; discord: string }
  owners: string
  sold: string
  priceValue: string
  pricePercent: string
  volume: string
}

type SETTINGS = {
  quantity: number
  delay: number
  period: PERIOD_ACTIONS
}

type PERIOD_ACTIONS = PERIOD.today | PERIOD.week | PERIOD.mounth | PERIOD.all

export const enum PERIOD {
  today = 'D1',
  week = 'D7',
  mounth = 'D30',
  all = 'ALL',
}

type CONTRACT_META_DATA = {
  openSeaMetadata: OPEN_SEA_META_DATA
}

type OPEN_SEA_META_DATA = {
  bannerImageUrl: string
  collectionName: string
  description: string
  imageUrl: string
  discordUrl: string
  twitterUsername: string
}

export type { COLLECTIONS_VOLUME, COLLECTIONS_VOLUME_RESULT }
export type { CREATOR_INFO, CREATOR_INFO_STRING, SETTINGS, PERIOD_ACTIONS }
export type { CONTRACT_META_DATA, OPEN_SEA_META_DATA }
