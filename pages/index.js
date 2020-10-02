import React, { useEffect, useState } from 'react'
import { ComingSoon, Homepage } from '../Layouts'

const Home = () => {
  const [isBeta, setIsBeta] = useState(false)

  useEffect(() => {
    const isBetaStorageItem = window.localStorage.getItem('is-beta')
    setIsBeta(isBetaStorageItem)
  })

  const Component = isBeta ? Homepage : ComingSoon
  return <Component />
}

export default Home
