import BoardFiltersCard from '../../components/board/BoardFiltersCard'
import BoardRoadMapCard from '../../components/board/BoardRoadMapCard'
import BoardWelcomeCard from '../../components/board/BoardWelcomeCard'
import Suggestions from '../../components/suggestions/Suggestions'

import './Home.scss'

const Home = () => {
  return (
    <>
      <header className='home_header'>
        <BoardWelcomeCard />
        <BoardFiltersCard />
        <BoardRoadMapCard />
      </header>
      <main>
        <Suggestions />
      </main>
    </>
  )
}

export default Home