import React from 'react'
import './styles/card.css'
import UpDownIcon from './up-down-icon'

function Card({
  username,
  socialNetwork,
  icon,
  total,
  description,
  totalToday,
}) {
  const cardClass = `card ${socialNetwork}`
  const abbreviatedTotal =
    Math.abs(total) > 9999
      ? Math.sign(total) * (Math.abs(total) / 1000).toFixed(1) + 'k'
      : Math.sign(total) * Math.abs(total)

  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon.url} alt={icon.name} />
        {username}
      </p>
      <p className="card-social">
        <span className="card-social__total">{abbreviatedTotal}</span>
        <span className="card-social__description">{description}</span>
      </p>
      <p className={`card-today${totalToday < 0 ? ' is-danger' : ''}`}>
        <UpDownIcon total={totalToday} />
        {Math.abs(totalToday)} Today
      </p>
    </article>
  )
}

export default Card
