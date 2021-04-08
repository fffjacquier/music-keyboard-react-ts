import React from 'react'
import { useAudioContext } from '../../hooks/useAudioContext'
import NoAudio from '../NoAudio/NoAudio'
import Playground from '../Playground/Playground'

const Main: React.FC = () => {
  const AudioContext = useAudioContext()
  //console.log(AudioContext)

  return !!AudioContext ? <Playground /> : <NoAudio />
}

export default Main
