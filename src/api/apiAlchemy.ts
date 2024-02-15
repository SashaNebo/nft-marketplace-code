import ky from 'ky'
export const getContractMetadataBatch = async <T>(addresses: string[]): Promise<T[]> => {
  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({
      contractAddresses: addresses,
    }),
  }

  const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3'
  const apiKey = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
  const method = 'getContractMetadataBatch'

  const data: { contracts: T[] } = await ky.post(`${baseURL}/${apiKey}/${method}`, options).json()
  return data?.contracts
}
