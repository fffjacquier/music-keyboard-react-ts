import React, { useEffect } from 'react'
import { useSoundfont } from '../../hooks/useSoundfont'
import { useAudioContext } from '../../hooks/useAudioContext'
import Keyboard from './Keyboard'
import './style.css'
import { useInstrument } from '../../hooks/useIntrument'

const KeyboardWithInstrument: React.FC = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()
  const { loading, currentInstrument, play, stop, load } = useSoundfont({ AudioContext })

  //useMount(load)
  useEffect(() => {
    if (!loading && instrument !== currentInstrument) {
      load(instrument)
    }
  }, [load, loading, currentInstrument, instrument])

  return <Keyboard loading={loading} play={play} stop={stop} />
}

export default KeyboardWithInstrument
