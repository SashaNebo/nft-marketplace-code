import ky from 'ky'
import { PERIOD_CASES } from '../types/raribleTypes'

const KEY = 'ba86ef0c-39be-48f9-91ce-2c2e9a30378e'
const baseURL = 'https://api.rarible.org/v0.1'

export default class RaribleAPI {
  static async getNFTCollectionsvolume<T>(
    period: PERIOD_CASES,
    limit: number,
    continuation: string = ''
  ): Promise<{ continuation: string; result: T[] }> {
    const continuationString = continuation && `continuation=${continuation}`

    const searchParams = [
      'blockchain=ETHEREUM',
      `period=${period}`,
      'sort=VOLUME_USD_DESC',
      `limit=${limit}`,
      continuationString,
    ].join('&')

    const event = `data/rankings/collections/volume`
    const url = `${baseURL}/${event}?${searchParams}`

    const data: { continuation: string; result: T[] } = await ky(url, {
      headers: {
        'X-API-KEY': KEY,
      },
    }).json()
    return data
  }
}