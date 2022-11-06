import { useEffect, useState } from 'react'
import { off, on } from './_utils'

export const isBrowser = typeof window !== 'undefined'

export interface State {
  x: number
  y: number
}

export const useWindowScroll = (): State => {
  const [state, setState] = useState<State>(() => ({
    x: isBrowser ? window.pageXOffset : 0,
    y: isBrowser ? window.pageYOffset : 0
  }))

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        const { pageXOffset, pageYOffset } = window
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return state.x !== pageXOffset || state.y !== pageYOffset
          ? {
              x: pageXOffset,
              y: pageYOffset
            }
          : state
      })
    }

    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler()

    on(window, 'scroll', handler, {
      capture: false,
      passive: true
    })

    return () => {
      off(window, 'scroll', handler)
    }
  }, [])

  return state
}
