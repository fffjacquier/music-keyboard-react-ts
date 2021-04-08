import { useRef } from 'react'
import { accessAudioContext } from '../domain/audio'
import { Optional } from '../domain/types'

export function useAudioContext(): Optional<AudioContextType> {
  const audioCtx = useRef(accessAudioContext())
  return audioCtx.current
}
