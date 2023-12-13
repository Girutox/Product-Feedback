import Input from '../../components/elements/Input'
import { useNavigate, useParams } from 'react-router-dom'
import Button, { ButtonActionType } from '../../components/elements/Button'
import FormControl from '../../components/elements/FormControl'
import Dropdown from '../../components/elements/Dropdown'
import useGetCategories from '../../hooks/useGetCategories'
import { capitalizeFirstLetter } from '../../utils/global'
import TextArea from '../../components/elements/TextArea'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'

import './ManageSuggestion.scss'

export interface IFormValues {
  title: string,
  category: string,
  status: string,
  feedbackDetail: string
}

type ManageSuggestionProps = {
  isNewMode?: boolean
}

const ManageSuggestion = ({ isNewMode = true }: ManageSuggestionProps) => {
  const navigate = useNavigate()
  const { categories } = useGetCategories()
  const { register, handleSubmit, setValue } = useForm<IFormValues>()
  const { suggestions, addSuggestion, updateSuggestion, deleteSuggestion } = useContext(SuggestionsContext) as SuggestionsContextType
  const { id } = useParams()
  const [statutes, setStatutes] = useState<{ statusName: string }[]>([])

  const suggestion = suggestions.find(item => item.id === parseInt(id ?? '0'))

  useEffect(() => {
    const getStatutes = async () => {
      const response = await fetch('https://frontendmentor.com/getStatuses')
      const data = await response.json()
      setStatutes(data)
    }

    getStatutes()
  }, [])  

  const categoryOptions = categories.map((category) => ({
    value: category.categoryName,
    label: capitalizeFirstLetter(category.categoryName)
  }))

  const statusOptions = statutes.map((status) => ({
    value: status.statusName,
    label: capitalizeFirstLetter(status.statusName)
  }))

  useEffect(() => {
    setValue('title', suggestion?.title ?? '')
    setValue('category', suggestion?.category ?? '')
    setValue('status', suggestion?.status ?? '')
    setValue('feedbackDetail', suggestion?.description ?? '')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

  useEffect(() => {
    setValue('title', suggestion?.title ?? '')
    setValue('category', suggestion?.category ?? '')
    setValue('status', suggestion?.status ?? '')
    setValue('feedbackDetail', suggestion?.description ?? '')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusOptions])

  const goBackHandler = () => {
    navigate('/')
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (isNewMode) {
      addSuggestion(data)
    } else {
      updateSuggestion({
        id: suggestion?.id ?? 0,
        title: data.title,
        category: data.category,
        status: data.status,
        description: data.feedbackDetail,
        upvotes: suggestion?.upvotes ?? 0
      })
    }

    navigate('/')
  }

  const deleteSuggestionClickHandler = () => {
    deleteSuggestion(parseInt(id ?? '0'))
    navigate('/')
  }

  return (
    <>
      <main className='manage-suggestion_main-container'>
        <nav>
          <a href='#' onClick={goBackHandler}>
            <img src={'/src/assets/images/shared/icon-arrow-left.svg'} alt="" aria-hidden={true} />
            <span>Go back</span>
          </a>
        </nav>
        <div className='manage-suggestion_form-container'>
          <div className='manage-suggestion_form-container-icon'>
            {
              isNewMode && <img src={'/src/assets/images/shared/icon-new-feedback.svg'} alt="" aria-hidden={true} />
            }
            {
              !isNewMode && <img src={'/src/assets/images/shared/icon-edit-feedback.svg'} alt="" aria-hidden={true} />
            }
          </div>
          <h1>{isNewMode ? 'Create New Feedback' : `Editing ´${suggestion?.title}´`}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl label="Feedback Title" subtitle='Add a short, descriptive headline' id='title'>
              <Input type='text' defaultValue={suggestion?.title} label='title' register={register} required />
            </FormControl>
            <FormControl label="Category" subtitle='Choose a category for your feedback' id='category'>
              <Dropdown defaultValue={suggestion?.category} options={categoryOptions} label='category' register={register} required />
            </FormControl>
            {
              !isNewMode &&
              <FormControl label="Update Status" subtitle='Change feedback state' id='status'>
                <Dropdown defaultValue={suggestion?.status} options={statusOptions} label='status' register={register} required />
              </FormControl>
            }
            <FormControl label="Feedback Detail" subtitle='Include any specific comments on what should be improved, added, etc.' id='feedbackDetail'>
              <TextArea defaultValue={suggestion?.description} label='feedbackDetail' register={register} required />
            </FormControl>
            <div className='manage-suggestion_actions-container'>
              {
                isNewMode &&
                <>
                  <Button actionType={ButtonActionType.CANCEL} onClick={goBackHandler}>Cancel</Button>
                  <Button type='submit'>Add Feedback</Button>
                </>
              }
              {
                !isNewMode &&
                <>
                  <Button actionType={ButtonActionType.DELETE} onClick={deleteSuggestionClickHandler}>Delete</Button>
                  <Button actionType={ButtonActionType.CANCEL} onClick={goBackHandler}>Cancel</Button>
                  <Button type='submit'>Save Changes</Button>
                </>
              }
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default ManageSuggestion