import Input from '../../components/elements/Input'
import { useNavigate } from 'react-router-dom'
import Button, { ButtonType } from '../../components/elements/Button'
import PlusIcon from '../../components/UI/PlusIcon'
import FormControl from '../../components/elements/FormControl'
import Dropdown from '../../components/elements/Dropdown'
import useGetCategories from '../../hooks/useGetCategories'
import { capitalizeFirstLetter } from '../../utils/global'
import TextArea from '../../components/elements/TextArea'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'

import './ManageSuggestion.scss'

export interface IFormValues {
  title: string,
  category: string,
  feedbackDetail: string
}

const ManageSuggestion = () => {
  const navigate = useNavigate()
  const { categories } = useGetCategories()
  const { register, handleSubmit } = useForm<IFormValues>()
  const { addSuggestion } = useContext(SuggestionsContext) as SuggestionsContextType

  const goBackHandler = () => {
    navigate('/')
  }

  const categoryOptions = categories.map((category) => ({
    value: category.categoryName,
    label: capitalizeFirstLetter(category.categoryName)
  }))

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    addSuggestion(data)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl label="Feedback Title" subtitle='Add a short, descriptive headline' id='title'>
              <Input type='text' label='title' register={register} required />
            </FormControl>
            <FormControl label="Category" subtitle='Choose a category for your feedback' id='category'>
              <Dropdown options={categoryOptions} label='category' register={register} required />
            </FormControl>
            <FormControl label="Feedback Detail" subtitle='Include any specific comments on what should be improved, added, etc.' id='feedbackDetail'>
              <TextArea label='feedbackDetail' register={register} required />
            </FormControl>
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