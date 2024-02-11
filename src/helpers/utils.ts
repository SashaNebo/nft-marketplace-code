export const getRankingRouterLink = (rankingInfo: (key: string, index: number) => string) => {
  return (i: number): string => {
    return rankingInfo('id', i) ? `artist/${rankingInfo('id', i).split(':')[1]}` : ''
  }
}
