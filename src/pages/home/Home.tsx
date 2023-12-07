import { useEffect, useState } from 'react'
import BoardFiltersCard from '../../components/board/BoardFiltersCard'
import BoardRoadMapCard from '../../components/board/BoardRoadMapCard'
import BoardWelcomeCard from '../../components/board/BoardWelcomeCard'
import Suggestions from '../../components/suggestions/Suggestions'
import { CategoryItem } from '../../components/board/BoardFiltersCard.d'

import './Home.scss'

const Home = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://frontendmentor.com/getCategories')
      const data = await response.json()
      setCategories(data)
    }

    getCategories()
  }, [])

  return (
    <>
      <header className='home_header'>
        <BoardWelcomeCard />
        <BoardFiltersCard categories={categories} />
        <BoardRoadMapCard />
      </header>
      <main className='home_main-container'>
        <Suggestions />
      </main>
    </>
  )
}

export default Home