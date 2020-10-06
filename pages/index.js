import React, { useEffect, useState } from 'react'
import url from 'url'
import { ComingSoon, Homepage } from '../Layouts'

const Home = () => {
  const [isBeta, setIsBeta] = useState(false)

  useEffect(() => {
    const isBeta = 'is-beta'
    const isBetaStorageItem = window.localStorage.getItem(isBeta)
    const { query } = url.parse(window.location.href)
    setIsBeta(isBetaStorageItem || query === isBeta)
  })

  const Component = isBeta ? Homepage : ComingSoon
  return <Component />
}

export default Home
