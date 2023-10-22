import { BACKGROUND_VARIANTS } from '../../models/defaultCard'

import './DefaultCard.scss'

const backgroundVariants = {
  [BACKGROUND_VARIANTS.DEFAULT]: 'bg-white',
  [BACKGROUND_VARIANTS.FADED]: 'bg-custom-faded'
}

type DefaultCardProps = {
  backgroundVariant?: BACKGROUND_VARIANTS,
  children: React.ReactNode
}
const DefaultCard = ({ backgroundVariant = BACKGROUND_VARIANTS.DEFAULT, children }: DefaultCardProps) => {
  const backgroundClass = backgroundVariants[backgroundVariant]
  
  return <div className={`default-card_container ${backgroundClass}`}>
    {children}
  </div>
}

export default DefaultCard