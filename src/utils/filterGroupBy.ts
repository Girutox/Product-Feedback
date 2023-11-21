import { ProductRequest } from '../components/suggestions/suggestionsList/SuggestionsList.d'

export type FilterGroupBy = {
  status: string,
  count: number
}

export const filterGroupBy = (suggestions: ProductRequest[]) => {
  const output: FilterGroupBy[] = []

  suggestions.forEach((suggestion) => {
    const { status } = suggestion

    if (!output.some((item) => item.status === status)) {
      output.push({ status, count: 1 })
    } else {
      output.forEach((item) => {
        if (item.status === status) {
          item.count += 1
        }
      })
    }
  })

  return output
}