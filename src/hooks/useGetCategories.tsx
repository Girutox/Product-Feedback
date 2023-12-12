import { useEffect, useState } from 'react'
import { CategoryItem } from '../components/board/BoardFiltersCard.d'

const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://frontendmentor.com/getCategories')
      const data = await response.json()
      setCategories(data)
    }

    getCategories()
  }, [])

  return { categories }
}

export default useGetCategories