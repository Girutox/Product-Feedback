import CategoryButton from '../../components/elements/CategoryButton'
import './Home.scss'

const Home = () => {
  return (
    <>
      <header>
        <div className="home_welcome-card">
          <h2>Frontend Mentor</h2>
          <h3>Feedback Board</h3>
        </div>
        <div className='home_filter-card'>
          <CategoryButton>All</CategoryButton>
          <CategoryButton>UI</CategoryButton>
          <CategoryButton>UX</CategoryButton>
          <CategoryButton>Enhancement</CategoryButton>
          <CategoryButton>Bug</CategoryButton>
          <CategoryButton>Feature</CategoryButton>
        </div>
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