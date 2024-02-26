import { GENERAL_NULL } from './general'
import { PERIOD_CASES } from './raribleTypes'

type SETTINGS_TC = {
  period: PERIOD_CASES
  limit: number
}

type TOP_COLLECTIONS = Pick<GENERAL_NULL, 'address' | 'collectionName' | 'logoUrl' | 'volumeETH'>

export type { SETTINGS_TC, TOP_COLLECTIONS }
