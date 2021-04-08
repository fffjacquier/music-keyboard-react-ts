import React, { useState } from 'react'
import { DEFAULT_INSTRUMENT } from '../../domain/sound'
import { InstrumentContext } from '../../hooks/useIntrument'

const InstrumentProvider: React.FC = ({ children }) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

  return <InstrumentContext.Provider value={{ instrument, setInstrument }}>{children}</InstrumentContext.Provider>
}

export default InstrumentProvider
