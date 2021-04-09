import React, { ChangeEvent, useEffect, useRef } from 'react'
import { InstrumentName } from 'soundfont-player'
import { useInstrument } from '../../hooks/useIntrument'
import { Options } from './Options'
import './style.css'

const InstrumentSelector: React.FC = () => {
  const selectInput = useRef<HTMLSelectElement>(null)
  const { instrument, setInstrument } = useInstrument()

  useEffect(() => {
    if (null !== selectInput.current) {
      selectInput.current.blur()
    }
  }, [instrument])

  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setInstrument(target.value as InstrumentName)
  }

  return (
    <select ref={selectInput} value={instrument} onChange={updateValue} className="instruments">
      {Options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default InstrumentSelector
