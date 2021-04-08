import React from 'react'
import { useAudioContext } from '../../hooks/useAudioContext'
import KeyboardWithInstrument from '../Keyboard/KeyboardWithInstrument'
import NoAudio from '../NoAudio/NoAudio'

const Main: React.FC = () => {
  const AudioContext = useAudioContext()
  //console.log(AudioContext)

  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudio />
}

export default Main
