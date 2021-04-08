import React, { ChangeEvent } from 'react'
import { InstrumentName } from 'soundfont-player'
import { useInstrument } from '../../hooks/useIntrument'
import { Options } from './Options'
import './style.css'

const InstrumentSelector: React.FC = () => {
  const { instrument, setInstrument } = useInstrument()
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => setInstrument(target.value as InstrumentName)

  return (
    <select value={instrument} onChange={updateValue} className="instruments">
      {Options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default InstrumentSelector
