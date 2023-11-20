import BoardFiltersCard from '../../components/board/BoardFiltersCard'
import BoardWelcomeCard from '../../components/board/BoardWelcomeCard'
import './Home.scss'

const Home = () => {
  return (
    <>
      <header>
        <BoardWelcomeCard />
        <BoardFiltersCard />
        <div className='home_roadmap-card'>
          <h3>Roadmap</h3>
          <a href="">View</a>
          <ul>
            <li>
              <span>Planned</span>
              <span>2</span>
            </li>
            <li>
              <span>In-Progress</span>
              <span>3</span>
            </li>
            <li>
              <span>Live</span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section>
          <span>4 Suggestions</span>
        </section>
        <section>

        </section>
      </main>
    </>
  )
}

export default Home