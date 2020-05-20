import React, { useRef } from 'react'
import './styles/switch.css'

function Switch({ checked, setChecked }) {
  const ref = useRef(null)

  function handleCheckboxChange() {
    setChecked(ref.current.checked)
  }

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
