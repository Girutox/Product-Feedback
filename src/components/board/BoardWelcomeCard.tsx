import { BACKGROUND_VARIANTS } from '../../models/defaultCard'
import DefaultCard from '../UI/DefaultCard'

const BoardWelcomeCard = () => {
  return <DefaultCard backgroundVariant={BACKGROUND_VARIANTS.FADED}>
    <h2 className="text-white">Frontend Mentor</h2>
    <h4 className="board-welcome-card_subtitle text-white">Feedback Board</h4>
  </DefaultCard>
}

export default BoardWelcomeCard