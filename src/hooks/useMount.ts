import { EffectCallback, useEffect } from 'react'

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useMount = (fn: Function) => {
  useEffectOnce(() => fn())
}
