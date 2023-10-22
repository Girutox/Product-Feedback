import BoardWelcome from '../../components/board/Welcome'
import Suggestions from '../../components/suggestions/Suggestions'

import './Home.scss'

const Home = () => {
  return (
    <>
      <header>
        <BoardWelcome />
      </header>
      <main>
        <Suggestions />
      </main>
    </>
  )
}

export default Home