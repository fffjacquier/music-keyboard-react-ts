import { useEffect, useState } from 'react'
import { KeyLabel } from '../components/Key/Key'

type IsPressed = boolean
type EventCode = string

interface Settings {
  watchKey: KeyLabel
  onStartPress: Function
  onFinishPress: Function
}

function codeEqual(key: KeyLabel, code: EventCode): boolean {
  return code.replace(/Key|Digit/gi, '').toUpperCase() === key.toUpperCase()
}

export function usePressObserver({ watchKey, onStartPress, onFinishPress }: Settings): IsPressed {
  const [pressed, setPressed] = useState<IsPressed>(false)

  useEffect(() => {
    function onKeyDown({ code }: KeyboardEvent) {
      if (pressed || !codeEqual(watchKey, code)) return
      setPressed(true)
      onStartPress()
    }

    function onKeyUp({ code }: KeyboardEvent) {
      if (!pressed || !codeEqual(watchKey, code)) return
      setPressed(false)
      onFinishPress()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress])

  return pressed
}
