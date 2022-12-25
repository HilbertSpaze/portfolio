import React from 'react'
import GenerateResumeDetails from '../../../utils/generateResumeDetails'

export default function Consultant() {
  return (

    <>
    <div>
      <GenerateResumeDetails title='Maxim Integrated'
      affiliation = ''
      duration = '2021-present'
      description = {
        ['Reliability Testing of Semiconductor devices', 
        'Statistical analysis to determine product reliability..', 
        'Design of experiments.']
      }/>
    </div>
    </>
  )
}
