export type SettingsType = {
  period: PeriodActionList
  quantityData: number
  delay: number
}

export const enum Period {
  today = 'D1',
  week = 'D7',
  mounth = 'D30',
  all = 'ALL',
}

export type PeriodActionList = Period.today | Period.week | Period.mounth | Period.all

export type AddressesVolume = Partial<{
  continuation: string
  result: ResultType[]
}>

export type ResultType = {
  id: string
  volumeNative: { value: number }
  itemsBought: number

  floorPrice: {
    changePercent: number
    value: number
  }
}

export type RankingDataType = {
  [address: string]: string
  logo: string
  name: string
  itemsBought: string
  pricePercent: string
  priceValue: string
  volume: string
}

export type NftCollectionMetaType = {
  name: string
  content: { url: string }[]
}
