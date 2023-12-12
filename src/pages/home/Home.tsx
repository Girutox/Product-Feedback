import BoardFiltersCard from '../../components/board/BoardFiltersCard'
import BoardRoadMapCard from '../../components/board/BoardRoadMapCard'
import BoardWelcomeCard from '../../components/board/BoardWelcomeCard'
import Suggestions from '../../components/suggestions/Suggestions'
import useGetCategories from '../../hooks/useGetCategories'

import './Home.scss'


const Home = () => {
  const { categories } = useGetCategories()  

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