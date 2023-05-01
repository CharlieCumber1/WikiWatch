export type WikiStatistics = {
  editCount: number
  uniqueUsers: number
  topCountries: {
    [name: string]: number
  }
  topCities: {
    [name: string]: number
  }
};
