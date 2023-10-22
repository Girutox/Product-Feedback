import BoardWelcomeCard from '../../components/board/BoardWelcomeCard'
import Suggestions from '../../components/suggestions/Suggestions'

import './Home.scss'

const Home = () => {
  return (
    <>
      <header>
        <BoardWelcomeCard />
      </header>
      <main>
        <Suggestions />
      </main>
    </>
  )
}

export default Home