import React from 'react'
import GenerateResumeDetails from '../../../utils/generateResumeDetails'

export default function BSAP() {
  return (

    <>
    <div>
      <GenerateResumeDetails title='University of the Philippines Los Baños'
      affiliation = 'Experimental Physics'
      duration = '2011-2016'
      description = {
        ['Coursework on', 'Presented in 2 international conference', 'Designed and']
      }/>
    </div>
    </>
  )
}
