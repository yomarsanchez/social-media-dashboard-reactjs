import React from 'react'
import './styles/social-media-card-list.css'
import Card from './card'
import cardListData from '../server/social-media-api'

function SocialMediaCardList() {
  return (
    <section className="social-media-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMediaCardList
