import React from 'react'
import { MidiValue, notes } from '../../domain/note'
import Key from '../Key/Key'
import './style.css'

// for the keys we do not need to care about keyboard language
// because we'll rely upon the key.code
const KEYS1 = 'q2w3er5t6y7u'
const KEYS2 = 'zsxdcvgbhnjm'

interface KeyboardProps {
  loading: boolean
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

const Keyboard: React.FC<KeyboardProps> = ({ loading, stop, play }) => {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const keys = octave < 5 ? Array.from(KEYS1) : Array.from(KEYS2)
        const label = keys[index]

        return (
          <Key
            key={midi}
            type={type}
            label={label}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
            disabled={loading}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
