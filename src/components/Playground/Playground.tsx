import React from 'react'
import InstrumentProvider from '../Instrument/InstrumentProvider'
import InstrumentSelector from '../Instrument/InstrumentSelector'
import KeyboardWithInstrument from '../Keyboard/KeyboardWithInstrument'

const Playground: React.FC = () => {
  return (
    <InstrumentProvider>
      <div>
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentProvider>
  )
}

export default Playground
