import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const stringOptions = JSON.stringify(options)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const response = await fetch(url, options)
        const responseData = await response.json()

        if (responseData.error) throw new Error(responseData.error)

        setData(responseData)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    })()
    // TODO: Remove this and craft a proper diff (AS)
  }, [stringOptions, url, options])

  return { data, error, loading }
}
