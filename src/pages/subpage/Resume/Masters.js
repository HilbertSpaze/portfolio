import React from 'react'
import GenerateResumeDetails from '../../../utils/generateResumeDetails'

export default function Consultant() {
  return (

    <>
    <div>
      <GenerateResumeDetails title='Asian Institute of Management'
      affiliation = 'MSc. Data Science'
      duration = '2020-2021'
      description = {
        ['Courses on', 
        'Capstone', 
        'kd']
      }/>
    </div>
    </>
  )
}
