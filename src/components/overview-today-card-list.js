import React from 'react'
import CardView from './card-view'
import cardListData from '../server/overview-today-api'

function OverviewTodayCardList() {
  return (
    <div className="grid">
      {cardListData.map(({ id, description, icon, total, percentage }) => (
        <CardView
          key={id}
          description={description}
          icon={icon}
          total={total}
          percentage={percentage}
        />
      ))}
    </div>
  )
}

export default OverviewTodayCardList
