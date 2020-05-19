import React from 'react'
import './styles/overview-today.css'
import OverviewTodayCardList from './overview-today-card-list'

function OverviewToday() {
  return (
    <section className="overview-today-cards">
      <div className="wrapper">
        <h2 className="overview-today-cards__title">Overview - Today</h2>
        <OverviewTodayCardList />
      </div>
    </section>
  )
}

export default OverviewToday
