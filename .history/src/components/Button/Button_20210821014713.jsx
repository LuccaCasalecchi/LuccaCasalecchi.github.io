import React from 'react'
import './Button.css'

export default function Button({title}) {
  return (
    <button className="register_button" type="submit">{title}</button>
  )
}
