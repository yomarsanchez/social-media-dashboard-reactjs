import React from 'react'
import './styles/card-view.css'

function CardView({ description, icon, total, percentage }) {
  return (
    <article className="card-view">
      <p className="card-view__description">{description}</p>
      <p className="card-view__icon">
        <img src={icon.url} alt={icon.name} />
      </p>
      <p className="card-view__total">{total}</p>
      <p className="card-view__percentage">
        <span>
          <img src="images/icon-up.svg" alt="Up Percentage" />
          {percentage}%
        </span>
      </p>
    </article>
  )
}

export default CardView
