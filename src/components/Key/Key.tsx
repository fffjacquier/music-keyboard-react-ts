import clsx from 'clsx'
import React, { ReactEventHandler } from 'react'
import { NoteType } from '../../domain/note'
import { usePressObserver } from '../../hooks/usePressObserver'
import './style.css'

interface KeyProps {
  type: NoteType
  label: string
  disabled?: boolean
  onDown: ReactEventHandler<HTMLButtonElement>
  onUp: ReactEventHandler<HTMLButtonElement>
}

const Key: React.FC<KeyProps> = ({ type, label, onDown, onUp, ...other }) => {
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  })

  const frKeys: Record<string, string> = {
    'q': 'a',
    '2': 'é',
    'w': 'z',
    '3': '"',
    'e': 'e',
    'r': 'r',
    '5': '(',
    't': 't',
    '6': '§',
    'y': 'y',
    '7': 'è',
    'u': 'u',
    'z': 'w',
    's': 's',
    'x': 'x',
    'd': 'd',
    'c': 'c',
    'v': 'v',
    'g': 'g',
    'b': 'b',
    'h': 'h',
    'n': 'n',
    'j': 'j',
    'm': ',',
  }

  return (
    <button
      className={clsx(`key key--${type}`, pressed && 'is-pressed')}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...other}
    >
      {frKeys[label]}
    </button>
  )
}

export default Key
export type KeyLabel = string
