import React from 'react'

function UpDownIcon({ total }) {
  const url = total > 0 ? 'images/icon-up.svg' : 'images/icon-down.svg'
  const alt = total > 0 ? 'Up' : 'Down'
  return <img src={url} alt={alt} />
}

export default UpDownIcon
