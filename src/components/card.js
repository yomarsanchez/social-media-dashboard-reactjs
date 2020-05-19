import React from 'react'
import './styles/card.css'

function Card({
  username,
  socialNetwork,
  icon,
  total,
  description,
  totalToday,
}) {
  const cardClass = `card ${socialNetwork}`
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon.url} alt={icon.name} />
        {username}
      </p>
      <p className="card-social">
        <span className="card-social__total">{total}</span>
        <span className="card-social__description">{description}</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="Up Followers" />
        {totalToday} Today
      </p>
    </article>
  )
}

export default Card
