import React, { useRef, useEffect, useState } from 'react'
import './styles/switch.css'

function Switch() {
  const [checked, setChecked] = useState(false)
  const ref = useRef(null)

  function handleCheckboxChange() {
    console.log(ref.current.checked)
    setChecked(ref.current.checked)
    if (ref.current.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }

  function handlePrefersColorSchemeChange(event) {
    setChecked(event.matches)
    if (event.matches) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(handlePrefersColorSchemeChange)
    setChecked(mq.matches)
  }, [])

  return (
    <div className="dark-mode">
      <p className="dark-mode__title">Dark Mode</p>
      <input
        type="checkbox"
        className="dark-mode__checkbox"
        id="checkbox"
        checked={checked}
        ref={ref}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="dark-mode__switch"></label>
    </div>
  )
}

export default Switch
