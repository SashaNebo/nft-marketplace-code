import { CREATOR_INFO, CREATOR_INFO_STRING, PERIOD, PERIOD_ACTIONS } from '../types/creatorsTypes'

export const getCreatorsInfo = (obj: CREATOR_INFO): CREATOR_INFO_STRING => {
  const ph = placeholder

  const getId = () => obj.id ?? ph.id
  const getName = () => obj.name ?? ph.name
  const getLogo = () => obj.logo ?? ph.logo
  const getBanner = () => obj.banner ?? ph.banner
  const getDescription = () => obj.description ?? ph.description
  const getLinks = () => ({ discord: obj.links.discord ?? '', twitter: obj.links.discord ?? '' })
  const getOwners = () => obj.owners?.toFixed(2) ?? ph.owners
  const getSold = () => obj.sold?.toFixed(2) ?? ph.sold
  const getPriceValue = () => obj.priceValue?.toFixed(2) ?? ph.priceValue
  const getPricePercent = () => obj.pricePercent?.toFixed(2) ?? ph.pricePercent
  const getVolume = () => obj.volume?.toFixed(2) ?? ph.volume

  const listInfo: CREATOR_INFO_STRING = {
    id: getId(),
    name: getName(),
    logo: getLogo(),
    banner: getBanner(),
    description: getDescription(),
    links: getLinks(),
    owners: getOwners(),
    sold: getSold(),
    priceValue: getPriceValue(),
    pricePercent: getPricePercent(),
    volume: getVolume(),
  }

  return listInfo
}

const placeholder: CREATOR_INFO_STRING = {
  id: '',
  name: 'Creator',
  logo: '../../../src/assets/images/avatar/robot.svg',
  banner: '',
  description: '',
  links: { twitter: '', discord: '' },
  owners: '-',
  sold: '-',
  priceValue: '-',
  pricePercent: '-',
  volume: '-',
}

export const percentState = (percentValue: string): string[] => {
  let PI = 'default'
  if (+percentValue > 0) PI = 'plus'
  if (+percentValue < 0) PI = 'minus'

  type VARIANTS = {
    plus: string[]
    minus: string[]
    default: string[]
    [key: string]: string[]
  }

  const percentVariants: VARIANTS = {
    plus: [`+${percentValue}%`, 'green'],
    minus: [`${percentValue}%`, 'red'],
    default: [`${percentValue}`, ''],
  }

  return percentVariants[PI]
}

export const periodList: PERIOD_LIST[] = [
  {
    id: PERIOD.today,
    text: 'Today',
  },
  {
    id: PERIOD.week,
    text: 'This Week',
  },
  {
    id: PERIOD.mounth,
    text: 'This Month',
  },
  {
    id: PERIOD.all,
    text: 'All Time',
  },
]

type PERIOD_LIST = {
  id: PERIOD_ACTIONS
  text: string
}
