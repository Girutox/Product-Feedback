import { useNavigate } from 'react-router-dom'
import './Roadmap.scss'
import Button, { ButtonActionType } from '../../components/elements/Button'
import { useEffect, useState } from 'react'
import RoadmapColumn from './columns/RoadmapColumn'

const Roadmap = () => {
  const [statutes, setStatutes] = useState<{ statusName: string, statusDescription: string }[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const getStatutes = async () => {
      const response = await fetch('https://frontendmentor.com/getStatuses')
      const data = await response.json()
      setStatutes(data)
    }

    getStatutes()
  }, [])

  const goBackHandler = () => {
    navigate(-1)
  }

  const addFeedbackClickHandler = () => {
    navigate('/manageFeedBack')
  }

  return (
    <>
      <main className='roadmap_main-container'>
        <header className='roadmap_header-toolbar'>
          <nav>
            <a href='#' onClick={goBackHandler}>
              <img src={'/src/assets/images/shared/icon-arrow-left.svg'} alt="" aria-hidden={true} />
              <span>Go back</span>
            </a>
          </nav>
          <div className='roadmap_title-container'>
            <h1>Roadmap</h1>
            <Button actionType={ButtonActionType.ADD} onClick={addFeedbackClickHandler}>+ Add Feedback</Button>
          </div>
        </header>
        <section className='roadmap_columnns-container'>
          {
            statutes.map((status, index) => (
              <RoadmapColumn
                key={index}
                statusName={status.statusName}
                statusDescription={status.statusDescription} />
            ))
          }
        </section>
      </main>
    </>
  )
}

export default Roadmap