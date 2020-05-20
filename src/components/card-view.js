import React from 'react'
import './styles/card-view.css'
import UpDownIcon from './up-down-icon'

function CardView({ description, icon, total, percentage }) {
  const abbreviatedTotal =
    Math.abs(total) > 9999
      ? Math.sign(total) * (Math.abs(total) / 1000).toFixed(1) + 'k'
      : Math.sign(total) * Math.abs(total)

  return (
    <article className="card-view">
      <p className="card-view__description">{description}</p>
      <p className="card-view__icon">
        <img src={icon.url} alt={icon.name} />
      </p>
      <p className="card-view__total">{abbreviatedTotal}</p>
      <p
        className={`card-view__percentage${percentage < 0 ? ' is-danger' : ''}`}
      >
        <span>
          <UpDownIcon total={percentage} />
          {Math.abs(percentage)}%
        </span>
      </p>
    </article>
  )
}

export default CardView
