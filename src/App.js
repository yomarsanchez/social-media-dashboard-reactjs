import React, { useState, useEffect } from 'react'
import Header from './components/header'
import SocialMediaCardList from './components/social-media-card-list'
import OverviewToday from './components/overview-today'
import Switch from './components/switch'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  function handlePrefersColorSchemeChange(event) {
    setDarkMode(event.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mq.matches)
    mq.addListener(handlePrefersColorSchemeChange)
  }, [])

  return (
    <main className={darkMode ? 'is-dark-mode' : 'is-light-mode'}>
      <Header>
        <Switch checked={darkMode} setChecked={setDarkMode} />
      </Header>
      <SocialMediaCardList />
      <OverviewToday />
    </main>
  )
}
