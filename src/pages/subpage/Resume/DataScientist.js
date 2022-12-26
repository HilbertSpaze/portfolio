import React from 'react'
import GenerateResumeDetails from '../../../utils/generateResumeDetails'

export default function Consultant() {
  return (

    <>
    <div>
      <GenerateResumeDetails title='Moog Inc.'
      affiliation = 'Advanced Operations | Smart Factory'
      duration = '2021-present'
      description = {
        ['Built various ML solutions to predict', 
        'Developed proof of concept.', 
        'Recommendations to advance the digital transformation of the company to move from descriptive to prescriptive.']
      }/>
    </div>
    </>
  )
}