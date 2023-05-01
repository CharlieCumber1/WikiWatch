export type BooleanCount = {
  0?: number
  1?: number
}

export type WikiStatistics = {
  firstEdit: string
  lastEdit: string
  editCount: number
  uniqueUsers: number
  topCountries: {
    [name: string]: number
  }
  topCities: {
    [name: string]: number
  }
  anonymous: BooleanCount
  bots: BooleanCount
  minor: BooleanCount
  new: BooleanCount
  unpatrolled: BooleanCount
  changeDelta: {
    label: string
    timestamp: number
    diff: number
    runningTotal: number
  }[]
};
