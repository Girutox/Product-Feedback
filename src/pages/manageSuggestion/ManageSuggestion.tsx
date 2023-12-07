import Input from '../../components/elements/Input'
import { useNavigate } from 'react-router-dom'
import Button, { ButtonType } from '../../components/elements/Button'

import './ManageSuggestion.scss'
import PlusIcon from '../../components/UI/PlusIcon'

const ManageSuggestion = () => {
  const navigate = useNavigate()

  const goBackHandler = () => {
    navigate('/')
  }

  return (
    <>
      <main className='manage-suggestion_main-container'>
        <nav>
          <a href='#' onClick={goBackHandler}>
            <img src={'src/assets/images/shared/icon-arrow-left.svg'} alt="" aria-hidden={true} />
            <span>Go back</span>
          </a>
        </nav>
        <div className='manage-suggestion_form-container'>
          <div className='manage-suggestion_form-container-icon'>
            <PlusIcon />
          </div>
          <h1>Create New Feedback</h1>
          <form action="">
            <Input
              label="Feedback Title"
              subtitle='Add a short, descriptive headline'
              type='text'
              id='title'
              name='title' />
            <Input
              label="Category"
              subtitle='Choose a category for your feedback'
              type='text'
              id='category'
              name='category' />
            <Input
              label="Feedback Detail"
              subtitle='Include any specific comments on what should be improved, added, etc.'
              type='text'
              id='feedbackDetail'
              name='feedbackDetail' />
            <div className='manage-suggestion_actions-container'>
              <Button type={ButtonType.CANCEL}>Cancel</Button>
              <Button>Add Feedback</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default ManageSuggestion