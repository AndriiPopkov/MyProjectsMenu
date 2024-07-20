import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
        <div className='menu_wrapper'>
            <Link className='link' to={'/'}>
                <p>Home</p>
            </Link>

            <Link className='link' to={'/darts'}>
                <p>Darts game</p>
            </Link>

            <Link className='link' to={'/numbers'}>
                <p>Numbers</p>
            </Link>
        </div>
    </div>
  )
}

