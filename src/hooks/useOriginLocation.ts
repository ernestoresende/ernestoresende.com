import { useEffect, useState } from 'react'

export function useOriginLocation() {
  const [originLocation, setOriginLocation] = useState<string>('')

  useEffect(() => {
    setOriginLocation(window.location.origin)
  }, [])

  return originLocation
}
