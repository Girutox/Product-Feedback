import { BACKGROUND_VARIANTS } from '../../models/defaultCard'
import DefaultCard from '../UI/DefaultCard'
// import HamburguerIcon from '../../assets/images/shared/mobile/icon-hamburger.svg'

const BoardWelcomeCard = () => {
  return <DefaultCard backgroundVariant={BACKGROUND_VARIANTS.FADED}>
    <div className='board-welcome-card_container'>
      <div>
        <h2 className="text-white">Frontend Mentor</h2>
        <h4 className="board-welcome-card_subtitle text-white">Feedback Board</h4>
      </div>
      {/* <img src={HamburguerIcon} alt="Button to show the filter by category options" /> */}
    </div>
  </DefaultCard>
}

export default BoardWelcomeCard