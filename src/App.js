import React from 'react'
import Header from './components/header'
import SocialMediaCardList from './components/social-media-card-list'
import OverviewToday from './components/overview-today'
import Switch from './components/switch'

function App() {
  return (
    <main>
      <Header>
        <Switch />
      </Header>
      <SocialMediaCardList />
      <OverviewToday />
    </main>
  )
}

export default App
