import { ComponentFormsForexSimulator } from '@/__generated__/graphql'
import React from 'react'
import mapper from './mapper'
import ForexSimulator from '@/components/ForexSimulator'

function FormsForexSimulatorFragment(props:ComponentFormsForexSimulator) {
    const data =  mapper(props)
  return (
    <div>
        <ForexSimulator {...data} />
    </div>
  )
}

export default FormsForexSimulatorFragment