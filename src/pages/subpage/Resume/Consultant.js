import React from 'react'
import GenerateResumeDetails from '../../../utils/generateResumeDetails'

export default function Consultant() {
  return (

    <>
    <div>
      <GenerateResumeDetails title='Moog Inc.'
      affiliation = 'Smart Factory'
      duration = '2020-2021'
      description = {
        ['Project scoping for the development of the 1st machine learning system for the company that will help reduce scrap and rework costs of the company', 
        'Developed proof of concept.', 
        'Recommendations to advance the digital transformation of the company to move from descriptive to prescriptive.']
      }/>
    </div>
    </>
  )
}
