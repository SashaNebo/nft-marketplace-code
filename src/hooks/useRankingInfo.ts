import { RankingDataType, ResultType } from '../types/rankingTypes'

type Placeholder = {
  [name: string]: string
  logo: string
  volume: string
  priceValue: string
  pricePercent: string
  itemsBought: string
}
const placeholder: Placeholder = {
  name: 'Creator',
  logo: '../../../src/assets/images/avatar/robot.svg',
  volume: '0.00',
  priceValue: '0.00',
  pricePercent: '0.00',
  itemsBought: '0.00',
}

const useRankingInfo = (rankingData: RankingDataType[] | ResultType[]) => {
  return (key: string, index: number): RankingDataType[string] => {
    if (rankingData[index] && key in rankingData[index]) {
      return takeRankingInfo(rankingData as RankingDataType[], key, index)
    }

    return placeholder[key]
  }
}

function takeRankingInfo(array: RankingDataType[], key: string, i: number): string {
  const obj = array[i]
  const ph = placeholder[key]

  const getName = () => obj?.name ?? ph
  const getLogo = () => obj?.logo ?? ph
  const getVolume = () => obj?.volume ?? ph
  const getPriceValue = () => obj?.priceValue ?? ph
  const getPricePercent = () => obj?.pricePercent ?? ph
  const getItemsBought = () => obj?.itemsBought ?? ph

  const list: () => string = {
    name: getName,
    logo: getLogo,
    volume: getVolume,
    priceValue: getPriceValue,
    pricePercent: getPricePercent,
    itemsBought: getItemsBought,
  }[key]

  return list() || ph
}

export default useRankingInfo