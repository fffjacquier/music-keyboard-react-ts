import React, { useEffect } from 'react'
import { useSoundfont } from '../../adapters/useSoundfont'
import { useMount } from '../../hooks/useMount'
import { useAudioContext } from '../../hooks/useAudioContext'
import Keyboard from './Keyboard'
import './style.css'

const KeyboardWithInstrument: React.FC = () => {
  const AudioContext = useAudioContext()!
  const { loading, play, stop, load } = useSoundfont({ AudioContext })

  useMount(load)

  return <Keyboard loading={loading} play={play} stop={stop} />
}

export default KeyboardWithInstrument
