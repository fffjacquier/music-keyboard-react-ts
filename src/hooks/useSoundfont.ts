import { useRef, useState } from 'react'
import Soundfont, { InstrumentName, Player } from 'soundfont-player'
import { MidiValue } from '../domain/note'
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from '../domain/sound'
import { Optional } from '../domain/types'

interface Settings {
  AudioContext: AudioContextType
}

interface SoundAdapter {
  loading: boolean
  currentInstrument: Optional<InstrumentName>
  load(instrument?: InstrumentName): Promise<void>
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

export function useSoundfont({ AudioContext }: Settings): SoundAdapter {
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [player, setPlayer] = useState<Optional<Player>>(null)

  const audio = useRef(new AudioContext())

  let activeNodes: AudioNodesRegistry = {}

  async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
    setLoading(true)
    const player = await Soundfont.instrument(audio.current, instrument)
    setPlayer(player)
    setCurrent(instrument)
    setLoading(false)
  }

  async function play(note: MidiValue) {
    await resume()
    if (!player) {
      return
    }

    const node = player.play(note.toString())
    activeNodes = { ...activeNodes, [note]: node }
  }

  async function stop(note: MidiValue) {
    await resume()
    if (!activeNodes[note]) return

    activeNodes[note]!.stop()
    activeNodes = { ...activeNodes, [note]: null }
  }

  async function resume() {
    return audio.current.state === 'suspended' ? await audio.current.resume() : Promise.resolve()
  }

  return {
    loading,
    currentInstrument: current,
    play,
    stop,
    load,
  }
}
