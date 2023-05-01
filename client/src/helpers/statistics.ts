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
};
